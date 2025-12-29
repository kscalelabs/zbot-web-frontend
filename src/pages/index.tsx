import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import CapabilitiesSection from "@/landing/Capabilities";
import CommunitySection from "@/landing/CommunitySection";
import { ForHackersSection } from "@/landing/ForHackersSection";
import HeaderSection from "@/landing/HeaderSection";
import SpecSection from "@/landing/SpecSection";
import SubscribeFooterSection from "@/landing/SubscribeFooterSection";
import { useLenis } from "lenis/dist/lenis-react";
import { useEffect } from "react";
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
