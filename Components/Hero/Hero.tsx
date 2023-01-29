"use client";
import Image from "next/image";
import React from "react";
// import image1 from "@/public/images/Hero/4.jpg";
// import image1 from "@/public/images/Hero/4.jpg";
import image1 from "@/public/images/Hero/5.jpg";
import image2 from "@/public/images/Hero/2.jpg";
import image3 from "@/public/images/Hero/3.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full bg-[#325e52]">
      <div className="relative mx-auto max-w-[2500px] pt-36 lg:pt-40">
        <div className="flex flex-row items-start lg:ml-16 xl:ml-28">
          {/* CTA and headline */}
          <div className="absolute z-10 flex w-full flex-col items-center justify-center gap-y-7 pt-20 text-center sm:gap-y-14 md:gap-y-24 md:pt-28 lg:relative lg:w-1/2 lg:justify-start lg:gap-y-7 lg:pt-8 lg:pr-10 lg:text-start xl:pr-24 2xl:pr-40">
            <motion.h1
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 30,
                stiffness: 80,
                delay: 0.3,
              }}
              className="z-10 hidden text-4xl font-bold leading-snug text-stone-700 xs:text-7xl  md:!leading-normal lg:flex lg:text-6xl lg:text-stone-100 xl:text-7xl"
            >
              Create a home that defines <br />
              who you are
            </motion.h1>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 30,
                stiffness: 80,
                delay: 0.3,
              }}
              className="z-10 mb-4 hidden px-4 text-[13px] leading-5 text-stone-600 xs:text-base xs:leading-9 sm:px-24 md:text-lg lg:flex lg:pl-0 lg:pr-20 lg:text-stone-100/50"
            >
              Our team of experienced designers will help you create beautiful
              and functional spaces that reflect your unique style and needs.
              Browse our portfolio and Get started
            </motion.p>

            {/* mobile */}
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 30,
                stiffness: 80,
                delay: 0.3,
              }}
              className="mb-14 flex flex-col gap-y-7 sm:gap-y-14 md:mb-20 md:gap-y-24 lg:hidden lg:gap-y-7"
            >
              <h1 className="z-10 max-w-[900px] text-4xl font-bold leading-snug text-stone-700 xs:text-5xl sm:text-7xl md:!leading-normal lg:text-6xl lg:text-stone-100 xl:text-7xl">
                Create a home that defines <br />
                who you are
              </h1>
              <p className="z-10 mb-4 px-4 text-[13px] leading-5 text-stone-600 xs:text-base xs:leading-9 sm:px-24 md:text-lg lg:pl-0 lg:pr-20 lg:text-stone-100/50">
                Our team of experienced designers will help you create beautiful
                and functional spaces that reflect your unique style and needs.
                Browse our portfolio and Get started
              </p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 30,
                stiffness: 80,
                delay: 0.3,
              }}
              className="z-10 mb-20 flex w-full flex-col items-center gap-y-2 sm:flex-row sm:justify-center sm:gap-0 sm:gap-x-12 lg:justify-start 3xl:mb-32"
            >
              <Link
                href={"#"}
                className="flex w-40 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 sm:w-48 sm:py-4 sm:text-base"
              >
                Get started
              </Link>

              <Link
                href={"#"}
                className="flex w-40 cursor-pointer select-none items-center justify-center bg-emerald-800 py-3 text-sm font-normal tracking-wide text-zinc-100 transition-all duration-100 hover:bg-emerald-700 active:scale-95 sm:w-48 sm:py-4 sm:text-base lg:border-[2px] lg:border-emerald-50/10 lg:bg-[#325e52] lg:hover:bg-emerald-50/10"
              >
                See our portfolio
              </Link>
            </motion.div>

            <div className="relative z-10 hidden h-[300px] w-full flex-row items-center justify-around lg:flex lg:h-auto lg:items-start lg:justify-between">
              <motion.div
                viewport={{ once: true }}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 25,
                  stiffness: 50,
                  delay: 0.3,
                }}
                className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0"
              >
                <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  745+
                </p>
                <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  Project Finished
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                  delay: 0.3,
                }}
                className="z-10 flex flex-col gap-y-4 lg:mt-16 4xl:mt-28"
              >
                <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  50+
                </p>
                <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  professional Designers
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                  delay: 0.3,
                }}
                className="z-10 flex flex-col gap-y-4 lg:mt-32 4xl:mt-56"
              >
                <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  150+
                </p>
                <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  Ongoing Projects
                </p>
              </motion.div>
              <div className="absolute bottom-0 top-0 left-0 right-0 z-0 my-auto flex h-[150px] w-full scale-105 bg-[#fafafa]  lg:hidden"></div>
            </div>
          </div>

          {/* Banner */}
          <div className="z-0 flex h-full w-full flex-col lg:z-10 lg:w-1/2 lg:gap-y-5">
            <div className="relative h-[65%]">
              <motion.figure
                viewport={{ once: true }}
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                  delay: 0.3,
                }}
                className={"hidden lg:flex"}
              >
                <Image
                  src={image1}
                  alt={""}
                  priority
                  className={
                    "aspect-[3/4] min-h-[800px] object-cover md:w-full lg:aspect-[2/4] lg:max-h-[700px]"
                  }
                />
              </motion.figure>
              <Image
                src={image1}
                alt={""}
                priority
                className={
                  "flex aspect-[3/4] min-h-[800px] object-cover md:w-full lg:hidden lg:aspect-[2/4] lg:max-h-[700px]"
                }
              />
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.9,
                  type: "spring",
                  damping: 30,
                  stiffness: 50,
                  delay: 0.3,
                }}
                className="absolute top-0 left-0 right-0 flex aspect-[3/4] h-full min-h-[800px] w-full bg-orange-50/40 object-cover backdrop-blur-[2px] md:w-full lg:hidden lg:aspect-[2/4] lg:max-h-[700px]"
              ></motion.div>

              {/* mobile */}
              <div className="absolute bottom-0 z-10 flex w-full flex-row items-center justify-around text-center lg:hidden lg:h-auto lg:items-start lg:justify-between">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    damping: 15,
                    stiffness: 50,
                  }}
                  className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0"
                >
                  <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                    745+
                  </p>
                  <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                    Project Finished
                  </p>
                </motion.div>

                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    damping: 15,
                    stiffness: 50,
                  }}
                  className="z-10 flex flex-col gap-y-4 lg:mt-16 4xl:mt-28"
                >
                  <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                    50+
                  </p>
                  <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                    professional Designers
                  </p>
                </motion.div>

                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    damping: 15,
                    stiffness: 50,
                  }}
                  className="z-10 flex flex-col gap-y-4 lg:mt-32 4xl:mt-56"
                >
                  <p className="text-2xl font-semibold text-orange-400 md:text-4xl">
                    150+
                  </p>
                  <p className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                    Ongoing Projects
                  </p>
                </motion.div>
                <div className="absolute bottom-0 top-0 left-0 right-0 z-0 my-auto flex h-[200px] w-full scale-105 bg-[#fafafa] lg:hidden"></div>
              </div>
            </div>
            <motion.figure
              viewport={{ once: true }}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 15,
                stiffness: 50,
                delay: 0.3,
              }}
              className="relative hidden h-[35%] flex-row gap-x-5 lg:flex"
            >
              <Image
                src={image2}
                alt={""}
                className={"aspect-[1/2] h-[270px] object-cover"}
              />
              <Image
                src={image3}
                alt={""}
                className={"aspect-[1/2] h-[270px] object-cover"}
              />
            </motion.figure>
          </div>
          <div className="absolute -bottom-72 left-0 right-0 z-0 hidden h-[570px] w-full rotate-12 skew-x-12 scale-105 bg-[#fafafa] lg:flex xl:-bottom-80 xl:h-[650px] 3xl:-bottom-96"></div>
        </div>
      </div>
    </div>
  );
}
