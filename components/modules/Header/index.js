/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {
  return (
    <section className="">
      <div className="bg-primaryBackground flex justify-center items-center gap-10 lg:justify-between lg:px-10">
        <img src="logo.svg" alt="logo" className="h-20 w-20 md:h-40 md:w-40" />
        <img
          src="menu.svg"
          alt="menu"
          className="h-20 w-5 font-merriweather font-bold md:h-40 md:w-10 lg:hidden"
        />
        <ul className="lg:flex justify-between gap-4 font-fraunces text-stone-300 hidden md:hidden text-3xl font-bold">
          <li>Get Cozy</li>
          <li>What we do</li>
          <li>Our work</li>
          <li>The blog</li>
          <li>Say hi</li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
