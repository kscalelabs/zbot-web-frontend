import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis } from "lenis/dist/lenis-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-XXXXXXX", // Replace with your GTM ID
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Zeroth Bot</title>
        <meta
          name="description"
          content="The world's most accessible robot AI for developers. Powerful, affordable, and open-source robotics dev kit. The platform for builders."
        />
        <meta
          name="keywords"
          content="Zeroth Bot, Robot, Robots, Humanoid Robots, robotics, humanoid robotics, humanoids, Droids, droid, Androids, android, AI, Embodied intelligence, Embodied AI, Artificial intelligence, embodied artificial intelligence, AI robots, AI robotics, open source, open-source, open source robot, open-source robotics, open source AI, open-source AI, open source artificial intelligence, open-source artificial intelligence, open source humanoid, open-source humanoid, k scale, kscale, kscale labs, k scale labs, k-scale, kscale ai, k-scale ai, k-scale labs ai"
        />
        <meta property="og:title" content="Zeroth Bot" />
        <meta
          property="og:description"
          content="The world's most accessible robot AI for developers. Powerful, affordable, and open-source robotics dev kit. The platform for builders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zerothbot.com" />
        <meta property="og:site_name" content="Zeroth Bot" />
        <meta name="og:image" content="/meta/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zeroth Bot" />
        <meta
          name="twitter:description"
          content="The world's most accessible robot AI for developers. Powerful, affordable, and open-source robotics dev kit. The platform for builders."
        />
        <meta name="twitter:image" content="/meta/twitter-image.png" />
      </Head>

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
      <ReactLenis root>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ReactLenis>
    </>
  );
}
