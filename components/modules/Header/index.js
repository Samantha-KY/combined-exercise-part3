/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {
  return (
    <section className="">
      <div className="bg-primaryBackground flex justify-center items-center gap-10 lg:justify-between">
        <img src="logo.svg" alt="logo" className="h-20 w-20" />
        <img
          src="menu.svg"
          alt="menu"
          className="h-20 w-5 font-merriweather font-bold"
        />
      </div>
    </section>
  );
}

export default Header;
