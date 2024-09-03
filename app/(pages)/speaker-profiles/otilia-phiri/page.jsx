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
          src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_976,h_976,c_fill,g_north,a_hflip/v1725267947/otiliaPhoto_ollx3k.jpg"
          alt=""
        />
        <div className="md:order-first">
          <p className="font-bold text-4xl font-libreb mb-8">Otilia Phiri</p>
          <p className="mt-4">
            Otilia is an in-house legal professional with over fifteen years of
            experience across Middle East and African markets who enjoys working
            at the intersection of law and technology. Currently a Principal
            Corporate Counsel at Microsoft leading commercial legal support for
            the business in Africa. Her role includes engagement with both
            private and public sector organisations as they navigate the
            evolving technology regulatory landscape.
          </p>
          <p className="mt-4">
            Prior to joining Microsoft, she worked in various roles within the
            technology and infrastructure development space. She served as a
            Legal Advisor for Development Projects at Nakheel, and later at
            Samsung Construction & Engineering working on iconic developments in
            the region such as the Palm Jumeirah and Burj Khalifa. She also
            served in various capacities including Legal Counsel Middle East &
            Africa at Nokia Corporation during the period leading to the
            acquisition of Nokia devices and services business by Microsoft
            Corporation.
          </p>
          <p className="mt-4">
            Otilia holds an LLB from the University of Cape Town, South Africa,
            a Post-Graduate Diploma in Project Management from Heriot-Watt
            University, Dubai Campus and is admitted as a Legal Practitioner in
            the High Court of Zimbabwe.
          </p>
          <p className="mt-4">
            Otilia is driven by a passion for people and community engagement.
            She is an active participant in various industry associations
            including Lawyers in Technology, American Chamber of Commerce in
            Kenya and has contributed to work streams in pan-African
            organisations such as Smart Africa.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
