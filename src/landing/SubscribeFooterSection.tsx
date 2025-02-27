import Link from "next/link";

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
        value="Get Early Access"
        name="subscribe"
        className="px-4 py-2 text-sm rounded-lg bg-rust text-filament font-medium cursor-pointer hover:text-rust hover:bg-foreground transition-opacity"
      />
      {/* <Link
        className="px-4 py-2 text-sm rounded-lg border-current border flex items-center justify-center font-medium cursor-pointer hover:border-transparent hover:bg-rust hover:text-white"
        href={"https://shop.kscale.dev/products/zbot-founders-edition"}
        target={"_blank"}
      >
        PRE-ORDER NOW
      </Link> */}
    </form>
  );
};

const SubscribeSection = () => {
  return (
    <section className="col-span-full pb-16 md:pb-24 ">
      <div className="mt-8 mx-auto flex justify-center">
        <SubscribeForm inputClassName="md:w-80 px-4 py-2 text-sm rounded-md bg-[#F8F4F2] border text-rust placeholder:text-filament/50 text-center" />
      </div>
    </section>
  );
};

export default SubscribeSection;
