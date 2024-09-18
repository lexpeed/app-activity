"use client";

import { useCallback, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
  isOpen: boolean;
}

const Popper = ({ children, anchorEl, isOpen }: Props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorEl) {
      const { top, left, height, width } = anchorEl.getBoundingClientRect();
      const arrowSize = 8;
      const newLeft = left + width / 2;
      const newTop = top + height + window.scrollY + arrowSize * 2;
      setPosition({ top: newTop, left: newLeft });
    }
  }, [anchorEl, isOpen]);

  return (
    <div
      className={`
        bg-gray-50 shadow-lg rounded-sm
        absolute z-10
        transition-all duration-300
        transform -translate-x-1/2
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        ${isOpen ? "scale-100" : "scale-95"}
      `}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div
        className={`
          w-0 h-0
          border-x-8 border-x-transparent
          border-b-8 border-b-gray-50
          absolute top-0 left-1/2
          transform -translate-x-1/2 -translate-y-full
        `}
      ></div>
      {children}
    </div>
  );
};

export default Popper;
