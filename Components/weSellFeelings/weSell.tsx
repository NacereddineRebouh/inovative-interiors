"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Swiper_component from "./Swiper_component";

type Props = {};

export default function WeSell({}: Props) {
  return (
    <div className="w-full bg-[#fafafa]">
      <div className="relative mx-auto max-w-[2500px] py-6 xl:py-28">
        <figure className="hidden xl:flex">
          <Swiper_component />
        </figure>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 15,
            stiffness: 50,
          }}
          className="flex h-full flex-col items-center justify-center gap-y-12 px-4 py-12 text-center lg:p-0 xl:hidden xl:items-start xl:text-start"
        >
          <h1 className="max-w-3xl px-2 text-4xl font-bold !leading-relaxed text-stone-800 xs:text-6xl sm:px-14 lg:p-0 xl:text-7xl">
            We don&apos;t sell furniture, we sell feelings
          </h1>
          <p className="max-w-lg text-[13px] leading-5 text-stone-400 xs:text-base xs:leading-9 lg:text-lg">
            Creating beautiful spaces that evoke emotion and enhance your daily
            life
          </p>
          <div className="flex flex-row items-center justify-around lg:justify-start lg:gap-x-14 xl:w-full">
            <ul className="grid w-fit grid-cols-1 gap-x-5 gap-y-8 truncate xs:grid-cols-2 sm:gap-x-12 md:gap-x-24 xl:w-full xl:gap-x-0">
              {/* ------------------ */}
              <li className="flex flex-row items-center gap-x-2">
                <BsCheckCircleFill className="h-5 w-5 fill-[#ffa63a] lg:h-6 lg:w-6" />
                <p className="text-base font-bold text-stone-800 xl:text-lg">
                  Flexible time
                </p>
              </li>
              {/* ------------------ */}
              <li className="flex flex-row items-center  gap-x-2">
                <BsCheckCircleFill className="h-5 w-5 fill-[#ffa63a] lg:h-6 lg:w-6" />
                <p className="text-base font-bold text-stone-800 xl:text-lg">
                  Community support
                </p>
              </li>
              {/* ------------------ */}
              <li className="flex flex-row items-center  gap-x-2">
                <BsCheckCircleFill className="h-5 w-5 fill-[#ffa63a] lg:h-6 lg:w-6" />
                <p className="text-base font-bold text-stone-800 xl:text-lg">
                  Globally recognized
                </p>
              </li>
              {/* ------------------ */}
              <li className="flex flex-row items-center  gap-x-2">
                <BsCheckCircleFill className="h-5 w-5 fill-[#ffa63a] lg:h-6 lg:w-6" />
                <p className="text-base font-bold text-stone-800 xl:text-lg">
                  Affordable cost
                </p>
              </li>
            </ul>
          </div>
          <Link
            href={"#"}
            className="flex w-32 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base"
          >
            Discover more
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
