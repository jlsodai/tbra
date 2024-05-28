/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Markdown from "markdown-to-jsx";

const page = () => {
  return (
    <>
      <HeaderTitle title="Speaker Profile" />

      <section
        className="container grid md:grid-cols-2 mt-16 gap-8 md:gap-16 items-center"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dqngxqaha/image/upload/v1716895462/About-Steve-Cadigan-Header_gebxsi.jpg"
          alt=""
        />
        <div className="md:order-first">
          <p className="font-bold text-4xl font-libreb mb-8">Steve Cadigan</p>
          <p className="mt-4">
            Steve has been at the forefront of global talent strategy and
            company culture for the past 30 years. Most famous for scaling
            Linkedin from 400 to 4000 in 3.5 years, Steve also led the
            development of LI&apos;s legendary company culture and was at the
            helm of the Talent function for its period of the highest growth and
            through their IPO.
          </p>
          <p className="mt-4">
            Having worked in 5 different industries and 3 different countries
            while also leading dozens of acquisition integrations all over the
            world, Steve has built unparalleled expertise for the Talent arena.
            Steve&apos;s focus today is to help leaders and organisations build
            winning talent solutions to compete in an increasingly complex
            digital economy.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
