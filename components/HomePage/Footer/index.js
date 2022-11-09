/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Footer() {
    return (
        <section className='bg-[#E4DED5]'>
            <div className='flex flex-col justify-center items-center py-10 font-fraunces px-10 md:justify-between lg:px-6'>
                <div className='flex flex-col justify-center items-center md:flex-row md:gap-20 md:px-6 lg:justify-between'>
                    <div className='flex flex-col justify-center items-center md:flex-row'>
                        <img src='footerLogo.svg' alt='footer logo' className='h-20 w-20' />
                        <ul className='flex flex-col justify-center items-center text-[#B55730] text-lg font-bold gap-6 mt-5 md:flex-row'>
                            <li>About</li>
                            <li>Services</li>
                            <li>Work</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex justify-center items-center gap-2 mt-10'>
                            <img src="footerIcon.webp" alt="icon" className="h-5 w-5 " />
                            <p className='text-[#D90F54] text-sm md:text-[1rem]'>San Diego Digital Designers</p>
                        </div>
                        <div className='flex justify-center items-center gap-2' >
                            <div className='bg-[#1DA1F2] p-2 rounded-sm'>
                                <img src="twitter.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#2977C9] p-2 rounded-sm'>
                                <img src="linkedin.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#4267B2] p-2 rounded-sm'>
                                <img src="facebook.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#E4405F] p-2 rounded-sm'>
                                <img src="instagram.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#C4302B] p-2 rounded-sm'>
                                <img src="youtube.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#16313A] p-2 rounded-sm'>
                                <img src="utm.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                            <div className='bg-[#223240] p-2 rounded-sm'>
                                <img src="message.svg" alt="icon" className="h-[1rem] w-[1rem] md:h-[0.5rem]" />
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="my-7 w-[22rem] h-1 bg-backgroundColor rounded border md:w-full md:px-6"></hr>
                <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:gap-20'>

                    <div className='flex flex-col justify-center items-center md:justify-between '>
                        <div className='flex justify-center items-center gap-4 md:gap-6'>
                            <div className='flex flex-col items-center gap-4'>
                                <img src='footer1.svg' alt='footer' className='w-[20rem] h-12' />
                                <p className='text-[#3E565C] font-fraunces font-bold text-base'>BBB rating: A+</p>
                            </div>
                            <img src='footer2.png' alt='footer' className='h-[4rem] w-[20rem] -mt-3 md:w-[10rem]' />
                        </div>
                    </div>

                    <div>
                        <small className='font-bold mt-10 text-[#687076]'>Made with ❤️ in beautiful, sunny San Diego. ©2021 </small>
                        <div className='flex justify-center items-center'>
                            <ul className='text-[#B55730] text-sm font-bold gap-6 flex mt-10'>
                                <li>Privacy</li>
                                <li>Photo Credit</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer