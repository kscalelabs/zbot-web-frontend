import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import { SubscribeForm } from "@/landing/SubscribeFooterSection";
import { useSystemDarkMode } from "@/components/util/functions";

const HeaderSection = () => {
  const isDarkMode = useSystemDarkMode();

  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[100svh] auto-rows-auto items-end text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw] py-[5vw]">
      <div className="absolute inset-0">
        <Image
          src={isDarkMode ? photoPaths.NEW_UI_HERO_BG_DARK : photoPaths.NEW_UI_HERO_BG_LIGHT}
          alt={photoPathAltText.NEW_UI_HERO_BG}
          fill
          className="object-cover
            md:object-center
            object-center"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="z-10   col-span-full flex justify-between items-end">
        <div className="max-w-lg">
          <h1 className="text-heading-md md:text-heading-lg">Embodying the new wave of AI</h1>

          <p className="mt-4 text-base">Democratizing robotics with affordable, open hardware.</p>
        </div>

        <div className="flex items-center p-5 bg-[#ffffff66] dark:bg-[#00000066] backdrop-blur rounded-3xl">
          <SubscribeForm inputClassName="w-60 px-4 py-2 text-sm rounded-md bg-background/10 border border-filament/20 backdrop-blur-sm text-rust placeholder:text-filament/50 text-center" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
