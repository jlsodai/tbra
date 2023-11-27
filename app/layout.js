import "@/styles/globals.css";
import { Inter, Libre_Baskerville, Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import AOSWrapper from "./wrappers/AOSWrapper";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import HubspotChat from "@/app/components/HubSpotChat";
import Script from "next/script";
import { Suspense } from "react";
// import LiveChat from "./components/LiveChat";

const noto = Noto_Serif_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
});

// const inter = Inter({
// 	variable: "--font-inter",
// 	subsets: ["latin"],
// 	display: "swap",
// });

// const libreb = Libre_Baskerville({
// 	variable: "--font-libre-baskerville",
// 	subsets: ["latin"],
// 	weight: ["400", "700"],
// 	display: "swap",
// });

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Light.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-inter",
});

const libreb = localFont({
  src: [
    {
      path: "../public/fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-libre-baskerville",
});

const halyard = localFont({
  src: [
    {
      path: "../public/fonts/Halyard-Display-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Halyard-Display-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Halyard-Display-ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
  ],
  variable: "--font-halyard-display",
});

export const metadata = {
  title: "TheBoardroom Africa",
  description:
    "Promoting exceptional female talent to boards in Africa and the globe, and breaking down barriers to help companies realise the benefits of increased diversity.",
  keywords:
    "Female executives in Africa, Board Recruitment, Boardroom recruitment, Executive search, Board of directors recruitment, Top-level talent acquisition, CEO recruitment, C-suite recruitment, Headhunting for senior executives, Talent management for board positions, Recruitment services for board members, Senior level executive search",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreb.variable} ${noto.variable} ${halyard.variable} text-dusk text-[16px]`}
    >
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      <body className="font-sans">
        <main className="overflow-hidden">
          <AOSWrapper>{children}</AOSWrapper>
        </main>
        {/* <Suspense fallback={null}> */}
        {/* <HubspotChat
          url="http://js-eu1.hs-scripts.com/140566945.js"
          id="hs-script-loader"
        /> */}
        <Script
          id="intercom"
          dangerouslySetInnerHTML={{
            __html: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "irmrjwcf"
              };
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/irmrjwcf';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />
        {/* <LiveChat /> */}
        {/* </Suspense> */}
        {/* <Script strategy="afterInteractive" id="hs-script-loader" async defer src="https://js-eu1.hs-scripts.com/140566945.js" /> */}
      </body>
    </html>
  );
}
