import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import clsx from "clsx";

type FeatItem = {
  poster: string;
  src: string;
};
const FEAT_ITEMS: FeatItem[] = [
  {
    poster: "",
    src: "",
  },
  {
    poster: "",
    src: "",
  },
  {
    poster: "",
    src: "",
  },
];

const FeatCard = ({ item }: { item: FeatItem }) => {
  return (
    <motion.div
      className={clsx("  flex-none bg-gray-300 rounded-2xl cursor-grab aspect-[1.777] w-[60vw]")}
      draggable={false}
    >
      <video
        src={item.src}
        poster={item.poster}
        className="w-full h-full object-cover rounded-2xl"
        muted
      ></video>
    </motion.div>
  );
};

const FeatItems = () => {
  return (
    <>
      {FEAT_ITEMS.map((item, index) => (
        <FeatCard item={item} key={`feat-card--${index}`} />
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

const FeatsSwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const width = useWindowSize().width;

  const dimensions = useMemo(() => {
    return {
      card: 60,
      gap: 1.25,
      max: FEAT_ITEMS.length - 1,
    };
  }, []);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -(width < 768 ? dimensions.card / 2 : DRAG_BUFFER) && imgIndex < dimensions.max) {
      setImgIndex((pv) => Math.min(pv + Math.round(x / -DRAG_BUFFER), dimensions.max));
    } else if (x >= (width < 768 ? dimensions.card / 2 : DRAG_BUFFER) && imgIndex > 0) {
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
    <div className={"col-span-full -mx-[5vw] px-[5vw] overflow-hidden relative "}>
      {/*      <div className="fixed top-0 left-0 z-50 text-molten">
          {imgIndex} {dimensions.card} {dimensions.gap}
        </div>*/}

      <div className="relative">
        <motion.button
          onClick={decrement}
          aria-label="Previous article"
          className="select-none z-10 absolute top-1/2 left-4 -translate-y-1/2
          rounded-full bg-[rgba(0,0,0,0.16)] w-8 h-8 flex items-center justify-center text-white shadow-md
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
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.button>
        <motion.button
          onClick={increment}
          aria-label="Next article"
          className="select-none z-10 absolute top-1/2 right-0 -translate-y-1/2
          rounded-full bg-[rgba(0,0,0,0.16)] w-8 h-8 flex items-center justify-center text-white shadow-md
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
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>

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
            translateX: `${-1 * imgIndex * dimensions.card + (imgIndex > 0 ? -dimensions.gap * imgIndex : 0)}vw`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex flex-none cursor-grab gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
        >
          <FeatItems />
        </motion.div>
      </div>
    </div>
  );
};
export const BuiltInFeaturesSection = () => {
  return (
    <section className="col-span-full py-16 grid grid-cols-subgrid">
      <div className="col-span-6">
        <h2>20 Built-In Features to Get Started</h2>
        <p className="mt-4 mb-4 text-gray-500">
          Our system comes with 20 preset features to kickstart your journey. From basic movements
          to advanced interactions, these features are designed to inspire creativity and make
          training your robot simple and fun.
        </p>
      </div>

      <FeatsSwipeCarousel />
    </section>
  );
};
