import React, { type FC, type PropsWithChildren } from "react";

const ProblemComplexity: FC<PropsWithChildren> = ({ children }) => {
  const [timeComplexity, spaceComplexity] = React.Children.toArray(children);

  const renderData = [
    ["Time Complexity", timeComplexity],
    ["Space Complexity", spaceComplexity],
  ] as const;

  return (
    <section className="px-8 py-8 flex flex-col relative">
      {renderData
        .filter((i) => i[1])
        .map(([label, value]) => (
          <div
            key={label}
            className="flex gap-x-2 justify-between items-baseline "
          >
            <div className="text-sm h-4">{label}</div>
            <div className="h-4">{value}</div>
          </div>
        ))}
    </section>
  );
};

export default ProblemComplexity;
