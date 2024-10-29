import React, { FC, type PropsWithChildren } from "react";

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type HeaderLevel = "h1" | "h2";

const createH = (Element: HeaderLevel) => {
  const Header: FC<PropsWithChildren> = ({ children }) => {
    if (!children) {
      throw new Error("Component has no text");
    }
    const anchor = getAnchor(children?.toString());
    const link = `#${anchor}`;

    return (
      <Element id={anchor} className="[&:hover>*]:opacity-40">
        {children}
        <a href={link} className="absolute translate-x-2.5 opacity-0 w-4">
          #
        </a>
      </Element>
    );
  };

  return Header;
};

export default createH;
