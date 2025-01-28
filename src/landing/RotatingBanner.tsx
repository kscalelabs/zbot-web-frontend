import React, { useState, useEffect, useRef } from "react";

const Marquee = ({
  text = "",
  speed = 5,
  direction = "left",
  pauseOnHover = true,
  className = "",
  textClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const marquee = marqueeRef.current;

    if (!container || !marquee) return;

    const handleAnimation = () => {
      if (isHovered && pauseOnHover) return;

      const containerWidth = container.offsetWidth;
      const marqueeWidth = marquee.offsetWidth;

      // Reset position when fully scrolled
      if (direction === "left") {
        if (marquee.offsetLeft <= -marqueeWidth) {
          marquee.style.left = `${containerWidth}px`;
        }
        marquee.style.left = `${marquee.offsetLeft - speed}px`;
      } else {
        if (marquee.offsetLeft >= containerWidth) {
          marquee.style.left = `${-marqueeWidth}px`;
        }
        marquee.style.left = `${marquee.offsetLeft + speed}px`;
      }
    };

    const animationFrame = setInterval(handleAnimation, 16); // ~60fps

    return () => {
      clearInterval(animationFrame);
    };
  }, [speed, direction, isHovered, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className} h-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={marqueeRef}
        className={`absolute whitespace-nowrap inline-block ${textClassName}`}
        style={{
          left: 0,
          display: "inline-block",
          willChange: "transform",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const RotatingBanner: React.FC = () => {
  return (
    <div className="col-span-full -mx-[5vw]">
      <Marquee text="Join our jorney" textClassName="text-rust text-heading-sm"></Marquee>
    </div>
  );
};
