"use client";
import { useEffect } from "react";

const HubspotChat = ({ formSlug, showSpinner = 1 }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hs-scripts.com/140566945.js";
    script.id = "hs-script-loader";
    document.body.appendChild(script);
  }, []);

  return <></>;
};
export default HubspotChat;
