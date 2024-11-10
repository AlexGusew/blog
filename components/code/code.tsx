import type { FC, PropsWithChildren } from "react";

export interface CodeProps extends PropsWithChildren {
  filename?: string;
}

const Code: FC<CodeProps> = ({ children, filename, ...rest }) => {
  return (
    <div className="my-4 rounded-xl not-prose p-4 border-2 dark:bg-[#282c34] bg-white">
      {filename && (
        <>
          <div className="p-4 pl-0 text-zinc-800 dark:text-white opacity-60 text-xs -mt-4">
            {filename}
          </div>
          <hr className="m-0 dark:opacity-10 opacity-80 dark:invert border-t-2" />
        </>
      )}
      <pre {...rest} className="rounded-xl">
        {children}
      </pre>
    </div>
  );
};

export default Code;
