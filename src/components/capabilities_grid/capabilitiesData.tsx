import { CapabilitiesData } from "@/components/util/constants";
import { photoPathCapabilities, photoPathCapabilitiesAltText } from "@/components/util/photoPaths";

export const capabilitiesData: CapabilitiesData[] = [
  {
    photoLink: photoPathCapabilities.LOCO_MANIP,
    photoLinkAlt: photoPathCapabilitiesAltText.LOCO_MANIP_ALT,
    title: "Locomotion and \nManipulation",
    description: "Omnidirectional PPO walking\n" + "Pick up objects\n" + "Use objects",
    key: 0,
  },
  {
    photoLink: photoPathCapabilities.AI_ENABLED,
    photoLinkAlt: photoPathCapabilitiesAltText.AI_ENABLED_ALT,
    title: "AI Enabled",
    description: "Sim-to-Real\n" + "LLM Integration\n" + "Computer Vision",
    key: 1,
  },
  {
    photoLink: photoPathCapabilities.FLEX_AND_AGILE,
    photoLinkAlt: photoPathCapabilitiesAltText.FLEX_AND_AGILE_ALT,
    title: "Flexibility and \nAgility",
    description:
      "LLM Integration\n" + "Computer Vision\n" + "Challenging Poses " + "\nlike Squatting",
    key: 2,
  },
  {
    photoLink: photoPathCapabilities.HARDWARE,
    photoLinkAlt: photoPathCapabilitiesAltText.HARDWARE_ALT,
    title: "Hardware",
    description: "18 DOF\n" + "-- TOPS with a dual \n" + "core processor\n" + "Sensors",
    key: 3,
  },
  {
    photoLink: photoPathCapabilities.OPEN_SOURCE,
    photoLinkAlt: photoPathCapabilitiesAltText.OPEN_SOURCE_ALT,
    title: "Open-Source \nCommunity of 1000+",
    description:
      "Building new things with\n" +
      "robots isn’t always easy, but\n" +
      "with Zeroth Bot, you’ll never\n" +
      "be doing it alone",
    key: 4,
  },
  {
    photoLink: photoPathCapabilities.ECOSYSTEM,
    photoLinkAlt: photoPathCapabilitiesAltText.ECOSYSTEM_ALT,
    title: "K-Scale Software \nEcosystem",
    description: "Python SDK\n" + "Over-The-Air Updates\n" + "Pytorch and Nvidia",
    key: 5,
  },
];
