import Image from "next/image";
import React from "react";
// import image1 from "@/public/images/Hero/4.jpg";
// import image1 from "@/public/images/Hero/4.jpg";
import image1 from "@/public/images/Hero/5.jpg";
import image2 from "@/public/images/Hero/2.jpg";
import image3 from "@/public/images/Hero/3.jpg";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full ">
      <div className="relative mx-auto max-w-[2500px] pt-36 lg:pt-40">
        <div className="flex flex-row lg:ml-16 xl:ml-28">
          {/* CTA and headline */}
          <div className="absolute left-0 right-0 z-10 mt-28 flex w-full flex-col items-center justify-center gap-y-7 text-center sm:gap-y-14 md:gap-y-24 lg:relative lg:mt-0 lg:w-1/2 lg:justify-start lg:gap-y-7 lg:pr-10 lg:text-start xl:pr-24 2xl:pr-40">
            <div className="z-10 text-4xl font-bold leading-snug text-stone-700 xs:text-6xl md:!leading-normal lg:text-stone-100 xl:text-7xl">
              Create a home that defines <br />
              who you are
            </div>
            <div className="z-10 mb-4 px-4 text-[13px] leading-5 text-stone-600 xs:text-base xs:leading-9 sm:px-24 md:text-lg lg:pl-0 lg:pr-20 lg:text-stone-100/50">
              Our team of experienced designers will help you create beautiful
              and functional spaces that reflect your unique style and needs.
              Browse our portfolio and Get started
            </div>
            <div className="z-10 mb-20 flex flex-col justify-around gap-y-2 sm:flex-row sm:gap-0 sm:gap-x-12 lg:justify-start">
              <div className="flex w-40 cursor-pointer select-none items-center justify-center bg-[#ffa63a] py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 sm:w-48 sm:py-4 sm:text-base">
                Get started
              </div>

              <div className="flex w-40 cursor-pointer select-none items-center justify-center bg-emerald-800 py-3 text-sm font-normal tracking-wide text-zinc-100 transition-all duration-100 hover:bg-emerald-700 active:scale-95 sm:w-48 sm:py-4 sm:text-base lg:border-[2px] lg:border-emerald-50/10 lg:bg-transparent lg:hover:bg-emerald-50/10">
                See our portfolio
              </div>
            </div>

            {/* gap-x-36 */}
            <div className="relative z-10 flex w-full flex-row justify-around lg:justify-between">
              <div className="z-10 mt-5 flex  flex-col gap-y-4 md:mt-0 lg:mt-5 xl:mt-0">
                <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  745+
                </div>
                <div className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  Project Finished
                </div>
              </div>

              <div className="z-10 mt-14 flex flex-col gap-y-4 sm:mt-[77px] md:mt-16 4xl:mt-28">
                <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  50+
                </div>
                <div className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  professional Designers
                </div>
              </div>

              <div className="z-10 mt-24 flex flex-col gap-y-4 sm:mt-32 4xl:mt-56">
                <div className="text-2xl font-semibold text-orange-400 md:text-4xl">
                  150+
                </div>
                <div className="w-28 text-base text-zinc-500 xs:text-lg md:text-xl xl:text-2xl">
                  Ongoing Projects
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-0 flex h-[200px] w-full scale-105 bg-[#fafafa] lg:hidden"></div>
            </div>
          </div>

          {/* Banner */}
          <div className="z-0 flex h-full w-full flex-col lg:z-10 lg:w-1/2 lg:gap-y-5">
            <div className="relative h-[65%] bg-zinc-400">
              <Image
                src={image1}
                alt={""}
                className={
                  "aspect-[3/4] min-h-[700px] object-cover md:w-full lg:aspect-[2/4] lg:max-h-[700px]"
                }
              />
              <div className="absolute top-0 left-0 right-0 flex aspect-[3/4] h-full min-h-[700px] w-full bg-orange-50/40 object-cover backdrop-blur-[2px] md:w-full lg:hidden lg:aspect-[2/4] lg:max-h-[700px]"></div>
            </div>
            <div className="relative hidden h-[35%] flex-row gap-x-5 lg:flex">
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
            </div>
          </div>
          <div className="absolute -bottom-64 left-0 right-0 z-0 hidden h-[630px] w-full rotate-12 skew-x-12 scale-105 bg-[#fafafa] lg:flex"></div>
        </div>
      </div>
    </div>
  );
}
