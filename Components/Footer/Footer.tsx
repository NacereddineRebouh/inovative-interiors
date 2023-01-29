"use client";
import React from "react";
import logo from "@/public/logos/logo3.png";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import star from "@/public/images/star.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full overflow-hidden bg-[#325e52]">
      <div className="relative mx-auto flex max-w-[2500px] flex-col gap-y-20 divide-y-2 divide-emerald-800/25 py-12 px-4 pt-24 xs:px-16 sm:gap-y-36 sm:py-20 sm:pt-36 lg:px-20 xl:px-28">
        {/* //background */}
        <Image
          src={star}
          height={800}
          width={800}
          style={{ aspectRatio: "auto" }}
          alt={"background_star"}
          className="absolute -top-1/4 -left-[20%] mx-auto hidden opacity-10 -hue-rotate-[10deg] lg:flex"
        />
        <div className="flex flex-col justify-center gap-y-6 text-center md:flex-row md:justify-between md:text-start xl:gap-x-32">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="max-w-[730px] text-5xl font-semibold text-stone-100 sm:text-6xl md:w-1/2"
          >
            Great innovations starts here
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="flex flex-col justify-center gap-y-14 text-base !leading-relaxed text-stone-100/50 xs:px-4 md:w-1/2 md:justify-start lg:px-12"
          >
            <p>
              At our interior design agency, we believe that great innovations
              start with a vision and a passion for creating beautiful and
              functional spaces. From residential to commercial projects, our
              team of experts works closely with our clients to bring their
              unique style and vision to life.
            </p>
            <div className="flex flex-row justify-between sm:justify-center sm:gap-x-12 md:justify-start">
              <Link
                href={"#"}
                className="flex w-32 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base"
              >
                Contact us
              </Link>

              <Link
                href={"#"}
                className="flex w-32 cursor-pointer select-none items-center justify-center border-[2px] border-emerald-300/20 bg-transparent py-3 text-sm font-normal tracking-wide text-stone-100 transition-all duration-100 hover:bg-emerald-100/20 active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base"
              >
                Our portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 30,
            stiffness: 50,
          }}
          className="flex origin-center flex-col items-center justify-center gap-y-10 py-6 md:gap-y-16"
        >
          <Image src={logo} alt={""} className="h-16 object-contain" />
          <nav className="flex flex-row gap-x-5 truncate text-base xs:gap-x-12 sm:gap-x-[74px]">
            <Link href={"/"} className="text-stone-100">
              Home
            </Link>
            <Link href={"/"} className="text-stone-100">
              Services
            </Link>
            <Link href={"/"} className="text-stone-100">
              Blog
            </Link>
            <Link href={"/"} className="text-stone-100">
              About us
            </Link>
          </nav>

          <div className="flex min-w-0 flex-1 flex-row gap-x-4 xs:gap-x-6 sm:gap-x-12">
            <div className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50">
              <EnvelopeIcon className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></EnvelopeIcon>
              <span className="transition-color text-xs opacity-0 duration-200 group-hover:opacity-100 xs:text-sm">
                Email
              </span>
            </div>

            <div className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50">
              <MapPinIcon className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></MapPinIcon>
              <span className="transition-color text-xs opacity-0 duration-200 group-hover:opacity-100 xs:text-sm">
                Location
              </span>
            </div>
            <div className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50">
              <PhoneIcon className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></PhoneIcon>
              <span className="transition-color truncate text-xs opacity-0 duration-200 group-hover:opacity-100 xs:text-sm">
                Phone number
              </span>
            </div>
          </div>
          <p className="text-sm text-stone-100/50">@Copyright 2023 - ChatGPT</p>
        </motion.div>
      </div>
    </div>
  );
}
