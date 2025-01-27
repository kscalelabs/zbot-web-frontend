export const RobotPicturesSection = () => {
  return (
    <div className="col-span-full py-16 relative grid grid-cols-subgrid">
      <div className="col-span-6">
        <div className="lg:sticky top-32">
          <h2>See Your Robot in Action</h2>
          <div className="text-sm text-gray-500 mt-4">
            Your robot isn’t just programmable—it’s expressive. Watch it walk, animate, and move
            from every angle: side-view, upper-view, and more. The possibilities are endless when
            you define the way it interacts with the world.
          </div>
        </div>
      </div>
      <div className="col-span-6 flex flex-col gap-10">
        <div className="aspect-[1.53] bg-white rounded-2xl"></div>
        <div className="aspect-[1.53] bg-white rounded-2xl"></div>
        <div className="aspect-[1.53] bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};
