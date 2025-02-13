import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import clsx from "clsx";

import { createContext, useContext, useRef } from "react";

type TextItem = {
  text: string;
  className: string;
};

const TEXT_LIST: TextItem[] = [
  {
    text: "Affordable Robotics for All",
    className: "text-heading-md md:text-heading-lg",
  },
  {
    text: "Now you can get started and learn for less than $1000",
    className: "text-heading-md md:text-heading-lg",
  },
  {
    text: `Robotics has always been seen as expensive and exclusive. <br>
Not anymore.<br>
With our platform, you can own and train a robot for less than $1000, bringing cutting-edge technology within everyone’s reach.<br>
<br>
Whether you're a student, a hacker, or someone with no prior experience, this is your chance to explore the future.<br>`,
    className: "text-heading-sm",
  },
];
const ScrollContext = createContext(new MotionValue());

const TextItem = ({
  item,
  index,
  totalItems,
}: {
  item: TextItem;
  index: number;
  totalItems: number;
}) => {
  const scrollYProgress = useContext(ScrollContext);

  const num = 1 / totalItems;

  const opacity = useTransform(
    scrollYProgress,
    [index * num, index * num + 0.1, (index + 1) * num - 0.1, (index + 1) * num],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="
   top-0 h-[100vh] overflow-hidden
    flex items-center justify-center text-center sticky"
      style={{
        opacity,
      }}
    >
      <p
        className={clsx("max-w-5xl leading-tight", item.className)}
        dangerouslySetInnerHTML={{ __html: item.text }}
      ></p>
    </motion.div>
  );
};

export const HeroTextSection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["50vh end", "end start"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <section ref={scrollRef} className="col-span-full h-[350vh]">
      <ScrollContext.Provider value={scrollYProgress}>
        {TEXT_LIST.map((item, index) => {
          return (
            <TextItem item={item} index={index} key={item.text} totalItems={TEXT_LIST.length} />
          );
        })}

        <div className="top-0 h-[50vh] overflow-hidden sticky"></div>
      </ScrollContext.Provider>
    </section>
  );
};
