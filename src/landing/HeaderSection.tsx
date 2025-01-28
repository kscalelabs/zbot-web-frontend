import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[100svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <Image
          src={photoPaths.NEW_UI_HERO_BG}
          alt={photoPathAltText.NEW_UI_HERO_BG}
          fill
          className="object-cover
            md:object-center
            object-center"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="z-10 text-black text-center col-span-full ">
        <h1 className="text-heading-md md:text-heading-lg">Welcome to the Future of Robots</h1>

        <p className="mt-8 text-sm md:text-heading-sm ">
          &#34;A robot that’s truly yours, in every way.&#34;
        </p>
        <p className="mt-4 ">
          Welcome to a world where robots are no longer just tools—they are companions, creators,
          and reflections of your imagination. This is the next generation of robotics: personal,
          customizable, and accessible to everyone.
        </p>
      </div>
    </header>
  );
};

export default HeaderSection;
