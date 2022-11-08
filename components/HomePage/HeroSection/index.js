/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function HeroSection() {
  return (
    <section>
      <div className="bg-secondaryBackground font-fraunces font-bold bg-imageBackground flex flex-col justify-center px-6 gap-[2.5rem]">
        <h1 className="relative text-4xl bg-clip-text font-extrabold">
          <span className="text-backgroundColor">
            {" "}
            Your design
            <br /> team for the
            <br /> cost of a<br /> salary.
          </span>
        </h1>
        <p className="font-fraunces font-bold text-stone-400 text-2xl">
          Full-service design<br /> support that growing<br /> B2B and non-profit<br />
          organizations need. Are<br /> you strained because you<br /> should have a design<br />
          team but you don{"'"}t?
        </p>
        <Button title="SEE HOW WE WORK & WHAT WE CAN DO" />
        <div className="">
          <img src="heroImage.png" alt="hero" className="h-80 w-80" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
