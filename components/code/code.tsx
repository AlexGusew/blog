import type { FC, PropsWithChildren } from "react";

export interface CodeProps extends PropsWithChildren {
  filename?: string;
}

const Code: FC<CodeProps> = ({ children, filename }) => (
  <div className="my-4 bg-[#282c34] rounded-xl">
    {filename && (
      <div className="p-2 text-white ml-6 opacity-70 text-xs">{filename}</div>
    )}
    <hr className="m-0 opacity-20 dark:invert" />
    <pre className={`pb-4 mt-0 bg-[#282c34] rounded-xl`}>{children}</pre>
  </div>
);

export default Code;
