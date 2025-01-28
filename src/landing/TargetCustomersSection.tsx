export const TargetCustomersSection = () => {
  const cardItems = [
    {
      title: "Developers",
      desc: "Push the boundaries of robotics by experimenting with advanced features and customizations.",
    },
    {
      title: "Students",
      desc: "Build foundational skills in robotics with hands-on opportunities to test and develop real-world applications.",
    },
    {
      title: "Everday Users",
      desc: "Train your robot to assist in your daily life, whether it’s playing with your pets, helping around the house, or just being a fun companion.",
    },
  ];

  return (
    <section className="py-16 col-span-full">
      <h2 className="text-center ">Who is it for?</h2>
      <div className="flex gap-6 mt-8">
        {cardItems.map((item, index) => (
          <div key={index} className="flex flex-col flex-1 gap-4 bg-white rounded-2xl p-5 min-h-80">
            <div className="text-xl">{item.title}</div>
            <div className="text-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
