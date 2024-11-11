import React, { useMemo, ReactNode } from "react";
import KaTeX from "katex";

interface MathComponentPropsWithMath {
  math: string;
  children?: ReactNode;
  errorColor?: string;
  renderError?: (error: Error) => ReactNode;
}

interface MathComponentPropsWithChildren {
  math?: string;
  children: ReactNode;
  errorColor?: string;
  renderError?: (error: Error) => ReactNode;
}

type MathComponentProps =
  | MathComponentPropsWithMath
  | MathComponentPropsWithChildren;

const createMathComponent = (
  Component: React.FC<{ html: string }>,
  { displayMode }: { displayMode: boolean }
) => {
  const MathComponent: React.FC<MathComponentProps> = ({
    children,
    errorColor,
    math,
    renderError,
  }) => {
    const formula = math ?? children;

    const { html, error } = useMemo(() => {
      try {
        const html = KaTeX.renderToString(formula as string, {
          displayMode,
          errorColor,
          throwOnError: !!renderError,
        });

        return { html, error: undefined };
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
          return { html: "", error };
        }

        throw error;
      }
    }, [formula, errorColor, renderError]);

    if (error) {
      return renderError ? (
        renderError(error as Error)
      ) : (
        <Component html={`${(error as Error).message}`} />
      );
    }

    return <Component html={html} />;
  };

  return MathComponent;
};

const InternalBlockMath: React.FC<{ html: string }> = ({ html }) => {
  return (
    <div data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const InternalInlineMath: React.FC<{ html: string }> = ({ html }) => {
  return (
    <span
      data-testid="react-katex"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const BlockMath = createMathComponent(InternalBlockMath, {
  displayMode: true,
});
export const InlineMath = createMathComponent(InternalInlineMath, {
  displayMode: false,
});
