import clsx from "clsx";

const CARD_ITEMS = [
  {
    title: "Developers",
    desc: "Push the boundaries of robotics by experimenting with advanced features and customizations.",
    className: "bg-[#B90674]",
  },
  {
    title: "Students",
    desc: "Build foundational skills in robotics with hands-on opportunities to test and develop real-world applications.",
    className: "bg-[#C90E33]",
  },
  {
    title: "Everday Users",
    desc: "Train your robot to assist in your daily life, whether it’s playing with your pets, helping around the house, or just being a fun companion.",
    className: "bg-[#FA4300]",
  },
];

export const ForWhoSection = () => {
  return (
    <section className="py-16 col-span-full">
      <h2 className="text-center ">Who is it for?</h2>
      <div className="flex gap-6 mt-8">
        {CARD_ITEMS.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col flex-1 gap-4  rounded-2xl p-5 min-h-80 text-white ",
              item.className
            )}
          >
            <div className="text-xl">{item.title}</div>
            <div className="text-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
