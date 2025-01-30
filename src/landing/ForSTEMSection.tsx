import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

export const ForSTEMSection = () => {
  return (
    <section className="-mx-[5vw] relative col-span-full ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src={photoPaths.NEW_UI_FOR_BG}
          alt={photoPathAltText.NEW_UI_FOR_BG}
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="mr-auto w-full md:w-1/2 p-6 md:p-14 bg-rust text-white opacity-85">
        <h3 className="mb-2">For STEM Student</h3>
        <p className="text-xs mb-10">
          Share the Joy of a Self-Trained Robot <br />
          Robots are the ultimate creative companion for kids. They’re customizable, fun, and
          designed to spark the imagination.
        </p>
        <h4 className="mb-2">· Cybertruck-inspired designs</h4>
        <p className="text-xs mb-10">Cool, futuristic styles that kids will love.</p>
        <h4 className="mb-2">· A soulmate in robot form</h4>
        <p className="text-xs mb-10">Build a bond with a robot that’s entirely their own.</p>
        <h4 className="mb-2">· Unleash creativity</h4>
        <p className="text-xs mb-10">
          Define the robot’s personality, emotions, and interactions for endless fun.
        </p>
      </div>
    </section>
  );
};
