import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const SubscribeSection = () => {
  return (
    <section className="col-span-full py-24 text-black">
      <div className="w-full flex flex-row gap-4">
        <div className="flex-1 bg-white rounded-2xl min-h-52 flex items-center justify-center flex-col gap-2 text-center p-2">
          <h3 className="">Powered by K-Scale</h3>
          <p>
            Our robots are powered by advanced K-Scale technology, ensuring precision, performance,
            and endless possibilities.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-2xl min-h-52 flex items-center justify-center flex-col gap-2 text-center p-2">
          <h3 className="">Our Vision</h3>
          <p className="text-rust">"More than a robot—it’s your creation in every way."</p>
          <p>
            Welcome to the future of robotics, where robots are more than machines—they’re a
            reflection of your creativity, personality, and imagination. Let’s build the future
            together.
          </p>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-2xl py-10 px-4 col-span-full relative overflow-hidden text-center">
        <h3 className="mb-4 ">Expand Your Imagination for Only $1000</h3>
        <p>
          With our affordable pricing, anyone can explore the world of robotics without breaking the
          bank.
        </p>

        <div className="mt-8 mx-auto max-w-80 text-center">
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
    </section>
  );
};

export default SubscribeSection;
