import React from "react";
import Swiper_component from "./Swiper_component";

type Props = {};

export default function Natural_Insp({}: Props) {
  return (
    <div className="w-full bg-[#fafafa]">
      <div className="relative mx-auto max-w-[2500px] py-20">
        <div className="flex flex-row items-center gap-x-24 lg:mr-16 xl:mr-28">
          <div className="min-h-[600px] w-1/2">
            <Swiper_component />
          </div>
          <div className="flex h-full w-1/2 flex-col justify-around gap-y-12">
            <div className="text-3xl font-bold leading-snug text-stone-800 xs:text-5xl md:!leading-normal xl:text-6xl 3xl:text-7xl">
              Natural
              <br /> inspiration in <br /> every room
            </div>
            <div className="max-w-lg text-[13px] leading-5 text-stone-400 xs:text-base xs:leading-9 md:text-lg">
              Experience the elegance of nature in your living space with our
              natural-inspired interior design services.
            </div>
            <div className="flex flex-row justify-start gap-x-12">
              <div className="flex w-40 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 sm:w-48 sm:py-4 sm:text-base">
                Search now
              </div>

              <div className="flex w-40 cursor-pointer select-none items-center justify-center border-[2px] border-emerald-800/20 bg-transparent py-3 text-sm font-normal tracking-wide text-emerald-800 transition-all duration-100 hover:bg-emerald-800/20 active:scale-95 sm:w-48 sm:py-4 sm:text-base">
                See our portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
