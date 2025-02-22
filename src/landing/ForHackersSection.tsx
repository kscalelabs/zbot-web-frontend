import { photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";
import { SliderSection } from "@/landing/SliderSection";

export const ForHackersSection = () => {
  const isDarkMode = true;

  const cardItems = [
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_1_DARK : photoPaths.NEW_UI_ROBOT_1_LIGHT,
      width: 1170,
      height: 1200,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_2_DARK : photoPaths.NEW_UI_ROBOT_2_LIGHT,
      width: 1170,
      height: 1200,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_3_DARK : photoPaths.NEW_UI_ROBOT_3_LIGHT,
      width: 1170,
      height: 1200,
    },
    {
      imageSrc: isDarkMode ? photoPaths.NEW_UI_ROBOT_4_DARK : photoPaths.NEW_UI_ROBOT_4_LIGHT,
      width: 1170,
      height: 1200,
    },
  ];

  const toolItems = [
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
      <section className="py-16 col-span-full ">
        <h2>Developer Tools to enable</h2>
        <p className="mt-4 leading-5 max-w-3xl">
          Zeroth Bot is a powerhouse for hackers familiar with advanced AI/ML workflows. It`s
          capable of learning-based control and running the latest end-to-end AI/ML models. With its
          fully open-source code available on GitHub, Zeroth Bot integrates seamlessly with
          platforms like MuJoCo, NVIDIA Isaac Sim, Genesis to enable limitless functionality across
          systems.
        </p>

        <div className="mt-6 bg-background-card p-6 rounded-2xl flex gap-6 justify-center items-center flex-wrap">
          {toolItems.map((item, index) => (
            <div key={index}>
              <img src={item.imageSrc} alt="icon" className="h-10 w-auto" />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {cardItems.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 gap-3 text-rust">
              <div className=" rounded-2xl aspect-[0.975] relative overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt="robot"
                  className="object-cover"
                  width={item.width}
                  height={item.height}
                  priority
                />
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
            width: 3000,
            height: 1800,
          },
          {
            src: photoPaths.NEW_UI_AI_2,
            title: "Computer Vision",
            width: 3000,
            height: 1800,
          },
          {
            src: photoPaths.NEW_UI_AI_3,
            title: "Computer Vision (CV)",
            width: 3000,
            height: 1800,
          },
          {
            src: photoPaths.NEW_UI_AI_4,
            title: "LLM-Based Conversational AI",
            width: 3000,
            height: 1800,
          },
        ]}
        aspectRatio={1.77}
      />
      <SliderSection
        title="For Students"
        desc="Whether you're a student, engineer, or some someone with no prior experience, this is your change to explore the future."
        list={[
          {
            src: photoPaths.FOR_STUDENTS_1,
            title: "Learning Robotics with Python and Rust",
            width: 2256,
            height: 1692,
          },
          {
            src: photoPaths.FOR_STUDENTS_2,
            title: "Implementing ML Models",
            width: 2392,
            height: 2038,
          },
          {
            src: photoPaths.NEW_UI_ZBOT_1,
            title: "Join Competitions",
            width: 2304,
            height: 1536,
          },
        ]}
        aspectRatio={1.77}
      />
      <SliderSection
        title="For Everyday users"
        desc="Control robot by voice. Physically present personal assistant"
        list={[
          {
            src: photoPaths.FOR_EVERYDAY_1,
            title: "Personal Assistant",
            width: 2304,
            height: 1536,
          },
          {
            src: photoPaths.FOR_EVERYDAY_2,
            title: "Intelligent voice control",
            width: 1374,
            height: 2060,
          },
          {
            src: photoPaths.FOR_EVERYDAY_3,
            title: "Computer Vision (CV)",
            width: 3000,
            height: 1800,
          },
        ]}
        aspectRatio={1.77}
      />
    </>
  );
};
