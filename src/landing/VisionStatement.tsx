import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { photoPaths } from "@/components/util/photoPaths";
import { useRef, useState } from "react";
import { useMotionValueEvent } from "motion/react";
import { useWindowSize } from "@/components/util/functions";

const ForStudentList = [
  {
    src: photoPaths.NEW_UI_STUDENTS_1,
    title: "Voice to action",
    desc: "Personal assistant to help out with tasks. The \nvoice to action dream...",
    width: 1800,
    height: 1320,
  },
  {
    src: photoPaths.NEW_UI_STUDENTS_2,
    title: "Limitless Capabilities",
    desc: "Autonomously explore, navigate and interact with its\nenvironment...",
    width: 1800,
    height: 1320,
  },
  {
    src: photoPaths.NEW_UI_STUDENTS_3,
    title: "Community built and\nsupported",
    desc: "Build on features alongside an active Open Source\ncommunity of +1000...",
    width: 1800,
    height: 1320,
  },
];

export const VisionStatement = () => {
  const width = useWindowSize().width;

  const [imgIndex, setImgIndex] = useState(0);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // set index
    const index = Math.round(latest * (ForStudentList.length - 1));
    setImgIndex(index);
    // console.log("Page scroll: ", latest, index);
  });
  return (
    <section className="col-span-full flex flex-col px-10" ref={scrollRef}>
      {width >= 512 ? (
        <div className="flex gap-x-10 gap-y-5 justify-center">
          <div className="flex-1 h-[100vh] flex items-center sticky top-0">
            <div className="w-full aspect-[1.53] relative rounded-2xl overflow-hidden">
              {ForStudentList.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    transition={{ duration: 1 }}
                    animate={{
                      opacity: index === imgIndex ? 1 : 0,
                    }}
                  >
                    <Image
                      key={index}
                      src={item.src}
                      alt={item.title || ""}
                      width={item.width}
                      height={item.height}
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex-1">
            {ForStudentList.map((item, index) => {
              return (
                <div key={index} className=" flex items-center h-[100vh] justify-center">
                  <div className="py-16">
                    <h2 className=" whitespace-pre-line">{`${item.title}`}</h2>
                    <p
                      className="mt-4 leading-tight max-w-3xl  whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {ForStudentList.map((item, index) => {
            return (
              <div key={index} className="">
                <div className="">
                  <div className="w-full aspect-[1.53] relative rounded-2xl overflow-hidden">
                    <Image
                      key={index}
                      src={item.src}
                      alt={item.title || ""}
                      width={item.width}
                      height={item.height}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 whitespace-pre-line">{`${item.title}`}</h3>
                  <p
                    className="mt-3 text-sm opacity-60 whitespace-pre-line leading-tight"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
