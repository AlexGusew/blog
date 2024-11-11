import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const Info = () => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger className="opacity-60 w-6 h-6 rounded-lg flex justify-center items-center hover:bg-zinc-100 dark:hover:bg-zinc-700">
        <InfoCircledIcon />
      </TooltipTrigger>
      <TooltipContent
        sideOffset={10}
        className="border-zinc-300 bg-white border p-4 text-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-500"
      >
        <p className="text-xs max-w-xs">
          General Complexity is provided. In real problems complexity may vary
          depending on particular algorithm used
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default Info;
