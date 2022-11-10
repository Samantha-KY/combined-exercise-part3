import React from "react";
import Image from "next/image";

function ClientSection() {
    return (
        <section className="bg-[#E4DED5] font-fraunces">
            <div className="flex flex-col justify-center items-center px-6 py-20 lg:px-60">
                <h1 className="text-[#223240] text-base font-semibold md:text-6xl">
                    ❤️ from our clients
                </h1>
                <hr className="my-8 w-10 h-1 bg-backgroundColor rounded border-0 "></hr>
                <div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 md:grid-rows-2 mx-auto relative">
                    <div className="bg-[#E4DED5] h-20 w-20 rounded-full absolute m-auto md:flex justify-center items-center inset-0 hidden ">
                        <div className="absolute -inset-4 rounded-full border-2 border-[#E4DED5]" />
                        <div className="absolute -inset-8 rounded-full border-2 border-[#E4DED5] opacity-70" />
                        <Image src="/messageIcon.svg" alt="message" width={32} height={32} />
                    </div>
                    <div className="bg-[#223240] shadow-2xl shadow-[#223240] bg-fluffyBackground bg-fluffysize text-right flex flex-col gap-4 py-20 pr-10 pl-16 rounded-tl-8/10 rounded-tr-8/10 rounded-bl-1/1 md:mt-auto">
                        <Image
                            src="/imageclient1.webp"
                            alt="image 1"
                            width={80}
                            height={80}
                            className="border-4 border-white rounded-3xl mx-auto"
                        />
                        <h3 className="text-backgroundColor text-xl font-bold mt-6">
                            “One of the top design
                            <br /> professionals…”
                        </h3>
                        <p className="text-stone-300/90 text-xl font-normal">
                            I connect with hundreds of talented folks on a regular basis, and
                            I can say with complete confidence that Lee is one of the best UX
                            designers in Aquent/Vitamin T{"'"}s global network.
                        </p>
                        <div>
                            <p className="text-stone-300/90 text-[12px] font-black uppercase tracking-[4px] mt-1">
                                Susie Pollasky
                            </p>
                            <small className="text-stone-400 opacity-[70%] font-bold text-[12px]">
                                Now: Leadership Recruiting @ Product Design
                                <br />
                                at Facebook{" "}
                            </small>
                        </div>
                    </div>

                    <div className="bg-[#2E464D] shadow-2xl shadow-[#2E464D] bg-fluffyBackground bg-fluffysize text-left flex flex-col gap-4 py-20 pr-10 pl-16 rounded-tl-1/1 rounded-tr-1/1 rounded-br-5/10">
                        <Image
                            src="/imageclient2.webp"
                            alt="image 1"
                            width={80}
                            height={80}
                            className="border-4 border-white rounded-3xl mx-auto"
                        />
                        <h3 className="text-backgroundColor text-xl font-bold mt-6">
                            “They’re a very well-
                            <br />
                            rounded organization…”
                        </h3>
                        <p className="text-stone-300/90 text-xl font-bold">
                            Cost per conversion and all of those metrics have dropped
                            significantly. We used to pay an average of $100 per lead that
                            converts… now we have that down to about $20. Sessions and
                            contacts have also gone up astronomically, at least threefold.
                            Organic search and social media referrals have all continued to
                            skyrocket. We’re really pleased.
                        </p>
                        <div>
                            <p className="text-stone-300/90 text-[12px] font-black uppercase tracking-[4px] mt-1">
                                Martin Spritzer
                            </p>
                            <small className="text-stone-400 opacity-[70%] font-bold text-[12px]">
                                General Manager @ iQuoteXpress
                            </small>
                        </div>
                    </div>

                    <div className="bg-[#C47D57] shadow-2xl shadow-[#C47D57] bg-fluffyBackground bg-fluffysize text-right flex flex-col gap-4 py-20 pr-10 pl-16 rounded-tl-1/1 rounded-br-8/10 rounded-bl-8/10 md:mb-auto">
                        <Image
                            src="/imageclient3.webp"
                            alt="image 1"
                            width={80}
                            height={80}
                            className="border-4 border-white rounded-3xl ml-auto"
                        />
                        <h3 className="text-stone-300/90 text-xl font-extrabold mt-6">
                            “They{"'"}re just good people.”
                        </h3>
                        <p className="text-stone-300/90 text-xl font-normal">
                            They were a pleasure to work with and I{"'"}m really happy with
                            the results. They pretty much nailed it.
                        </p>
                        <div>
                            <p className="text-stone-300/90 text-[12px] font-black uppercase tracking-[4px] mt-1">
                                Eric weiss
                            </p>
                            <small className="text-stone-300/90 opacity-[70%] font-bold text-[12px]">
                                Founder @ Full Cycle Product Development
                            </small>
                        </div>
                    </div>

                    <div className="bg-backgroundButton shadow-2xl shadow-backgroundButton bg-fluffyBackground bg-fluffysize text-left flex flex-col gap-4 py-20 pr-10 pl-16 rounded-tr-1/1 rounded-br-8/10 rounded-bl-8/10">
                        <Image
                            src="/imageclient4.webp"
                            alt="image 1"
                            width={80}
                            height={80}
                            className="border-4 border-white rounded-3xl mr-auto"
                        />
                        <h3 className="text-stone-300/90 text-xl font-extrabold mt-6">
                            “The project was successful”
                        </h3>
                        <p className="text-stone-300/90 text-xl font-normal">
                            They strive to come up with good design, and they focus on all the
                            right things. The quality of their work is high, and all the
                            deliverables are very well-organized and professional.
                        </p>
                        <div>
                            <p className="text-stone-300/90 text-[12px] font-black uppercase tracking-[4px] mt-1">
                                Michael Weisfeld
                            </p>
                            <small className="text-stone-300/90 opacity-[70%] font-bold text-[12px]">
                                Director of Digital Marketing @ National Funding
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientSection;
