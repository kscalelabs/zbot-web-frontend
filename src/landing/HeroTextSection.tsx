import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import clsx from "clsx";

import { createContext, useContext, useEffect, useRef } from "react";

const TEXT_LIST = [
  {
    text: "Affordable Robotics for All",
    className: "text-heading-lg",
  },
  {
    text: "Now you can get started and learn for less than $1000",
    className: "text-heading-lg",
  },
  {
    text: "Robotics has always been seen as expensive and exclusive. Not anymore. With our platform, you can own and train a robot for less than $1000, bringing cutting-edge technology within everyone’s reach. Whether you're a student, a hacker, or someone with no prior experience, this is your chance to explore the future.",
    className: "text-heading-sm",
  },
];
const ScrollContext = createContext(new MotionValue());

const TextItem = ({ item, index, totalItems }) => {
  const scrollYProgress = useContext(ScrollContext);

  const num = 1 / totalItems;

  // 为每个文本创建不同的透明度和Y轴位移变换
  const opacity = useTransform(
    scrollYProgress,
    [
      index * num, // 开始出现
      index * num + 0.1, // 完全出现
      (index + 1) * num - 0.1, // 开始消失
      (index + 1) * num, // 完全消失
    ],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="
   top-0 h-[100vh] overflow-hidden
    flex items-center justify-center text-center"
      style={{
        opacity,
        position: "sticky",
      }}
    >
      <p className={clsx("max-w-5xl leading-tight", item.className)}>{item.text}</p>
    </motion.div>
  );
};

export const HeroTextSection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    console.log(scrollYProgress.get());
  }, [scrollYProgress]);

  return (
    <div ref={scrollRef} className="col-span-full h-[300vh]">
      <ScrollContext.Provider value={scrollYProgress}>
        {TEXT_LIST.map((item, index) => {
          return (
            <TextItem item={item} index={index} key={item.text} totalItems={TEXT_LIST.length} />
          );
        })}
      </ScrollContext.Provider>
    </div>
  );
};
