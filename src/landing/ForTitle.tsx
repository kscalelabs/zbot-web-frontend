import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

export const ForTitle = ({ title, subtitle } = { title: "", subtitle: "" }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="col-span-full py-24 ">
      <motion.div
        ref={scrollRef}
        className="flex flex-col items-center justify-center"
        style={{
          opacity,
        }}
      >
        <p className="text-subtitle-md md:text-xl mb-2">{subtitle}</p>
        <h1 className="text-heading-md md:text-6xl">{title}</h1>
      </motion.div>
    </div>
  );
};
