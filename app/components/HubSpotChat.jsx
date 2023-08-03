"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const HubspotChat = ({ formSlug, showSpinner = 1 }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const d = document.getElementById("hs-script-loader");
    if (d) d.remove();

    const script = document.createElement("script");
    script.src = "//js-eu1.hs-scripts.com/140566945.js";
    script.id = "hs-script-loader";

    document.body.appendChild(script);
  }, [pathname, searchParams]);

  return <></>;
};

export default HubspotChat;
