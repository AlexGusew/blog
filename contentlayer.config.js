import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePresetMinify from "rehype-preset-minify";
import rehypeKatex from "rehype-katex";

/** @type {import('contentlayer2/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    difficulty: {
      type: "number",
    },
  },
  computedFields,
}));

/** @type {import("rehype-pretty-code").Options} */
const rehypePrettyCodeOptions = {
  theme: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  bypassInlineCode: true,
};

export default makeSource({
  contentDirPath: "./content",
  mdx: {
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeMdxCodeProps,
      ...rehypePresetMinify.plugins,
    ],
    remarkPlugins: [remarkMath],
  },
  documentTypes: [Post, Page],
});
