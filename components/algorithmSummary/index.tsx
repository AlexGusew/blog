import Info from "@/components/algorithmSummary/info";
import React, { FC, PropsWithChildren, ReactNode } from "react";

const AlgorithmSummary: FC<PropsWithChildren> = ({ children }) => {
  const [timeComplexity, spaceComplexity] = React.Children.toArray(children);

  return (
    <section className="border-zinc-400 border-opacity-40 border-2 px-8 py-8 rounded-lg flex flex-col relative">
      <div className="flex justify-between items-center">
        <span className="text-sm text-left">Time Complexity</span>
        <span>{timeComplexity}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-left">Space Complexity</span>
        <span>{spaceComplexity}</span>
      </div>
      <div className="absolute right-1 top-1">
        <Info />
      </div>
    </section>
  );
};

export default AlgorithmSummary;
