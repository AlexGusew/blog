import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import tcgetterScreenshot from "@/public/tcgetter-screenshot.png";
import lctodoScreenshot from "@/public/lctodo-screenshot.png";

export const metadata: Metadata = {
  title: "Apps",
  description: "Apps by Alex Gusev",
};

const apps: {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  isNew: boolean;
}[] = [
  {
    title: "TC Getter",
    description:
      "Calculate Big-O time complexity of Python code in the browser",
    href: "https://tcgetter.alexcoders.com",
    image: tcgetterScreenshot,
    isNew: true,
  },
  {
    title: "LC Todo",
    description: "Track your LeetCode problem-solving progress",
    href: "https://lctodo.alexcoders.com",
    image: lctodoScreenshot,
    isNew: false,
  },
];

export default function AppsPage() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <h1>Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
        {apps.map((app) => (
          <a
            key={app.title}
            href={app.href}
            target="_blank"
            className="block border border-gray-300 dark:border-zinc-700 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-zinc-500 transition-colors"
          >
            <Image
              src={app.image}
              alt={`${app.title} screenshot`}
              placeholder="blur"
              className="w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                {app.title}
                {app.isNew && (
                  <span className="text-[11px] font-medium text-blue-500 dark:text-blue-400">
                    new
                  </span>
                )}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {app.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
