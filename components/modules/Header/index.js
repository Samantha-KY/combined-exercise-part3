/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
          <Link href="/getCozy" className="hover:text-backgroundColor hover:-translate-y-2 transition-all duration-300 ease-in-out">Get Cozy</Link>
          <Link href='/about' className="hover:text-backgroundColor hover:-translate-y-2 transition-all duration-300 ease-in-out">What we do</Link>
          <Link href="/work" className="hover:text-backgroundColor hover:-translate-y-2 transition-all duration-300 ease-in-out">Our work</Link>
          <Link href="/blog" className="hover:text-backgroundColor hover:-translate-y-2 transition-all duration-300 ease-in-out">The blog</Link>
          <Link href="/greeting" className="hover:text-backgroundColor hover:-translate-y-2 transition-all duration-300 ease-in-out">Say hi</Link>
        </ul>
      </div>
    </section>
  );
}

export default Header;
