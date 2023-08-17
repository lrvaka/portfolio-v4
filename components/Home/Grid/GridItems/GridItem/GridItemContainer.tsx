import React, { ReactNode, LegacyRef, RefObject, forwardRef } from "react";

interface GridItemContainerProps {
  children: ReactNode;
}

const CustomGridItemComponent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const {
    style = {},
    className = "",
    onMouseDown = () => {},
    onMouseUp = () => {},
    onTouchEnd = () => {},
    children,
  } = props;
  return (
    <div
      style={{ ...style }}
      className={className}
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
});

CustomGridItemComponent.displayName = "CustomGridItemComponent";

export default CustomGridItemComponent;
