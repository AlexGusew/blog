// "use client";

import Info from "@/components/algorithmSummary/info";
import { InlineMath } from "@/components/react-katex";
import { type FC, type PropsWithChildren } from "react";

interface ListValue {
  raw?: string;
  latex?: string;
}

interface AlgorithmSummaryProps extends PropsWithChildren {
  tc?: ListValue;
  sc?: ListValue;
}

const AlgorithmSummary: FC<AlgorithmSummaryProps> = ({ children, tc, sc }) => {
  const renderData = [
    ["Time Complexity", tc],
    ["Space Complexity", sc],
  ] as const;

  return (
    <section className="border-zinc-400 border-opacity-40 border-2 px-8 py-8 rounded-lg flex flex-col relative">
      {renderData
        .filter((i) => i[1]?.raw || i[1]?.latex)
        .map(([label, value]) => (
          <div
            key={label + value}
            className="flex flex-wrap justify-between items-baseline"
          >
            <span className="text-sm">{label}</span>
            {/* {value?.latex && <InlineMath math={value.latex} />} */}
            {value?.raw}
          </div>
        ))}
      <div className="text-sm opacity-70">{children}</div>
      <div className="absolute right-1 top-1">
        <Info />
      </div>
    </section>
  );
};

export default AlgorithmSummary;
