import { CapabilitiesData } from "@/components/util/constants";
import { photoPathCapabilities, photoPathCapabilitiesAltText } from "@/components/util/photoPaths";

export const capabilitiesData: CapabilitiesData[] = [
  {
    photoLink: photoPathCapabilities.LOCO_MANIP,
    photoLinkAlt: photoPathCapabilitiesAltText.LOCO_MANIP_ALT,
    title: "RL Locomotion\n& Manipulation",
    description:
      "Reinforcement learning (RL) controllers\n" +
      "Sim-to-real walking & object pickup\n" +
      "Adapt to pushes & unexpected terrain",
    key: 0,
  },
  {
    photoLink: photoPathCapabilities.AI_ENABLED,
    photoLinkAlt: photoPathCapabilitiesAltText.AI_ENABLED_ALT,
    title: "AI-Enabled\n(V2A + LLM)",
    description:
      "Voice-to-Action commands\n" +
      "Conversational LLM responses\n" +
      "Real-time Computer Vision (CV)",
    key: 1,
  },
  {
    photoLink: photoPathCapabilities.FLEX_AND_AGILE,
    photoLinkAlt: photoPathCapabilitiesAltText.FLEX_AND_AGILE_ALT,
    title: "Flexible &\nAgile",
    description:
      "Human motion imitation\n" +
      "Challenging poses & dynamic balance\n" +
      "Natural motion control",
    key: 2,
  },
  {
    photoLink: photoPathCapabilities.HARDWARE,
    photoLinkAlt: photoPathCapabilitiesAltText.HARDWARE_ALT,
    title: "Robust\nHardware",
    description:
      "18 DOF & integrated sensors\n" + "Aerospace-grade materials\n" + "Durable and lightweight",
    key: 3,
  },
  {
    photoLink: photoPathCapabilities.OPEN_SOURCE,
    photoLinkAlt: photoPathCapabilitiesAltText.OPEN_SOURCE_ALT,
    title: "Open-Source\nCommunity",
    description:
      "Join 2000+ developers on Discord\n" +
      "Collaborative development on GitHub\n" +
      "Sim & real deployment examples",
    key: 4,
  },
  {
    photoLink: photoPathCapabilities.ECOSYSTEM,
    photoLinkAlt: photoPathCapabilitiesAltText.ECOSYSTEM_ALT,
    title: "Made for Developers",
    description:
      "Python and Rust SDKs\n" +
      "Over-the-Air Updates\n" +
      "Fully integrated sim2real and ML stack",
    key: 5,
  },
];
