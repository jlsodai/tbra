/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Markdown from "markdown-to-jsx";

const page = () => {
  return (
    <>
      <HeaderTitle title="Speaker Profiles" />

      <section
        className="container grid md:grid-cols-2 mt-16 gap-8 md:gap-16 items-center"
        data-aos="fade-up"
      >
        <img
          src="https://theboardroomafrica.com/wp-content/uploads/2022/06/Mask-Group-3.jpg"
          alt=""
        />
        <div className="md:order-first">
          <p className="font-bold text-4xl font-libreb mb-8">
            Rachel Nyaradzo Adams
          </p>
          <p className="mt-4">
            Rachel is a leadership and transformation specialist, a
            neuroscience, ontological, personality coach, a speaker, and the
            founder of Narachi Leadership, where she empowers leaders to unlock
            their courageous and authentic selves. She believes that Africa will
            only get the future it deserves if leaders can access their highest
            courage and most authentic power.
          </p>
          <p className="mt-4">
            She is a graduate of the University of Oxford and University of Cape
            Town, and has worked with executives and emerging leaders at the
            highest levels including at the UN, World Bank, McKinsey, Yale,
            Obama Leaders, TEDx, L&apos;Oreal and, and of course here at
            TheBoardroom Africa.
          </p>
          <p className="mt-4">
            Rachel is a Mandela Rhodes Scholar, A Mellon Mays Fellow, a Tutu
            Fellow and was named one of the 100 Most Influential Young Africans
            of 2019. Rachel sits on the boards of MINDS, Jakes Gerwel
            Fellowship, St. George&apos;s College and Old Mutual Youth Fund. She
            is also a contributor for IncAfrica.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
