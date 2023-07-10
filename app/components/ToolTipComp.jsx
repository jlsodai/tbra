"use client";
import { useRef } from "react";

const ToolTipComp = ({ children, tooltip, message }) => {
  const [left, tip, rest] = tooltip.split("<<<");
  const tooltipRef = useRef(null);
  const container = useRef(null);
  const showToolTip = tooltip && message;
  return (
    <>
      {left}
      {tip && (
        <div
          ref={container}
          onMouseEnter={({ clientX }) => {
            if (!tooltipRef.current || !container.current) return;
          }}
          className={`${
            showToolTip && "border-b-2 border-black border-dotted"
          } group inline-block mx-1`}
        >
          {tip}
          {showToolTip ? (
            <div
              ref={tooltipRef}
              className="container invisible group-hover:visible opacity-0 group-hover:opacity-100 transition max-w-md absolute mt-2 z-10 -md:left-0"
            >
              <div className="rounded border border-tender p-4 bg-[#edf0f2]">
                {message}
              </div>
            </div>
          ) : null}
        </div>
      )}
      {rest}
    </>
  );
};

export default ToolTipComp;
