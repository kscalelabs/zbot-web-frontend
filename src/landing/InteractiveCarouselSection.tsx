const CAROUSEL_ITEMS = [
  {
    title: "Motion-to-motion",
    desc: "Program your robot to replicate complex movements.",
    src: "",
    poster: "",
  },
  {
    title: "Play with pets",
    desc: "Let your robot keep your pets entertained when you’re not home.",
    src: "",
    poster: "",
  },
  {
    title: "Boxing for kids",
    desc: "Fun, safe activities for kids to engage with their robot.",
    src: "",
    poster: "",
  },
  {
    title: "Gym buddy",
    desc: "Train alongside your robot for motivation and companionship.",
    src: "",
    poster: "",
  },
];

export const InteractiveCarouselSection = () => {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  //
  // const handleItemClick = (index) => {
  //   setSelectedIndex(index);
  // };
  //
  // const selectedItem = items[selectedIndex];

  return (
    <div className="py-16 col-span-full ">
      <h2 className="text-center">Interactive Carousel</h2>
      <div className="mt-6 flex flex-row gap-4 relative">
        <div className="w-[26vw] flex flex-col gap-2">
          {CAROUSEL_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-5">
              <div className="text-lg font-bold">{item.title}</div>
              <div className="text-xs mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          <div className="sticky top-16 bg-white rounded-2xl aspect-[1.77]"></div>
        </div>
      </div>
    </div>
  );
};
