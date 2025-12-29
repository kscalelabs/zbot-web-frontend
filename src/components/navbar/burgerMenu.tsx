import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { transitionEaseLinearDuration300, zbotNavigationConfig } from "@/components/util/constants";
import { motion } from "motion/react";
import Link from "next/link";

const BurgerMenu = (isOpen: boolean) => {
  return isOpen ? (
    <motion.div
      className={"flex flex-col  col-span-full list-none justify-evenly gap-28"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "circOut" }}
    >
      {zbotNavigationConfig.map((navItem, index) => {
        return (
          <motion.button
            key={index}
            className={
              "col-span-full font-planar font-normal capitalize text-4xl select-none flex flex-row text-foreground w-fit pointer-events-auto" +
              " hover:text-rust " +
              transitionEaseLinearDuration300
            }
            initial="initial"
            whileHover="hover"
            aria-label="Menu"
          >
            <Link
              className={"font-planar pointer-events-auto"}
              href={navItem.link}
              target={navItem.isExternal ? "_blank" : "_self"}
            >
              {navItem.name}
            </Link>
            {navItem.isExternal ? <ExpressiveArrow size={"size-10"} /> : <></>}
          </motion.button>
        );
      })}
      {/* <NavCTAButton
        href={"https://shop.kscale.dev/products/zbot"}
        target="_blank"
        className="font-planar mt-auto w-fit px-2 text-2xl"
        variant={ColorVariant.RUST}
        mode={FillMode.DEFAULT}
        size={Size.NORMAL}
      >
        PRE-ORDER NOW
      </NavCTAButton> */}
    </motion.div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
