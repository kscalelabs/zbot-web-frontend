import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import { useContext } from "react";
import { createContext } from "react";
import { useRef } from "react";
import Image from "next/image";
import { photoPaths } from "@/components/util/photoPaths";

const Images = [
  {
    src: photoPaths.ZBOT_GALLERY_1,
    alt: "Z-Bot Gallery Image 1",
  },
  {
    src: photoPaths.ZBOT_GALLERY_2,
    alt: "Z-Bot Gallery Image 2",
  },
  {
    src: photoPaths.ZBOT_GALLERY_3,
    alt: "Z-Bot Gallery Image 3",
  },
  {
    src: photoPaths.ZBOT_GALLERY_4,
    alt: "Z-Bot Gallery Image 4",
  },
  {
    src: photoPaths.ZBOT_GALLERY_5,
    alt: "Z-Bot Gallery Image 5",
  },
  {
    src: photoPaths.ZBOT_GALLERY_6,
    alt: "Z-Bot Gallery Image 6",
  },
];

const GalleryItem = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const scrollYProgress = useContext(ScrollContext);
  return (
    <motion.figure
      className="sticky top-24 h-[60svh] min-h-[16rem] rounded-lg overflow-hidden"
      style={{
        opacity: useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [1, 0]),
        scale: useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [1, 0.8]),
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        loading={"eager"}
        priority={true}
        sizes={"100dvw"}
      />
    </motion.figure>
  );
};

const ScrollContext = createContext<MotionValue<number>>(null!);

const GallerySection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <section
        ref={containerRef}
        className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16"
      >
        {Images.map((image, index) => (
          <GalleryItem key={index} {...image} index={index} />
        ))}
      </section>
    </ScrollContext.Provider>
  );
};

export default GallerySection;
