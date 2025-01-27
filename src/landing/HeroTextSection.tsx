import clsx from "clsx";

export const HeroTextSection = () => {
  const textArray = [
    {
      text: "Affordable Robotics for All",
      className: "text-heading-lg",
    },
    {
      text: "Now you can get started and learn for less than $1000",
      className: "text-heading-lg",
    },
    {
      text: "Robotics has always been seen as expensive and exclusive. Not anymore. With our platform, you can own and train a robot for less than $1000, bringing cutting-edge technology within everyone’s reach. Whether you're a student, a hacker, or someone with no prior experience, this is your chance to explore the future.",
      className: "text-heading-sm",
    },
  ];

  return (
    <div className="col-span-full">
      {textArray.map((item) => {
        return (
          <div
            key={item.text}
            className="min-h-[100svh] flex items-center justify-center text-center"
          >
            <p className={clsx("max-w-5xl leading-tight", item.className)}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
