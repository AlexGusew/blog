import type { FC } from "react";

export const Draft: FC = () => (
  <div className="text-sm p-4">
    <span
      className={`bg-zinc-600 text-zinc-200 px-2 py-1 rounded-full mr-2 translate-x-1`}
    >
      Draft
    </span>
    <span className="text-zinc-600">
      This section is not fully ready yet.{" "}
      <a href="#get-notified">Get notified</a> when full cheatsheet is ready.
    </span>
  </div>
);
