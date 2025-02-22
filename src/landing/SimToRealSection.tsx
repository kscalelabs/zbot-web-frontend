import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

export const SimToRealSection = () => {
  return (
    <section className="col-span-full py-16 gap-10 flex flex-col lg:flex-row">
      <div className="flex-1">
        <h2 className="">What is Sim-to-Real?</h2>
        <p className="text-sm mt-2 mb-4">
          Sim-to-real is the technology that bridges the gap between virtual simulations and
          real-world robotics. It allows you to design and refine your robot&#39;s actions in a
          virtual environment before seamlessly transferring those skills to the physical robot.
        </p>
        <div className="aspect-[1.95] bg-white rounded-2xl relative overflow-hidden">
          <Image
            src={photoPaths.NEW_UI_WHAT_IS_1}
            alt={photoPathAltText.NEW_UI_WHAT_IS_1}
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full lg:w-[39.2%]">
        <div className="aspect-[0.88] bg-white rounded-2xl relative overflow-hidden">
          <Image
            src={photoPaths.NEW_UI_WHAT_IS_2}
            alt={photoPathAltText.NEW_UI_WHAT_IS_2}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
