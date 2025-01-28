import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";

export const SellingPointsSection = () => {
  const cardItems = [
    {
      title: "Motion-to-motion training",
      desc: "Seamlessly define your robot’s movements and interactions.",
      imageSrc: photoPaths.NEW_UI_SELLING_POINT_1,
      imageAlt: photoPathAltText.NEW_UI_SELLING_POINT_1,
    },
    {
      title: "ChatGPT Integration",
      desc: "Build robots that can communicate intelligently.",
      imageSrc: photoPaths.NEW_UI_SELLING_POINT_2,
      imageAlt: photoPathAltText.NEW_UI_SELLING_POINT_2,
    },
    {
      title: "Boost Creativity",
      desc: "Customize your robot’s look with dress-ups, accessories, and styles.",
      imageSrc: photoPaths.NEW_UI_SELLING_POINT_3,
      imageAlt: photoPathAltText.NEW_UI_SELLING_POINT_3,
    },
  ];

  return (
    <section className="py-16 col-span-full">
      <h2 className="">Unique Selling Points</h2>
      <div className="flex gap-6 mt-8">
        {cardItems.map((item, index) => (
          <div key={index} className="flex flex-col flex-1 gap-3 text-rust">
            <div className="bg-gray-950 rounded-2xl aspect-[1.38] relative overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-md">{item.title}</div>
            <div className="text-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
