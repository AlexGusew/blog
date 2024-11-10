import React, { useMemo } from "react";
import KaTeX from "katex";

/**
 * @typedef {import("react").ReactNode} ReactNode
 *
 *
 * @callback ErrorRenderer
 * @param {Error} error
 * @returns {ReactNode}
 *
 *
 * @typedef {object} MathComponentPropsWithMath
 * @property {string} math
 * @property {ReactNode=} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 *
 *
 * @typedef {object} MathComponentPropsWithChildren
 * @property {string=} math
 * @property {ReactNode} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 *
 * @typedef {MathComponentPropsWithMath | MathComponentPropsWithChildren} MathComponentProps
 */

const createMathComponent = (Component, { displayMode }) => {
  /**
   *
   * @param {MathComponentProps} props
   * @returns {ReactNode}
   */
  const MathComponent = ({ children, errorColor, math, renderError }) => {
    const formula = math ?? children;

    const { html, error } = useMemo(() => {
      try {
        const html = KaTeX.renderToString(formula, {
          displayMode,
          errorColor,
          throwOnError: !!renderError,
        });

        return { html, error: undefined };
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
          return { error };
        }

        throw error;
      }
    }, [formula, errorColor, renderError]);

    if (error) {
      return renderError ? (
        renderError(error)
      ) : (
        <Component html={`${error.message}`} />
      );
    }

    return <Component html={html} />;
  };

  return MathComponent;
};

const InternalBlockMath = ({ html }) => {
  return (
    <div data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const InternalInlineMath = ({ html }) => {
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
