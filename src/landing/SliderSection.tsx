import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import clsx from "clsx";
import Image from "next/image";

type SliderItem = {
  src?: string;
  title?: string;
  html?: string;
  width?: number;
  height?: number;
};

const FeatCard = ({
  item,
  aspectRatio = 1.77,
  itemClassName = "w-[74vw] md:w-[60vw]",
}: {
  item: SliderItem;
  aspectRatio: number;
  itemClassName?: string;
}) => {
  return (
    <motion.div
      className={clsx(
        "flex-none bg-background-card rounded-2xl cursor-grab relative overflow-hidden",
        itemClassName,
        "feat-card"
      )}
      style={{
        aspectRatio: aspectRatio,
      }}
      draggable={false}
    >
      {item.src && (
        <Image
          src={item.src}
          alt={item.title || ""}
          width={item.width}
          height={item.height}
          className="object-cover pointer-events-none"
        />
      )}
      {item.title && (
        <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-5">
          <h3 className="text-base md:text-xl font-semibold text-white">{item.title}</h3>
        </div>
      )}
      {item.html && (
        <div className="flex h-full items-center p-10">
          <div
            className="text-lg md:text-2xl text-rust font-semibold"
            dangerouslySetInnerHTML={{ __html: item.html }}
          ></div>
        </div>
      )}
    </motion.div>
  );
};

const FeatItems = ({
  list = [],
  aspectRatio,
  itemClassName,
}: {
  list: SliderItem[];
  aspectRatio: number;
  itemClassName?: string;
}) => {
  return (
    <>
      {list.map((item, index) => (
        <FeatCard
          item={item}
          key={`feat-card--${index}`}
          aspectRatio={aspectRatio}
          itemClassName={itemClassName}
        />
      ))}
    </>
  );
};

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 100,
  damping: 20,
};

const FeatsSwipeCarousel = ({
  list = [],
  aspectRatio,
  itemClassName,
}: {
  list: SliderItem[];
  aspectRatio: number;
  itemClassName?: string;
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const width = useWindowSize().width;
  const id = useId();
  const className = `feat-card--${id.replace(/:/g, "_")}`;

  const cardWidth = useRef(50);
  useEffect(() => {
    const card = document.querySelector(`.${className} .feat-card`);
    if (card) {
      const rect = card.getBoundingClientRect();
      cardWidth.current = (rect.width / width) * 100;
    }
  }, [width, className]);

  const dimensions = useMemo(() => {
    return {
      gap: 1.25,
      max: list.length - 1,
    };
  }, [list]);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -(width < 768 ? cardWidth.current / 2 : DRAG_BUFFER) && imgIndex < dimensions.max) {
      setImgIndex((pv) => Math.min(pv + Math.round(x / -DRAG_BUFFER), dimensions.max));
    } else if (x >= (width < 768 ? cardWidth.current / 2 : DRAG_BUFFER) && imgIndex > 0) {
      setImgIndex((pv) => Math.max(pv - Math.round(x / DRAG_BUFFER), 0));
    }
  };

  const decrement = () => {
    if (imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const increment = () => {
    if (imgIndex < dimensions.max) {
      setImgIndex((pv) => pv + 1);
    }
  };

  useEffect(() => {
    setImgIndex(0);
  }, [width]);

  return (
    <div className={clsx("col-span-full relative mt-5 md:mt-0", className)}>
      {/*<div className="fixed top-0 left-0 z-50 text-molten">
        {imgIndex} {dimensions.gap}
      </div>*/}
      <div className="relative">
        <div className="absolute z-10 right-0 -top-10 flex gap-3 justify-center">
          <motion.button
            onClick={decrement}
            aria-label="Previous article"
            className="select-none rounded-full bg-[rgba(0,0,0,0.16)] dark:bg-[rgba(255,255,255,0.16)] w-7 h-7 flex items-center justify-center text-white shadow-md
          "
            initial={{ opacity: 1 }}
            animate={{ opacity: imgIndex > 0 ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
          <motion.button
            onClick={increment}
            aria-label="Next article"
            className="select-none rounded-full bg-[rgba(0,0,0,0.16)] dark:bg-[rgba(255,255,255,0.16)] w-7 h-7 flex items-center justify-center text-white shadow-md
          "
            initial={{ opacity: 1 }}
            animate={{ opacity: imgIndex < dimensions.max ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `${-1 * imgIndex * cardWidth.current + (imgIndex > 0 ? -dimensions.gap * imgIndex : 0)}vw`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex flex-none cursor-grab gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
        >
          <FeatItems list={list} aspectRatio={aspectRatio} itemClassName={itemClassName} />
        </motion.div>
      </div>
    </div>
  );
};

export const SliderSection = (
  {
    title,
    desc,
    list,
    aspectRatio,
    itemClassName,
  }: {
    title: string;
    desc: string;
    list: SliderItem[];
    aspectRatio: number;
    itemClassName?: string;
  } = { title: "", desc: "", list: [], aspectRatio: 1 }
) => {
  return (
    <section className="col-span-full py-16 grid grid-cols-subgrid -mx-[5vw] px-[5vw]  overflow-hidden">
      <div className="col-span-6">
        <h2>{title}</h2>
        <p className="mt-4 mb-4 leading-5 max-w-3xl">{desc}</p>
      </div>
      <FeatsSwipeCarousel list={list} aspectRatio={aspectRatio} itemClassName={itemClassName} />
    </section>
  );
};
