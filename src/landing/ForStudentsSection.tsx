import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { photoPaths } from "@/components/util/photoPaths";
import { ForTitle } from "@/landing/ForTitle";
import { useMemo, useRef, useState } from "react";
import { useMotionValueEvent } from "motion/react";

const ForStudentList = [
  {
    src: photoPaths.NEW_UI_STUDENTS_1,
    title: "For Robotics Students",
    desc: "This is your chance to dive into the cutting-edge world of robotics with sim-to-real technology.",
  },
  {
    src: photoPaths.NEW_UI_STUDENTS_2,
    title: "Test Your First Sim-to-Real Model",
    desc: "· Build and test robotic actions seamlessly from simulation to physical reality.<br>· Features like an 18-degree range of motion give you ultimate flexibility.",
  },
  {
    src: photoPaths.NEW_UI_STUDENTS_3,
    title: "Create Complex Actions",
    desc: "· Develop advanced actions and behaviours for your robot with intuitive tools.<br>· Upload and share your creations with the community.",
  },
  {
    src: photoPaths.NEW_UI_STUDENTS_4,
    title: "Collaborative Robotics",
    desc: "· Connect multiple robots to interact with each other in real time.<br>· Design group activities like robot football and collaborative dances.",
  },
];

export const ForStudentsSection = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // set index
    const index = Math.round(latest * (ForStudentList.length - 1));
    setImgIndex(index);
    console.log("Page scroll: ", latest, index);
  });
  return (
    <>
      <ForTitle title="Students" subtitle="Who is it for?" />

      <section className="col-span-full" ref={scrollRef}>
        <div className="flex gap-10">
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
                      layout="fill"
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
                <div key={index} className=" flex items-center h-[100vh]">
                  <div className="py-16">
                    <h2 className=" ">{item.title}</h2>
                    <p
                      className="mt-4 leading-5 max-w-3xl"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
