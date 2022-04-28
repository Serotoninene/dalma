import React, { useState, useRef, useEffect } from "react";
// gsap
import gsap from "gsap";

interface Props {
  bgColor?: string;
  color?: string;
  padding?: string;
  children: React.ReactNode;
}

// Okay so what do I want to do ?
// Simple : When i hover the button, the bg color change,shouldn't be hard dammit
// Soooooo I can have some kind of toggling situation linked to a gsap stuff,

export default function Button(props: Props) {
  const { bgColor, color, padding } = props;
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`Button ${hover ? "hover" : ""}`}
      // padding default : "11px 20px"
      style={{ backgroundColor: bgColor, color: color, padding: padding }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {props.children}
    </div>
  );
}
