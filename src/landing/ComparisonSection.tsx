import clsx from "clsx";

type ComparisonItem = {
  label: string;
  children: {
    content: string;
  }[];
};

const COMPARISON_LIST: ComparisonItem[] = [
  {
    label: "型号",
    children: [{ content: "Zeroth Bot" }, { content: "Bruce" }, { content: "OP3" }],
  },
  {
    label: "厂商",
    children: [
      { content: "乐享智能科技" },
      { content: "Westwood Robotics" },
      { content: "ROBOTICS" },
    ],
  },
  {
    label: "身高(cm)",
    children: [{ content: "50cm" }, { content: "70cm" }, { content: "51cm" }],
  },
  {
    label: "宽度(cm)",
    children: [{ content: "23cm" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "厚度(cm)",
    children: [{ content: "15cm" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "体重(kg)",
    children: [{ content: "2.8kg" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "自由度",
    children: [
      { content: "18<br>手4*2<br>腿5*2" },
      { content: "16<br>手臂3*2<br>腿5*2" },
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
    label: "算力(TOPS)",
    children: [{ content: "0.5" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "内存(G)",
    children: [{ content: "0.5" }, { content: "-" }, { content: "8" }],
  },
  {
    label: "存储(G)",
    children: [{ content: "32" }, { content: "-" }, { content: "128" }],
  },
  {
    label: "速度(m/s)",
    children: [{ content: "0.35" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "最大关节力矩(N·m)",
    children: [{ content: "3" }, { content: "8" }, { content: "-" }],
  },
  {
    label: "电池(mAh)",
    children: [{ content: "TBD" }, { content: "3000" }, { content: "1800" }],
  },
  {
    label: "续航(h)",
    children: [{ content: "TBD" }, { content: "-" }, { content: "-" }],
  },
  {
    label: "感知",
    children: [{ content: "广角摄像头" }, { content: "-" }, { content: "高清网络摄像头" }],
  },
  {
    label: "功能",
    children: [
      { content: "少内容" },
      { content: "动态行走、奔跑、跳跃<br>Wifi或蓝牙控制" },
      { content: "可以进行足球赛" },
    ],
  },
  {
    label: "特点",
    children: [
      { content: "第一款端到端机器人" },
      {
        content: "独立的无线急停装置<br>膝关节驱动器液态冷却<br>碳纤维骨架",
      },
      { content: "小型化<br>高度可编程" },
    ],
  },
  {
    label: "价格",
    children: [{ content: "少内容" }, { content: "$15290" }, { content: "$11000" }],
  },
];

const ComparisonRow = ({ item, index }: { item: ComparisonItem; index: number }) => {
  return (
    <div className="flex flex-row gap-10">
      <div className="w-1/6 rounded-full bg-background flex items-center justify-center text-xs">
        {item.label}
      </div>
      <div
        className={clsx(
          "flex flex-row flex-1 rounded-full",
          index !== 0 ? "bg-background" : "gap-4"
        )}
      >
        {item.children.map((child, childIndex) => {
          return (
            <div
              className={clsx(
                "text-xs flex-1 p-2 text-center leading-normal flex items-center justify-center",
                childIndex === 0 ? "text-rust" : "",
                index === 0 ? "rounded-full bg-background" : ""
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
    <section className="col-span-full py-24">
      <h2 className="text-center">Competitor Comparison</h2>
      <p className="text-center mt-2 mb-6">
        Unlike traditional robotics platforms, we provide intuitive, affordable tools for students
        to experiment without barriers. Whether it’s programming robots to play football or
        competing in hackathons, our platform empowers you to do more.
      </p>

      <div className="bg-white rounded-2xl p-5 flex flex-col gap-1">
        {COMPARISON_LIST.map((item, index) => {
          return <ComparisonRow item={item} key={index} index={index} />;
        })}
      </div>

      <video src="" controls className="mx-auto w-2/3 mt-10 rounded-2xl"></video>
    </section>
  );
};
