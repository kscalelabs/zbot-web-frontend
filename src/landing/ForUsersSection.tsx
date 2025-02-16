import { photoPaths } from "@/components/util/photoPaths";
import { ForTitle } from "@/landing/ForTitle";
import { SliderSection } from "@/landing/SliderSection";

export const ForUsersSection = () => {
  return (
    <>
      <ForTitle title="Everyday Users" subtitle="Who is it for?" />

      <SliderSection
        title="For Beginners with No Robotics Experience"
        desc="No prior experience? No problem. Our platform is designed to make robotics accessible to everyone. Start small, learn as you go, and create something unique."
        list={[
          {
            html: "Today, <br>you can define and <br>own your own robot.",
          },
          {
            src: photoPaths.NEW_UI_USER_1,
          },
          {
            src: photoPaths.NEW_UI_USER_2,
          },
          {
            src: photoPaths.NEW_UI_USER_3,
          },
          {
            src: photoPaths.NEW_UI_USER_4,
          },
        ]}
        aspectRatio={1.3636}
        itemClassName="w-[34vw] md:w-[35w]"
      />
    </>
  );
};
