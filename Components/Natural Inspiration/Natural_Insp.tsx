"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Swiper_component from "./Swiper_component";
import star from "@/public/images/star.png";
import Image from "next/image";

import cssMod from "@/styles/swiper.module.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/globals.css";
type Props = {};

export default function Natural_Insp({}: Props) {
  return (
    <div className="w-full bg-[#fafafa] pb-20 pt-36 lg:pt-52">
      <div className="relative mx-auto max-w-[2500px]">
        {/* //background */}
        <motion.figure
          viewport={{ once: true }}
          initial={{ rotate: 0, scale: 0, opacity: 0.05 }}
          whileInView={{ rotate: 300, scale: 1, opacity: 0.1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 35,
            stiffness: 50,
          }}
          className="absolute -top-1/2 -right-[20%] hidden h-[800px] w-[800px] -hue-rotate-[10deg] lg:flex"
        >
          <Image
            src={star}
            height={800}
            width={800}
            style={{ aspectRatio: "auto" }}
            alt={"background_star"}
            className="h-full w-full"
          />
        </motion.figure>
        <div className="flex flex-col items-center gap-y-14 lg:mr-16 lg:flex-row lg:gap-x-24 xl:mr-28">
          <motion.figure
            viewport={{ once: true }}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="relative w-full lg:w-1/2"
          >
            <Swiper_component />
          </motion.figure>
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="order-first flex h-full flex-col items-center gap-y-12 px-4 text-center lg:order-1 lg:w-1/2 lg:items-start lg:justify-start lg:p-0 lg:text-start"
          >
            <h1 className="px-2 text-4xl font-bold leading-snug text-stone-800 xs:text-5xl sm:px-14 sm:text-6xl md:!leading-normal lg:p-0 xl:text-6xl 3xl:text-7xl">
              Natural inspiration in every room
            </h1>
            <p className="max-w-lg text-[13px] leading-5 text-stone-400 xs:text-base xs:leading-9 md:text-lg">
              Experience the elegance of nature in your living space with our
              natural-inspired interior design services.
            </p>
            <div className="flex w-full flex-row justify-around lg:justify-start lg:gap-x-14">
              <Link
                href={"#"}
                className="flex w-32 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base"
              >
                Search now
              </Link>

              <Link
                href={"#"}
                className="flex w-32 cursor-pointer select-none items-center justify-center border-[2px] border-emerald-800/20 bg-transparent py-3 text-sm font-normal tracking-wide text-emerald-800 transition-all duration-100 hover:bg-emerald-800/20 active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base"
              >
                See our portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
