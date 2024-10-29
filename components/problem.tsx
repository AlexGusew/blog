import ProblemBadge from "@/components/problemBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="w-full max-w-2xl mx-auto shadow-none border-none">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold mt-2">
            <a className="text-xl" href={link}>
              {title}
            </a>
          </CardTitle>
        </div>
        <CardDescription>
          <ProblemBadge difficulty={difficulty} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-gray-700">{children}</div>

        {example && (
          <div>
            <p className="font-semibold mb-2">Example:</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <div>
                <span className="font-semibold">Input:</span> {example.input}
              </div>
              <div>
                <span className="font-semibold">Output:</span> {example.output}
              </div>
              <div>
                <span className="font-semibold">Explanation:</span>{" "}
                {example.explanation}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
