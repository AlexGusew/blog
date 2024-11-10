import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Code from "@/components/code/code";
import createH from "@/components/headings";
import AlgorithmSummary from "@/components/algorithmSummary";
import Problem from "@/components/problem";
import ProblemComplexity from "@/components/problemComplexity";
import ProblemBadge from "@/components/problemBadge";
import { Draft } from "@/components/draft";

const components = {
  Image: () => null,
  pre: Code,
  h1: createH("h1"),
  h2: createH("h2"),
  AlgorithmSummary,
  Problem,
  ProblemComplexity,
  ProblemBadge,
  Draft,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
