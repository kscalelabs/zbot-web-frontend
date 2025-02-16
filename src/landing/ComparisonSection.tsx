import clsx from "clsx";

type ComparisonItem = {
  label: string;
  children: {
    content: string;
  }[];
};

const COMPARISON_LIST: ComparisonItem[] = [
  {
    label: "Model",
    children: [{ content: "Zeroth Bot" }, { content: "Bruce" }, { content: "OP3" }],
  },
  {
    label: "Height (cm)",
    children: [{ content: "50cm" }, { content: "70cm" }, { content: "51cm" }],
  },
  {
    label: "Width (cm)",
    children: [{ content: "23cm" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Thickness (cm)",
    children: [{ content: "15cm" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Weight (kg)",
    children: [{ content: "2.8kg" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Degress of Freedom",
    children: [
      { content: "18<br>Arm DoF 4*2<br>Leg DoF 5*2" },
      { content: "16<br>Arm DoF 3*2<br>Leg DoF 5*2" },
      { content: "20" },
    ],
  },
  {
    label: "CPU",
    children: [
      { content: "C906@1Ghz+C906@700Mhz<br>Cortex-A53@1GHz" },
      { content: "-" },
      { content: "Intel Core i3*2" },
    ],
  },
  {
    label: "Computing power (TOPS)",
    children: [{ content: "0.5" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Memory (GB)",
    children: [{ content: "0.5" }, { content: "-" }, { content: "8" }],
  },
  {
    label: "Storage (GB)",
    children: [{ content: "32" }, { content: "-" }, { content: "128" }],
  },
  {
    label: "Speed (m/s)",
    children: [{ content: "0.35" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Max Joint Torque (N·m)",
    children: [{ content: "3" }, { content: "8" }, { content: "-" }],
  },
  {
    label: "Battery (mAh)",
    children: [{ content: "TBD" }, { content: "3000" }, { content: "1800" }],
  },
  {
    label: "Battery life (h)",
    children: [{ content: "TBD" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "Perception",
    children: [{ content: "Wide-angle camera" }, { content: "-" }, { content: "HD webcam" }],
  },
  {
    label: "Features",
    children: [
      { content: "The first end-to-end robot" },
      {
        content: `Independent wireless emergency stop device<br>Knee drive liquid cooling<br>carbon fiber skeleton`,
      },
      { content: `miniaturization<br>Highly programmable` },
    ],
  },
  {
    label: "Price",
    children: [{ content: "$999" }, { content: "$15,290" }, { content: "$11,000" }],
  },
];

const ComparisonRow = ({ item, index }: { item: ComparisonItem; index: number }) => {
  return (
    <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 min-w-96">
      <div className="min-w-24 md:w-1/6 rounded-2xl md:rounded-full bg-background flex items-center justify-center text-xs break-all md:break-normal text-center">
        {item.label}
      </div>
      <div
        className={clsx(
          "flex flex-row flex-1 rounded-2xl md:rounded-full",
          index !== 0 ? "bg-background" : "gap-4"
        )}
      >
        {item.children.map((child, childIndex) => {
          return (
            <div
              className={clsx(
                "text-xs flex-1 p-2 text-center leading-normal flex items-center justify-center break-all md:break-normal",
                childIndex === 0 ? "text-rust" : "",
                index === 0 ? "rounded-2xl md:rounded-full bg-background" : ""
              )}
              key={childIndex}
              dangerouslySetInnerHTML={{ __html: child.content }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ComparisonSection = () => {
  return (
    <section className="col-span-full py-24 -mx-[5vw]">
      <h2 className="text-center">Competitor Comparison</h2>
      <p className="text-center mt-4 mb-6 max-w-4xl mx-auto leading-5">
        Unlike traditional robotics platforms, we provide intuitive, affordable tools for students
        to experiment without barriers. Whether it’s programming robots to play football or
        competing in hackathons, our platform empowers you to do more.
      </p>

      <div className="bg-background-card md:rounded-2xl p-2 md:p-5 flex flex-col gap-1 overflow-x-auto md:mx-[5vw]">
        {COMPARISON_LIST.map((item, index) => {
          return <ComparisonRow item={item} key={index} index={index} />;
        })}
      </div>

      {/*<video src="" controls className="mx-auto w-11/12 md:w-2/3 mt-10 rounded-2xl"></video>*/}
      {/*<iframe
        src="https://www.youtube.com/embed/Zts1I2FRP90"
        allowFullScreen
        className="aspect-[1.4] md:aspect-[1.777] mx-auto w-11/12 md:w-2/3 mt-10 rounded-2xl"
      />*/}
    </section>
  );
};
