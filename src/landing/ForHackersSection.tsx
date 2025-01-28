import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

export const ForHackersSection = () => {
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
      <div className="min-h-[100vh] sticky top-0">
        <div className="min-h-[100vh] mr-auto w-1/2 p-14 bg-rust opacity-85 text-white">
          <h3 className="mb-2">For Hackers Who Know the Tools</h3>
          <p className="text-xs mb-10">
            Zeroth Bot is a powerhouse for hackers familiar with advanced AI/ML workflows. It’s
            capable of learning-based control and running the latest end-to-end AI/ML models. With
            its fully open-source code available on GitHub, Zeroth Bot integrates seamlessly with
            platforms like Python, Nvidia, ROS, and PyTorch, enabling limitless functionality across
            systems.
            <br />
            <br />
            Hackers are further empowered by a thriving community of world-class ML researchers who
            actively share data, models, and code to accelerate development and innovation.
          </p>
          <h4 className="mb-2">Zeroth Bot excels in cutting-edge AI tasks, including</h4>
          <p className="text-xs mb-10">
            · Language-Action Models <br />
            · Voice Control <br />
            · Computer Vision (CV) <br />
            · LLM-Based Conversational AI <br />
            <br />
            With Zeroth Bot, you gain the tools, flexibility, and community to push the boundaries
            of robotics and machine learning.
          </p>
        </div>
        <div className="min-h-[100vh] ml-auto w-1/2 p-14 text-black bg-[rgba(255,255,255,0.9)] flex items-center">
          <div>
            <h3 className="mb-2">For Beginners with No Robotics Experience</h3>
            <p className="text-xs mb-10">
              <span className="text-rust">Today, you can define and own your own robot.</span>{" "}
              <br />
              No prior experience? No problem. Our platform is designed to make robotics accessible
              to everyone. Start small, learn as you go, and create something unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
