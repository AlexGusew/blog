import type { FC } from "react";

interface DifficultyProps {
  value: 1 | 2 | 3;
}

export const Difficulty: FC<DifficultyProps> = ({ value }) => {
  const text = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
  };

  const colorClass = {
    1: "bg-green-400 text-green-950",
    2: "bg-yellow-400 text-yellow-950",
    3: "bg-red-400 text-red-950",
  };

  return (
    <div className={`px-2 py-1 rounded-full ${colorClass[value]} text-xs`}>
      {text[value]}
    </div>
  );
};
