import React, { ReactNode } from "react";

interface GridItemContainerProps {
  children: ReactNode;
}

const GridItemContainer = ({ children }: GridItemContainerProps) => {
  return <div className="p-2">{children}</div>;
};

export default GridItemContainer;
