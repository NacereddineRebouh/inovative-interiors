"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Pagination, Navigation } from "swiper";
import { type Swiper as SwiperRef } from "swiper";
import { BsCheckCircleFill } from "react-icons/bs";

import image1 from "@/public/images/natural/10.jpg";
import image2 from "@/public/images/natural/8.jpg";
import image4 from "@/public/images/natural/7.jpg";
import image5 from "@/public/images/natural/9.jpg";
import image6 from "@/public/images/natural/4.jpg";
import image7 from "@/public/images/natural/3.jpg";

import cssMod from "@/styles/swiper2.module.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.css";

import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
type Props = {};

export default function Swiper_component({}: Props) {
  const Cards: StaticImageData[] = [
    image1,
    image2,
    image4,
    image5,
    image6,
    image7,
  ];
  const swiperRef = useRef() as any;
  return (
    <>
      <Swiper
        dir="rtl"
        // slidesPerView={2.3}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination, Navigation]}
        className={`${cssMod["swiper"]}`}
        navigation={false}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1100: {
            slidesPerView: 2.3,
          },
        }}
        rewind={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide key={1} className={`${cssMod["swiper-slide"]} `}>
          <Image
            src={image2}
            // style={{ aspectRatio: 1 / 1 }}
            alt={"interior_images"}
            width={1000}
            height={1000}
            className="aspect-[9/10] flex-none object-cover"
          />
        </SwiperSlide>
        <SwiperSlide key={3} className={`${cssMod["swiper-slide"]}`}>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.1,
            }}
            className="flex h-full flex-col items-start gap-y-12 px-4 py-12 text-center lg:justify-center lg:p-0 lg:text-start"
            style={{ direction: "ltr" }}
          >
            <h1 className="px-2 text-4xl font-bold leading-snug text-stone-800 sm:px-14 sm:text-5xl md:!leading-normal lg:p-0 lg:text-6xl xl:text-7xl">
              We don&apos;t sell furniture, we sell feelings
            </h1>
            <p className="max-w-lg text-[13px] leading-5 text-stone-400 xs:leading-9 sm:text-base lg:text-lg">
              Creating beautiful spaces that evoke emotion and enhance your
              daily life
            </p>
            <div className="flex w-full flex-row justify-around lg:justify-start lg:gap-x-14">
              <ul className="grid w-full grid-cols-2 gap-y-8">
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
            <button className="flex w-32 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 xs:w-40 sm:w-48 sm:py-4 sm:text-base">
              Discover more
            </button>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide key={2} className={`${cssMod["swiper-slide"]} `}>
          <Image
            src={image4}
            // style={{ aspectRatio: 1 / 1 }}
            alt={"interior_images"}
            width={1000}
            height={1000}
            className="aspect-[9/10] flex-none object-cover"
          />
        </SwiperSlide>

        <SwiperSlide key={4} className={`${cssMod["swiper-slide"]} `}>
          <Image
            src={image6}
            // style={{ aspectRatio: 1 / 1 }}
            alt={"interior_images"}
            width={1000}
            height={1000}
            className="aspect-[9/10] flex-none object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 bottom-0 left-20 z-10 flex items-center">
        <button
          aria-label="nextSlide"
          onClick={() => swiperRef.current?.slideNext()}
          className={
            "flex aspect-square h-16 items-center justify-center rounded-full bg-[#ffa63a] transition-all duration-100 active:scale-95"
          }
        >
          <ArrowRightIcon className="h-7 w-7 text-stone-800" />
        </button>
      </div>
    </>
  );
}
