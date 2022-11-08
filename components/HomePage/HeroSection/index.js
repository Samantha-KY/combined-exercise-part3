/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function HeroSection() {
  return (
    <section>
      <div className="bg-secondaryBackground font-fraunces font-bold bg-imageBackground flex flex-col justify-center px-6 gap-[2.5rem] md:px-[3rem]">
        <h1 className="relative text-4xl bg-clip-text font-extrabold md:text-7xl md:mt-20">
          <span className="text-backgroundColor">
            {" "}
            Your design
            <br /> team for the
            <br /> cost of a<br className="md:hidden"/> salary.
          </span>
        </h1>
        <p className="font-fraunces font-bold text-stone-400 text-2xl md:text-4xl md:mt-2">
          Full-service design<br className="md:hidden"/> support that<br className="hidden md:block"/> growing<br className="md:hidden"/> B2B and non-profit<br />
          organizations need. Are<br className="md:hidden"/> you<br className="md:block hidden"/> strained because you<br className="md:hidden"/> should<br className="md:block hidden"/> have a design<br className="md:hidden "/>
          team but you<br className="hidden md:block"/> don{"'"}t?
        </p>
        <Button title="SEE HOW WE WORK & WHAT WE CAN DO" className = "rounded-md bg-backgroundButton text-buttonText font-fraunces w-[20rem] h-[5rem] flex justify-center items-center whitespace-pre-line p-[3rem] md:w-[34rem]"/>
        <div className="">
          <img src="heroImage.png" alt="hero" className="h-80 w-80 md:h-[35rem] md:w-[35rem]" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
