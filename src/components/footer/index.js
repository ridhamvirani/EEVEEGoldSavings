"use client"
import React from 'react'
import SocialMediaButtons from '../socialMediaIcons'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const Index = () => {
    return (
        <div className='bg-[#272727] h-auto rounded-t-[20px] relative overflow-x-hidden' >
            <div>
                <Image src="/bg-1.png" alt="" height={380} width={380} className="absolute right-0 -rotate-45 " style={{ filter: "blur(3px)" }} />
                <Image src="/bg-1.png" alt="" height={300} width={300} className="absolute left-0 bottom-2 -rotate-180" style={{ filter: "blur(3px)" }} />
            </div>
            <div className='z-10 w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-10 md:gap-0 items-center py-10 md:py-20'>
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <h1 className="md:w-1/2 text-center md:text-start text-[28px] md:text-[40px] font-semibold text-[--white] ">Unlock Your Future Digital Growth with EEVEE</h1>
                </Fade>
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <Link href="/plans" className='bg-white rounded-full px-12 py-3 md:px-16 md:py-4 text-black hover:text-[--white] cursor-pointer text-lg font-medium tracking-wide hover:bg-[--secondary] z-10 whitespace-nowrap'>Start Creating</Link>
                </Fade>
            </div>
            {/* Container for header section */}
            <div className='flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto py-6 border-b border-[--secondary]'>
                {/* Logo */}
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <Link href="/" className='font-medium text-2xl md:text-3xl text-[--primary] mb-4 '>EEVEE</Link>
                </Fade>
                {/* Navigation Menu */}
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <ul className='z-10 cursor-pointer flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 md:text-lg font-medium tracking-wide text-[--white]'>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Get Help</Link></li>
                    </ul>
                </Fade>
                {/* Social Media Buttons */}
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <div className='mt-4 md:mt-0'>
                        <SocialMediaButtons />
                    </div>
                </Fade>
            </div>

            {/* Footer Section */}
            <div className='w-[90%] py-10 mx-auto tracking-wide flex flex-col md:flex-row md:text-lg justify-between items-center'>
                {/* Copyright Information */}
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <p className='text-[--gray] font-medium text-center md:text-left mb-4 md:mb-0'>
                        Copyright © {new Date().getFullYear()}. All rights reserved by{' '}
                        <span className='font-semibold cursor-pointer'>EEVEE</span>
                    </p>
                </Fade>
                {/* Terms and Policies */}
                <Fade direction='up' triggerOnce cascade delay={300}>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>
                        <Link href="https://eeveegoldsavings.com/terms-condition" target="_blank" rel="noopener noreferrer" className='text-[--gray] font-medium'>Terms of Use</Link>
                        <Link href="https://eeveegoldsavings.com/privacy-policy" target="_blank" rel="noopener noreferrer" className='text-[--gray] font-medium'>Privacy Policy</Link>
                        <Link href="https://eeveegoldsavings.com/refund-policy" target="_blank" rel="noopener noreferrer" className='text-[--gray] font-medium'>Refund Policy</Link>
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Index