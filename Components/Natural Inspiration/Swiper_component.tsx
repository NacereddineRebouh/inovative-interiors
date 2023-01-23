"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Pagination, Navigation } from "swiper";
import { type Swiper as SwiperRef } from "swiper";

import image1 from "../../public/images/natural/10.jpg";
import image2 from "../../public/images/natural/8.jpg";
import image4 from "../../public/images/natural/7.jpg";
import image5 from "../../public/images/natural/9.jpg";
import image6 from "../../public/images/natural/4.jpg";
import image7 from "../../public/images/natural/3.jpg";

import cssMod from "@/styles/swiper.module.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.css";

import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
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
        slidesPerView={1.2}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination, Navigation]}
        className={`${cssMod["swiper"]}`}
        navigation={false}
        rewind={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {Cards.map((value: StaticImageData, i: number) => {
          return (
            <SwiperSlide key={i} className={`${cssMod["swiper-slide"]} `}>
              <Image
                src={value}
                // style={{ aspectRatio: 1 / 1 }}
                alt={""}
                width={1000}
                height={1000}
                className="aspect-[9/10] flex-none object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute top-0 bottom-0 left-20 z-10 flex items-center">
        <button
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
