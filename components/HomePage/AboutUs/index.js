/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

function AboutUs() {
    return (
        <section className="bg-regularBackground bg-regularSize">
            <div className="flex flex-col justify-center gap-10 px-10 py-20">
                <div className="flex justify-between">🌴🐻🇺🇸</div>
                <h1 className="font-fraunces font-bold text-7xl text-[#223240] leading-normal">
                    Get Cozy
                </h1>
                <h2 className="text-[#C47D57] text-4xl font-fraunces font-bold leading-normal">
                    Design & digital marketing
                    <br />
                    in San Diego, California
                </h2>
                <p className="text-[#223240] font-fraunces font-semibold text-xl leading-normal">
                    We’re an award-winning
                    <br /> design shop based in South
                    <br /> Park, San Diego. We
                    <br />
                    efficiently combine the best
                    <br /> parts of user experience
                    <br /> (UX) with creative design
                    <br /> and execution to create
                    <br /> effective collateral that
                    <br />
                    connects with the human
                    <br /> beings who interact with
                    <br /> them. 🤯
                </p>
                <p className="text-[#223240] font-fraunces font-semibold text-xl leading-normal">
                    No epic quests for<br /> inspiration. Just pragmatic<br /> collaboration and
                    efficient<br /> results from big-agency<br /> graduates with decades of<br />
                    experience.
                </p>
                <Button title="WHY WE DO WHAT WE DO" />
                <div className="flex flex-col justify-center items-center mt-20">
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
