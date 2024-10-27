
"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="bg-transparent">
      <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3
      sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col
           items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              <img src="/horse_phone.jpg" className="w-full"/>
            </div>
            <h1 className="relative w-fit tracking-tighttext-balance
            mt-16 font-bold !leading-tight text-black text-5xl md:text-6xl lg:text-7xl">
              Your Image on a 
              <span className="bg-[#1d6042] px-2 text-white rounded-2xl">Custom</span>
              Phone Case
            </h1>
            <p className="mt-8 text-black text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Capture your favourite memories with your own,{' '}
              <span className="font-semibold">one-of-one</span> 
              phone case. ExoCase helps you safeguard and represent your most precious memories, not just you phone case.
            </p>
            <ul className="mt-8 text-black space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1-5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-[#1d6042]"/>
                  High-quality, durable material
                </li>
                <li className="flex gap-1-5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-[#1d6042]"/>
                  5 year print guarantee
                </li>
                <li className="flex gap-1-5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-[#1d6042]"/>
                  Modern iPhone/Samsung Supported
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
                <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
                <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
                <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
                <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
                <img className="inline-block h-10 w-10 object-cover  rounded-full ring-2 ring-[#ffffff]"
                src="/horse_phone.jpg"
                alt="user image"/>
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex">
                  <Star className="top-0 w-[8px] text-[#FFFF] fill-[#1d6042]" />
                  <Star className="top-0 w-[12px] text-[#FFFF] fill-[#1d6042]" />
                  <Star className="top-0 w-[16px] text-[#FFFF] fill-[#1d6042]" />
                  <Star className="top-0 w-[20px] text-[#FFFF] fill-[#1d6042]" />
                  <Star className="top-0 w-[24px] text-[#FFFF] fill-[#1d6042]" />
                </div>
                <p className="text-black/50">
                    <span> 1.250 happy customers </span> 
                </p>
              </div>
            </div>
           </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0
        mt-32 lg:mx-0 lg:mt-20 h-fit">
          <div className="relative md:max-w-xl">
            <img src="/your-image.png" 
            className="absolute w-24 lg:w-52 left-56 -top-20 select-none 
             sm:block lg:block xl:block" />
            <img src="/line.png" 
            className="absolute w-16 -left-6 -bottom-10 select-none" />
           <motion.div className="container"
           whileHover={{ scale: 1.1}}
           whileTap={{ scale: 0.9, borderRadius: "100%" }}>
           <Phone className="w-64 rounded-3xl" imgSrc="/testimonials/1.jpg" />
          </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
      </section>
    </div>
  );
}
