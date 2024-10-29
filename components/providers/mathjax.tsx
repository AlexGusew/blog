"use client";

import { MathJaxContext } from "better-react-mathjax";

export default function MathJaxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MathJaxContext>{children}</MathJaxContext>;
}
