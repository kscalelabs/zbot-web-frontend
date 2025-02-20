import { CTAButton } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode, Size } from "@/components/util/constants";

const HeaderSection = () => {
  return (
    <section
      className="col-span-full grid grid-cols-subgrid min-h-[100svh] auto-rows-auto items-end text-foreground
    bg-background relative overflow-hidden -mx-[5vw] px-[5vw] py-[5vw] z-40"
    >
      <video
        className={"z-40 bg-vid w-[100%]"}
        width="2560"
        height="1440"
        autoPlay={true}
        loop={true}
        muted={true}
        preload="auto"
      >
        <source src="./video/header_render_video.mp4" type="video/mp4" />
      </video>

      <div className="z-10 col-span-full flex gap-5 justify-between md:items-end flex-col md:flex-row">
        <div className="max-w-lg">
          <h1 className="text-heading-md md:text-heading-lg whitespace-pre-line">{`Intelligent Robot,\nToday`}</h1>

          <p className="mt-4 text-base whitespace-pre-line">{`The worlds most accessible AI \nhumanoid robot platform`}</p>
        </div>

        <CTAButton
          href={"https://shop.kscale.dev"}
          target="_blank"
          className="font-apparat font-bold mt-auto w-fit px-2 text-3xl border-2"
          variant={ColorVariant.FILAMENT}
          mode={FillMode.STROKE}
          size={Size.NORMAL}
        >
          PRE-ORDER NOW
        </CTAButton>
      </div>
    </section>
  );
};

export default HeaderSection;
