export const ForStudentsSection = () => {
  return (
    <section className="-mx-[5vw] relative col-span-full">
      <div className="h-[100vh] sticky top-0">
        <img src="https://img.la/1920x1080" alt="bg" className="w-full h-full object-cover" />
      </div>
      <div className="min-h-[100vh] sticky top-0">
        <div className="h-full ml-auto w-1/2 p-14 bg-[rgba(255,255,255,0.9)] ">
          <h3 className="mb-2">For Robotics Students</h3>
          <p className="text-xs mb-10">
            This is your chance to dive into the cutting-edge world of robotics with sim-to-real
            technology.
          </p>
          <h4 className="mb-2">1. Test Your First Sim-to-Real Model</h4>
          <p className="text-xs mb-10">
            · Build and test robotic actions seamlessly from simulation to physical reality. <br />
            · Features like an 18-degree range of motion give you ultimate flexibility. <br />· (WE
            NEED MORE SPECS)
          </p>
          <h4 className="mb-2">2. Create Complex Actions</h4>
          <p className="text-xs mb-10">
            · Develop advanced actions and behaviours for your robot with intuitive tools. <br />·
            Upload and share your creations with the community.
          </p>
          <h4 className="mb-2">3. Collaborative Robotics</h4>
          <p className="text-xs mb-10">
            · Connect multiple robots to interact with each other in real time. <br />· Design group
            activities like robot football and collaborative dances.
          </p>
        </div>
      </div>
    </section>
  );
};
