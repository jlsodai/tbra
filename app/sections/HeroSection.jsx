"use client";
import { useRef, useEffect } from "react";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Typed from "typed.js";

const HeroSection = ({ hero }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [hero.title],
      typeSpeed: 40,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [hero.title]);

  return (
    <div className="bg-darkblue bigborder" data-aos="fade-up">
      <div className="flex container min-h-[calc(100dvh-75px)] relative justify-center items-center ">
        <img
          src="/images/white-key.png"
          className="absolute left-0 h-[75%] -z-1 opacity-4"
          alt=""
        />
        <div className="z-10 text-xl flex flex-col gap-6 my-16 md:my-28">
          <h1 className="text-mustard text-7xl max-w-5xl" ref={el}></h1>
          <div className="md:max-w-[65%]">
            <p className=" text-dawn">{hero.details}</p>
            {/* <div className="mt-10 flex gap-12 items-center">
              <Link
                href="/membership/application"
                className="btn bg-dawn font-normal"
              >
                Apply Now
              </Link>
              <a href="/membership" className="text-white">
                Learn more &nbsp;→
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
