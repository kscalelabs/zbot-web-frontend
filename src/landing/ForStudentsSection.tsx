import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

export const ForStudentsSection = () => {
  return (
    <section className="-mx-[5vw] relative col-span-full">
      <div className="h-[100vh] sticky top-0 relative">
        <Image
          src={photoPaths.NEW_UI_FOR_BG}
          alt={photoPathAltText.NEW_UI_FOR_BG}
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="sticky top-0">
        <div className="min-h-[100vh] ml-auto w-full md:w-1/2 p-6 md:p-14 text-black bg-[rgba(255,255,255,0.9)] ">
          <h3 className="mb-2">For Robotics Students</h3>
          <p className="text-xs mb-10">
            This is your chance to dive into the cutting-edge world of robotics with sim-to-real
            technology.
          </p>
          <h4 className="mb-2 font-bold">Test Your First Sim-to-Real Model</h4>
          <p className="text-xs mb-10">
            · Build and test robotic actions seamlessly from simulation to physical reality. <br />
            · Features like an 18-degree range of motion give you ultimate flexibility. <br />· (WE
            NEED MORE SPECS)
          </p>
          <h4 className="mb-2 font-bold">Create Complex Actions</h4>
          <p className="text-xs mb-10">
            · Develop advanced actions and behaviours for your robot with intuitive tools. <br />·
            Upload and share your creations with the community.
          </p>
          <h4 className="mb-2 font-bold">Collaborative Robotics</h4>
          <p className="text-xs mb-10">
            · Connect multiple robots to interact with each other in real time. <br />· Design group
            activities like robot football and collaborative dances.
          </p>
        </div>
      </div>
    </section>
  );
};
