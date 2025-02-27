import { CTAButton } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode, Size, videoBlobUrl } from "@/components/util/constants";
import { useEffect, useState } from "react";

const useCheckVideoUrl = (
  url: string,
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  useEffect(() => {
    if (!url) return;

    const checkUrl = async () => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
          setVideoUrl(url);
        } else {
          console.log("Response not ok!");
          setVideoUrl("./video/header_render_video.mp4");
        }
      } catch (error) {
        console.log("Error", error);
        setVideoUrl("./video/header_render_video.mp4");
      }
    };

    checkUrl();
  }, [url, setVideoUrl]);
};

const HeaderSection = () => {
  const [videoUrl, setVideoUrl] = useState("./video/header_render_video.mp4");
  useCheckVideoUrl(videoBlobUrl, setVideoUrl);

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
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="z-10 col-span-full flex gap-5 justify-between md:items-end flex-col sm:flex-row">
        <div className="max-w-lg">
          <h1 className="text-heading-lg md:text-heading-xl ">{`Intelligent Robot, Today`}</h1>

          <p className="mt-4 text-base-lg md:text-heading-sm md:whitespace-pre-line ">{`The world's most accessible AI \nhumanoid robot platform for builders`}</p>
        </div>

        <form
          action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
          method="post"
          target="_blank"
          className="flex flex-col gap-2 w-full sm:w-auto md:w-80 lg:w-96 xl:w-[28rem]"
        >
          <input
            type="email"
            name="EMAIL"
            className="w-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-md bg-background/10 border border-filament/20 backdrop-blur-sm text-rust placeholder:text-filament/50"
            placeholder="Enter your email for updates"
          />
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input type="text" name="b_a090115c9a76e96d327360f7d_8a6ee81bb8" tabIndex={-1} />
          </div>
          <input
            type="submit"
            value="Get Early Access"
            name="subscribe"
            className="w-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-md bg-rust text-filament font-medium cursor-pointer hover:opacity-90 transition-opacity"
          />
        </form>
      </div>
    </section>
  );
};

export default HeaderSection;
