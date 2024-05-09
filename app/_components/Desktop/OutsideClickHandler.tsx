import React, { useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
  children: React.ReactNode;
  onClickOutside: () => void;
}

const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({
  children,
  onClickOutside,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(); // Call the provided callback function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
