import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[100svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <Image
          sizes="100vw"
          src={photoPaths.LANDING_IMAGE_2}
          alt={photoPathAltText.LANDING_IMAGE_ALT_2}
          fill
          className="object-cover brightness-50
            md:object-center
            object-center"
          priority={true}
          loading="eager"
        />
      </div>
      <hgroup className="z-10 text-center col-span-full text-filament ">
        <h1 className="text-heading-md md:text-heading-lg">Welcome to the Future of Robots</h1>
        <p className="mt-8 text-sm md:text-heading-sm ">
          "A robot that’s truly yours, in every way."
        </p>
        <p className="mt-4 ">
          Welcome to a world where robots are no longer just tools—they are companions, creators,
          and reflections of your imagination. This is the next generation of robotics: personal,
          customizable, and accessible to everyone.
        </p>
      </hgroup>
    </header>
  );
};

export default HeaderSection;
