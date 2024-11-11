import ProblemBadge from "@/components/problemBadge";
import type { PropsWithChildren } from "react";

interface LeetCodeProblemProps extends PropsWithChildren {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  link: string;
  example: {
    input: string;
    output: string;
    explanation: string;
  };
}

export default function Problem({
  title,
  difficulty,
  children,
  example,
  link,
}: LeetCodeProblemProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-transparent text-zinc-500 dark:text-zinc-400">
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mt-2">
            <a className="text-xl" href={link}>
              {title}
            </a>
          </h2>
        </div>
        <div>
          <ProblemBadge difficulty={difficulty} />
        </div>
      </div>
      <div>
        <div>{children}</div>
        {example && (
          <div>
            <p className="font-semibold mb-2">Example:</p>
            <div className="dark:bg-[#282c34] p-4 rounded-xl">
              <div>
                <span className="font-semibold">Input:</span> {example.input}
              </div>
              <div>
                <span className="font-semibold">Output:</span> {example.output}
              </div>
              {!!example.explanation && (
                <div>
                  <span className="font-semibold">Explanation:</span>{" "}
                  {example.explanation}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
