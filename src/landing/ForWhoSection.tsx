import clsx from "clsx";
import { photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";

const CARD_ITEMS = [
  {
    title: "Developers",
    desc: "Push the boundaries of robotics by experimenting with advanced features and customizations.",
    className: "bg-[#B90674]",
    icon: photoPaths.NEW_UI_FOR_ICON_1,
  },
  {
    title: "Students",
    desc: "Build foundational skills in robotics with hands-on opportunities to test and develop real-world applications.",
    className: "bg-[#C90E33]",
    icon: photoPaths.NEW_UI_FOR_ICON_2,
  },
  {
    title: "Everday Users",
    desc: "Train your robot to assist in your daily life, whether it’s playing with your pets, helping around the house, or just being a fun companion.",
    className: "bg-[#FA4300]",
    icon: photoPaths.NEW_UI_FOR_ICON_3,
  },
];

export const ForWhoSection = () => {
  return (
    <section className="py-16 col-span-full">
      <h2 className="text-center ">Who is it for?</h2>
      <div className="flex flex-col md:flex-row gap-6 mt-8 ">
        {CARD_ITEMS.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col flex-1 gap-4  rounded-2xl p-5 min-h-52 md:min-h-80 text-white relative",
              item.className
            )}
          >
            <div className="text-xl">{item.title}</div>
            <div className="text-xs">{item.desc}</div>

            <div className="absolute left-3 bottom-3 w-16 h-16">
              <Image fill src={item.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
