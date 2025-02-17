import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

export const SubscribeForm = ({ inputClassName } = { inputClassName: "" }) => {
  return (
    <form
      action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
      method="post"
      target="_blank"
      className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
    >
      <input type="email" name="EMAIL" className={inputClassName} placeholder="Email" />
      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
        <input type="text" name="b_a090115c9a76e96d327360f7d_8a6ee81bb8" tabIndex={-1} />
      </div>
      <input
        type="submit"
        value="Sign Up Now!"
        name="subscribe"
        className="px-4 py-2 text-sm rounded-full bg-rust text-filament font-medium cursor-pointer hover:opacity-90 transition-opacity"
      />
      <a className="px-4 py-2 text-sm rounded-full border-current border flex items-center justify-center font-medium cursor-pointer hover:bg-rust hover:text-white">
        Buy
      </a>
    </form>
  );
};

const SubscribeSection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="col-span-full pb-16 md:pb-24 ">
      <motion.div
        ref={scrollRef}
        className="w-full pt-8 md:pt-16 pb-24 md:pb-36"
        style={{
          opacity,
        }}
      >
        <p className="text-xl md:text-heading-lg text-center leading-tight">
          &#34;More than a robot—it’s your
          <br />
          creation in every way.&#34;
        </p>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row gap-4 ">
        <div className="flex-1 bg-background-card rounded-2xl min-h-52 flex items-center justify-center flex-col gap-2 text-center py-2 px-4">
          <h3 className="">Powered by K-Scale</h3>
          <p>
            Our robots are powered by advanced K-Scale technology, ensuring precision, performance,
            and endless possibilities.
          </p>
        </div>
        <div className="flex-1 bg-background-card rounded-2xl min-h-52 flex items-center justify-center flex-col gap-2 text-center py-2 px-4">
          <h3 className="">Our Vision</h3>
          <p>
            Welcome to the future of robotics, where robots are more than machines—they’re a
            reflection of your creativity, personality, and imagination. Let’s build the future
            together.
          </p>
        </div>
      </div>
      <div className="mt-4 bg-background-card rounded-2xl py-10 px-4 col-span-full relative overflow-hidden text-center">
        <h3 className="mb-4">Expand Your Imagination for Only $1000</h3>
        <p className="md:text-lg">
          With our affordable pricing, anyone can explore the world of robotics without breaking the
          bank.
        </p>

        <div className="mt-8 mx-auto flex justify-center">
          <SubscribeForm inputClassName="md:w-80 px-4 py-2 text-sm rounded-md bg-[#F8F4F2] border text-rust placeholder:text-filament/50 text-center" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
