import Image from "next/image";
import { capabilitiesData } from "@/components/capabilities_grid/capabilitiesData";
import { CapabilitiesData } from "@/components/util/constants";

const RowCol = (rowItem: CapabilitiesData) => {
  return (
    <div className={"flex flex-col gap-2 "}>
      <Image
        width={389}
        height={389}
        className={"w-[17vw] h-[17vw] rounded"}
        src={rowItem.photoLink}
        alt={rowItem.photoLinkAlt}
        loading={"lazy"}
      />
      <h3 className={"whitespace-pre-line leading-tight"}>{`${rowItem.title}`}</h3>
      <p
        className={"text-foreground70 font-[200] whitespace-pre-line leading-tight"}
      >{`${rowItem.description}`}</p>
    </div>
  );
};
const CapabilitiesSection = () => {
  return (
    <section className={"grid col-span-full py-16 justify-center"}>
      <div className={"grid grid-rows-1 justify-items-start gap-12"}>
        <div className={"flex flex-col gap-2"}>
          <h2>Capabilities</h2>
          <p>We built Z-Bot as a capable and ... robot</p>
        </div>
        <div className={"grid grid-cols-3 grid-flow-row gap-x-32 gap-y-14 justify-items-start "}>
          {capabilitiesData.map((capabilities) => RowCol(capabilities))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
