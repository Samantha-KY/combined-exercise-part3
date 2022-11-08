/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function AboutUs() {
    return (
        <section className="bg-regularBackground bg-regularSize">
            <div className="flex flex-col justify-center gap-10 px-10 py-20 md:px-20">
                <div className="flex justify-between md:text-3xl font-bold text-[#223240]">🌴🐻🇺🇸</div>
                <h1 className="font-fraunces font-bold text-7xl text-[#223240] leading-normal ">
                    Get Cozy
                </h1>
                <h2 className="text-[#C47D57] text-4xl font-fraunces font-bold leading-normal">
                    Design & digital marketing
                    <br />
                    in San Diego, California
                </h2>
                <p className="text-[#223240] font-fraunces text-xl leading-normal font-semibold md:text-2xl">
                    We’re an award-winning
                    <br className="md:hidden" /> design shop based in<br className="hidden md:block" /> South
                    <br className="md:hidden" /> Park, San Diego. We
                    <br className="md:hidden" />
                    efficiently combine the<br className="hidden md:block" /> best
                    <br className="md:hidden" /> parts of user experience
                    <br className="md:hidden" /> (UX) with creative<br className="hidden md:block" /> design
                    <br className="md:hidden" /> and execution to create
                    <br className="md:hidden" /> effective collateral<br className="hidden md:block" /> that
                    <br className="md:hidden" />
                    connects with the human
                    <br className="md:hidden" /> beings who interact<br className="hidden md:block" /> with
                    <br className="md:hidden" /> them. 🤯
                </p>
                <p className="text-[#223240] font-fraunces font-semibold text-xl leading-normal md:text-2xl">
                    No epic quests for<br className="md:hidden" /> inspiration. Just pragmatic<br /> collaboration and
                    efficient<br className="md:hidden" /> results from big-agency<br /> graduates with decades of<br className="md:hidden" />
                    experience.
                </p>
                <Button title="WHY WE DO WHAT WE DO" className="rounded-md bg-backgroundButton text-buttonText font-fraunces w-[20rem] h-[5rem] flex justify-center items-center whitespace-pre-line p-[3rem] md:w-[25rem]" />
                <div className="grid grid-cols-1 mx-auto items-center mt-20 md:grid-cols-2 md:gap-[7.5rem]">
                    <div className="flex flex-col justify-center gap-8">
                        <img src="icon1.webp" alt="icon1" className="h-40 w-40" />
                        <img src="icon2.webp" alt="icon2" className="h-40 w-40" />
                        <img src="icon3.webp" alt="icon3" className="h-40 w-40" />
                        <img src="icon4.webp" alt="icon4" className="h-40 w-40" />
                    </div>
                    <div className="flex flex-col justify-center gap-8">
                        <img src="icon5.svg" alt="icon1" className="h-40 w-40" />
                        <img src="icon6.webp" alt="icon2" className="h-40 w-40" />
                        <img src="icon7.webp" alt="icon3" className="h-40 w-40" />
                        <img src="icon8.webp" alt="icon4" className="h-40 w-40" />
                        <img src="icon9.webp" alt="icon4" className="h-20 w-40" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
