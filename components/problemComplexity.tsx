"use client";

// import { MathJax } from "better-react-mathjax";
import { type FC } from "react";

interface ProblemComplexityProps {
  tc?: string;
  sc?: string;
}

const ProblemComplexity: FC<ProblemComplexityProps> = ({ tc, sc }) => {
  const renderData = [
    ["Time Complexity", tc],
    ["Space Complexity", sc],
  ] as const;

  return (
    <section className="px-8 py-8 flex flex-col relative">
      {renderData
        .filter((i) => i[1])
        .map(([label, value]) => (
          <div
            key={label + value}
            className="flex justify-between items-baseline"
          >
            <span className="text-sm">{label}</span>
            {/* <MathJax>{value}</MathJax> */}
          </div>
        ))}
    </section>
  );
};

export default ProblemComplexity;
