import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const SubscribeSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid py-8 text-black">
      <div className="rounded-2xl p-9 col-span-full grid grid-cols-subgrid relative overflow-hidden">
        <div className="absolute inset-0 bg-white">
          <Image
            src={photoPaths.NEW_UI_SUBSCRIBE}
            alt={photoPathAltText.NEW_UI_SUBSCRIBE}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
          />
        </div>

        <div className="col-span-6 z-10">
          <h1 className="text-3xl font-semibold mb-4 ">
            Get, Define, and Train Your <br /> Own Robot
          </h1>
          <p>
            Welcome to a world where robots are no longer just tools—they are companions, creators,
            and reflections of your imagination. This is the next generation of robotics: personal,
            customizable, and accessible to everyone.
          </p>

          <div className="mt-16 max-w-80 text-center">
            <p className="text-xs text-gray-500 mb-2">
              Affordable, accessible, and powerful—now anyone can step into the future of robotics.
            </p>
            <form
              action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
              method="post"
              target="_blank"
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                name="EMAIL"
                className="w-full px-4 py-2 text-sm rounded-md bg-background/10 border border-filament/20 backdrop-blur-sm text-rust placeholder:text-filament/50"
                placeholder="Email"
              />
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input type="text" name="b_a090115c9a76e96d327360f7d_8a6ee81bb8" tabIndex={-1} />
              </div>
              <input
                type="submit"
                value="Sign Up Now!"
                name="subscribe"
                className="w-full px-6 py-2 text-sm rounded-full bg-rust text-filament font-medium cursor-pointer hover:opacity-90 transition-opacity"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
