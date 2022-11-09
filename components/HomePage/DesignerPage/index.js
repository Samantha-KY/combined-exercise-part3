/* eslint-disable @next/next/no-img-element */
import React from "react";

function DesignerPage() {
  return (
    <section className="relative font-fraunces w-full h-[30rem]">
      <video
        autoPlay={true}
        loop={true}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="bgVideo.mp4" />
      </video>
      <div className="text-white absolute top-0 right-0 left-0 bottom-0 bg-black/60 flex flex-col gap-10 md:px-20 lg:flex-row lg:justify-center lg:items-center">
        <div className="flex flex-col justify-center items-center mt-[2rem]">
          <img src="videoIcon.svg" alt="icon" className="h-[3rem] w-[20rem] md:h-[6rem] md:w-[25rem]" />
        </div>
        <div className="flex flex-col gap-8">
        <p className="text-4xl text-white px-10 italic font-bold">
          Psst… <br /> are you a<br className="md:hidden"/> designer?{" "}
        </p>
        <p className="text-sm text-stone-300 px-10 -mt-[1rem] font-semibold md:text-lg lg:hidden">
          Consider joining our<span className="text-[#D90F54]"> San Diego Design<br/> Designers</span> group. More than 700<br className="md:hidden"/>
          people, we meet<br className="hidden md:block"/> online via Slack and in<br className="md:hidden"/> person at social events<br className="hidden md:block"/> around
          the city.<br className="md:hidden"/> It’s a great opportunity to share<br className="hidden md:block"/> ideas,<br className="md:hidden"/> get inspired, find
          support, and celebrate<br/> great design.
        </p>

        <p className="text-sm text-stone-300 px-10 -mt-[1rem] font-semibold md:text-lg hidden lg:block md:hidden">
          Consider joining our<span className="text-[#D90F54]"> San Diego Design Designers</span> group. More than 700
          people,<br/> we meet online via Slack and in person at social events around
          the city. It’s a great opportunity to share ideas, get inspired, find
          support, and celebrate great design.
        </p>
        </div>
      </div>
      
    </section>
  );
}

export default DesignerPage;
