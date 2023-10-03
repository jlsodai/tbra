"use client";
import Link from "next/link";

const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="btn cursor-pointer transition-all ease-in-out duration-300 font-normal text-black rounded text-lg"
      onClick={scrollToTop}
    >
      Get Questionnaire
    </div>
  );
};
export default ScrollToTopBtn;
