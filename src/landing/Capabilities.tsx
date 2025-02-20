import Image from "next/image";
import { capabilitiesData } from "@/components/capabilities_grid/capabilitiesData";
import { CapabilitiesData } from "@/components/util/constants";
import { motion } from "framer-motion";

const RowCol = (rowItem: CapabilitiesData) => {
  return (
    <motion.div className={"flex flex-col gap-2 "}>
      <Image
        width={389}
        height={389}
        className={
          "xl:w-[17vw] xl:h-[17vw] lg:w-[20vw] lg:h-[20vw] sm:w-[25vw] sm:h-[25vw] w-[35vw] h-[35vw] rounded"
        }
        src={rowItem.photoLink}
        alt={rowItem.photoLinkAlt}
        loading={"lazy"}
      />
      <motion.h4
        className={"xl:text-xl sm:text-lg  sm:whitespace-pre-line leading-tight"}
      >{`${rowItem.title}`}</motion.h4>
      <motion.figcaption
        className={
          " sm:text-caption text-[0.5rem] text-foreground70 font-[200] sm:whitespace-pre-line leading-tight"
        }
      >{`${rowItem.description}`}</motion.figcaption>
    </motion.div>
  );
};
const CapabilitiesSection = () => {
  return (
    <motion.section className={"grid col-span-full py-16 justify-center"}>
      <motion.div className={"grid grid-rows-1 justify-items-start gap-12"}>
        <motion.div className={"flex flex-col gap-2"}>
          <motion.h2>Capabilities</motion.h2>
          <motion.p>We built Z-Bot as a capable and ... robot</motion.p>
        </motion.div>
        <motion.div
          className={
            "grid lg:grid-cols-3 grid-cols-2 " +
            "grid-flow-row justify-items-start " +
            "xl:gap-x-32 lg:gap-x-24 md:gap-x-24 gap-x-10 xl:gap-y-14 gap-y-10"
          }
        >
          {capabilitiesData.map((capabilities) => RowCol(capabilities))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CapabilitiesSection;
