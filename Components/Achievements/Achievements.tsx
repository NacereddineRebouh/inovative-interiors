import Image from "next/image";
import React from "react";
import image1 from "@/public/images/ach/1.jpg";

type Props = {};

export default function Achievements({}: Props) {
  return (
    <div className="w-full bg-[#fafafa]">
      <div className="relative mx-auto mb-20 flex max-w-[2500px] flex-col justify-start gap-y-20 pt-28 lg:pt-32">
        <div className="absolute top-0 left-0 right-0 h-[600px] w-full bg-[#325e52]" />
        {/* bg-[#325e52] */}
        <div className="z-10 mx-auto max-w-[1000px] px-2 text-center text-3xl font-bold leading-snug text-stone-100 xs:text-4xl sm:px-14 md:!leading-normal lg:p-0 xl:text-5xl">
          The space within your walls is full of opportunity for individual
          style
        </div>
        {/* background */}
        <div className="relative mb-36 h-[560px] sm:mx-16 lg:mx-32">
          <Image src={image1} alt={""} fill className="object-cover" />
          <div className="absolute h-full w-full bg-stone-700/25 backdrop-blur-[2px]" />
          {/* numbers */}
          <div className="absolute -bottom-[25%] left-0 right-0 mx-auto flex w-[80%] flex-row justify-around bg-white px-14 py-20 text-center">
            <div className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0">
              <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                745+
              </div>
              <div className="text-base text-zinc-400 xs:text-lg md:text-xl xl:text-2xl">
                Project Finished
              </div>
            </div>
            <div className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0">
              <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                124K+
              </div>
              <div className="text-base text-zinc-400 xs:text-lg md:text-xl xl:text-2xl">
                Product sales
              </div>
            </div>
            <div className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0">
              <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                1.9K+
              </div>
              <div className="text-base text-zinc-400 xs:text-lg md:text-xl xl:text-2xl">
                Total products
              </div>
            </div>
            <div className="z-10 flex flex-col gap-y-4 lg:mt-5 xl:mt-0">
              <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                2 years+
              </div>
              <div className="text-base text-zinc-400 xs:text-lg md:text-xl xl:text-2xl">
                Helping people
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
