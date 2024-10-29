import { Badge } from "@/components/ui/badge";
import type { FC } from "react";

const difficultyColor = {
  Easy: "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900",
  Medium:
    "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900",
  Hard: "bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900",
};

interface ProblemBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

const ProblemBadge: FC<ProblemBadgeProps> = ({ difficulty }) => {
  return (
    <Badge
      className={`${difficultyColor[difficulty]} font-semibold shadow-none`}
    >
      {difficulty}
    </Badge>
  );
};

export default ProblemBadge;
