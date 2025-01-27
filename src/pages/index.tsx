import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import Script from "next/script";
import CommunitySection from "@/landing/CommunitySection";
import GallerySection from "@/landing/GallerySection";
import HeaderSection from "@/landing/HeaderSection";
import ResearchSection from "@/landing/ResearchSection";
import SpecSection from "@/landing/SpecSection";
import RobotSection from "@/landing/RobotSection";
import { useLenis } from "lenis/dist/lenis-react";
import { useEffect } from "react";
import SubscribeSection from "@/landing/SubscribeSection";
import { HeroTextSection } from "@/landing/HeroTextSection";
import { SimToRealSection } from "@/landing/SimToRealSection";
import { TargetCustomersSection } from "@/landing/TargetCustomersSection";
import { RobotPicturesSection } from "@/landing/RobotPicturesSection";
import { RotatingBanner } from "@/landing/RotatingBanner";

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
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Load Mailchimp code after jQuery is available
          const script = document.createElement("script");
          script.text = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";fnames[3]="ADDRESS";ftypes[3]="address";fnames[4]="PHONE";ftypes[4]="phone";fnames[5]="BIRTHDAY";ftypes[5]="birthday";}(jQuery));var $mcj = jQuery.noConflict(true);`;
          document.body.appendChild(script);
        }}
      />
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="afterInteractive"
      />
      <NavBar href="/" />
      <main className="gap-y-4">
        <HeaderSection />
        <SubscribeSection />
        <HeroTextSection />
        <RotatingBanner />
        <SimToRealSection />
        <TargetCustomersSection />
        <RobotPicturesSection />

        {/*<ResearchSection />*/}
        {/*<SpecSection />*/}
        {/*<RobotSection />*/}
        {/*<GallerySection />*/}
        {/*<CommunitySection />*/}
      </main>
      <Footer />
    </div>
  );
}
