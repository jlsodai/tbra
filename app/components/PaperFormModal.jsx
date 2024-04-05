"use client";
import React from "react";
import PaperForm from "@/app/components/PaperForm";
import { useEffect } from "react";

export default function PaperFormModal({
  btnText,
  paperform,
  className,
  prefill = "",
  showSpinner = 1,
  aosDelay = 0,
  aos = "fade-up",
}) {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <button
        className={`${className || "btn font-semibold mt-4 uppercase"}`}
        type="button"
        onClick={() => setShowModal(true)}
        data-aos={aos}
        data-aos-delay={aosDelay}
      >
        {btnText}
      </button>
      {showModal ? (
        <>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-dusk bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all m-8 max-w-[800px] w-full">
                  <button
                    className="p-2 mr-2 !text-gray float-right text-3xl"
                    onClick={() => setShowModal(false)}
                    style={{ color: "#333333" }}
                  >
                    ×
                  </button>
                  <div className="bg-white px-4 pt-12 min-h-[400px]">
                    <div
                      prefill={prefill}
                      prefill-inherit="true"
                      data-paperform-id={paperform}
                      data-spinner={showSpinner}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
