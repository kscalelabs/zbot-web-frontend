import Image from "next/image";

import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

export const RobotPicturesSection = () => {
  return (
    <section className="col-span-full py-16 relative grid grid-cols-subgrid">
      <div className="col-span-full lg:col-span-6">
        <div className="lg:sticky top-32 mb-10">
          <h2>See Your Robot in Action</h2>
          <p className="text-sm text-gray-500 mt-4">
            Your robot isn’t just programmable—it’s expressive. Watch it walk, animate, and move
            from every angle: side-view, upper-view, and more. The possibilities are endless when
            you define the way it interacts with the world.
          </p>
        </div>
      </div>
      <div className="lg:mt-0 col-span-full md:col-span-6 flex flex-col gap-10">
        <div className="aspect-[1.53] bg-white rounded-2xl relative overflow-hidden">
          <Image
            src={photoPaths.NEW_UI_ZBOT_1}
            alt={photoPathAltText.NEW_UI_ZBOT_1}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="aspect-[1.53] bg-white rounded-2xl relative overflow-hidden">
          <Image
            src={photoPaths.NEW_UI_ZBOT_2}
            alt={photoPathAltText.NEW_UI_ZBOT_2}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="aspect-[1.53] bg-white rounded-2xl relative overflow-hidden">
          <Image
            src={photoPaths.NEW_UI_ZBOT_3}
            alt={photoPathAltText.NEW_UI_ZBOT_3}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
