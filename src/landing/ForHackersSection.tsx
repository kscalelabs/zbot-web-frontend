import { photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";
import { useSystemDarkMode } from "@/components/util/functions";
import { ForTitle } from "@/landing/ForTitle";
import { SliderSection } from "@/landing/SliderSection";

export const ForHackersSection = () => {
  const isDarkMode = useSystemDarkMode();

  const cardItems = [
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_1_DARK : photoPaths.NEW_UI_ROBOT_1_LIGHT,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_2_DARK : photoPaths.NEW_UI_ROBOT_2_LIGHT,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_3_DARK : photoPaths.NEW_UI_ROBOT_3_LIGHT,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_4_DARK : photoPaths.NEW_UI_ROBOT_4_LIGHT,
    },
  ];

  const toolItems = [
    {
      imageSrc: isDarkMode
        ? photoPaths.NEW_UI_ICON_PYTORCH_DARK
        : photoPaths.NEW_UI_ICON_PYTORCH_LIGHT,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ICON_ROS_DARK : photoPaths.NEW_UI_ICON_ROS_LIGHT,
    },
    {
      imageSrc: isDarkMode
        ? photoPaths.NEW_UI_ICON_NVIDIA_DARK
        : photoPaths.NEW_UI_ICON_NVIDIA_LIGHT,
    },
    {
      imageSrc: photoPaths.NEW_UI_ICON_PYTHON,
    },
  ];

  return (
    <>
      <ForTitle title="Developers" subtitle="Who is it for?" />
      <section className="py-16 col-span-full ">
        <h2>For Hackers Who Know the Tools</h2>
        <p className="mt-4 leading-5 max-w-3xl">
          Zeroth Bot is a powerhouse for hackers familiar with advanced AI/ML workflows. It’s
          capable of learning-based control and running the latest end-to-end AI/ML models. With its
          fully open-source code available on GitHub, Zeroth Bot integrates seamlessly with
          platforms like Python, Nvidia, ROS, and PyTorch, enabling limitless functionality across
          systems.
        </p>

        <div className="mt-6 bg-background-card p-6 rounded-2xl flex gap-6 justify-center items-center flex-wrap">
          {toolItems.map((item, index) => (
            <div key={index}>
              <img src={item.imageSrc} alt="icon" className="h-10 w-auto" />
            </div>
          ))}
          <div className="text-2xl">More...</div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {cardItems.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 gap-3 text-rust">
              <div className=" rounded-2xl aspect-[0.975] relative overflow-hidden">
                <Image src={item.imageSrc} alt="robot" fill className="object-cover" priority />
              </div>
            </div>
          ))}
        </div>
      </section>
      <SliderSection
        title="Zeroth Bot excels in cutting-edge AI tasks"
        desc="With Zeroth Bot, you gain the tools, flexibility, and community to push the boundaries of robotics and machine learning."
        list={[
          {
            src: photoPaths.NEW_UI_AI_1,
            title: "Language-Action Models",
          },
          {
            src: photoPaths.NEW_UI_AI_2,
            title: "Language-Action Models",
          },
          {
            src: photoPaths.NEW_UI_AI_3,
            title: "Computer Vision (CV)",
          },
          {
            src: photoPaths.NEW_UI_AI_4,
            title: "LLM-Based Conversational AI",
          },
        ]}
        aspectRatio={1.77}
      />
    </>
  );
};
