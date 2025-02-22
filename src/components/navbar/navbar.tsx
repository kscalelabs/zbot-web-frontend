import Logotype from "@/components/logos/logotype";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { ColorVariant, FillMode, Size, zbotNavigationConfig } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { useLenis } from "lenis/dist/lenis-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { NavCTAButton } from "@/components/buttons/CTAButtons";

export default function NavBar({ href = "/" }: { href?: string } = {}) {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);

  function update(current: number, previous: number): void {
    if (current < previous) {
      setDesktopNavHidden(false);
    } else if (current > 100 && current > previous) {
      setDesktopNavHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (current: number) => {
    update(current, desktopPreviousScroll);
    setPrevScroll(current);
  });
  const width = useWindowSize().width;

  const navBasedOnWidth = (isDesktop: boolean) => {
    return isDesktop ? desktopNavBar() : mobileNavBar();
  };

  const atTop = scrollY.get() < 500;

  const navItems = () => {
    return (
      <>
        {zbotNavigationConfig.map((navItem, index) => {
          return (
            <motion.a
              key={index}
              href={navItem.link}
              target={navItem.isExternal ? "_blank" : "_self"}
              className={clsx(
                "-col-end-2 md:-col-end-3 2xl:-col-end-3 2xl:text-[0.75rem] lg:text-[1rem] md:text-[0.8rem] flex flex-row gap-2 ",
                " size-fit items-center select-none self-center pointer-events-auto",
                " text-foreground"
              )}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.2, ease: "circOut" }}
            >
              {navItem.name}
              {navItem.isExternal && (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    initial: { x: 0 },
                    hover: { x: 4 },
                  }}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </motion.svg>
              )}
            </motion.a>
          );
        })}
      </>
    );
  };

  const mobileNavBar = () => {
    return (
      <>
        <motion.menu
          className={clsx(
            "col-span-full grid grid-cols-subgrid overflow-hidden py-4 items-end h-fit px-[5vw] -mx-[5vw]"
          )}
          animate={{
            backgroundColor: atTop ? "var(--background-0)" : "var(--background)",
          }}
          transition={{ duration: 0.2, ease: "circOut" }}
        >
          <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} />
          <BurgerOpenButton
            className="-col-end-1 place-self-end pointer-events-auto"
            atTop={atTop}
            isOpen={mobileShouldOpenBurger}
            onClick={setMobileShouldOpenBurger}
          />
        </motion.menu>
        <AnimatePresence>{BurgerMenu(mobileShouldOpenBurger)}</AnimatePresence>
      </>
    );
  };

  const desktopNavBar = () => {
    return (
      <>
        <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} />
        <motion.div
          layout
          transition={{ duration: 0.5, ease: "circOut" }}
          className={
            "flex flex-row gap-6 items-start 3xl:-col-end-2 2xl:-col-end-3 lg:-col-end-2 -col-end-3 " +
            (atTop ? "col-span-1 " : "col-span-3 ")
          }
        >
          {navItems()}
          <motion.div
            animate={{ opacity: atTop ? 0 : 1, y: atTop ? 20 : 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <NavCTAButton
              href={"https://shop.kscale.dev/products/zbot"}
              target="_blank"
              className={"font-planar mt-auto w-fit px-2 " + (atTop ? " hidden" : " visible")}
              variant={ColorVariant.RUST}
              mode={FillMode.DEFAULT}
              size={Size.NORMAL}
            >
              PRE-ORDER NOW
            </NavCTAButton>
          </motion.div>
        </motion.div>
      </>
    );
  };
  useEffect(() => {
    setMobileShouldOpenBurger(false);
    lenis?.start();
  }, [width, lenis]);

  useEffect(() => {
    if (lenis) {
      if (mobileShouldOpenBurger) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [mobileShouldOpenBurger, lenis]);

  return (
    <motion.nav
      className={
        "fixed top-0 inset-x-0 z-50 h-[100dvh] md:h-auto md:py-4" +
        " grid-a grid-rows-[min-content_auto] pointer-events-none items-center "
      }
      initial={{
        backgroundColor: "var(--background-0)",
      }}
      animate={{
        backgroundColor:
          width >= 768
            ? atTop
              ? "var(--background-0)"
              : "var(--background)"
            : mobileShouldOpenBurger
              ? "var(--background)"
              : "var(--background-0)",
      }}
    >
      {navBasedOnWidth(width >= 768)}
    </motion.nav>
  );
}
