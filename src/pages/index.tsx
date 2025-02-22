import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import HeaderSection from "@/landing/HeaderSection";
import { useLenis } from "lenis/dist/lenis-react";
import { useEffect } from "react";
import SubscribeFooterSection from "@/landing/SubscribeFooterSection";
import { ForHackersSection } from "@/landing/ForHackersSection";
import CapabilitiesSection from "@/landing/Capabilities";
import { VisionStatement } from "@/landing/VisionStatement";
import CommunitySection from "@/landing/CommunitySection";
import SpecSection from "@/landing/SpecSection";
export default function ZBot() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const handleScroll = () => {
        if (lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", true);
        }
        if (!lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", false);
        }
      };

      lenis.on("scroll", handleScroll);

      return () => {
        lenis.off("scroll", handleScroll);
      };
    }
  }, [lenis]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar href="/" />
      <main className="gap-y-4">
        <HeaderSection />
        <SpecSection />
        {/* <VisionStatement /> */}
        <CapabilitiesSection />
        <ForHackersSection />
        <CommunitySection />
        <SubscribeFooterSection />
      </main>
      <Footer />
    </div>
  );
}
