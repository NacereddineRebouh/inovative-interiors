import { StarIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import image1 from "@/public/images/profile pictures/5.png";

type Props = {
  name?: string;
  username?: string;
  profilepic?: StaticImageData;
  rating?: number;
  Comment?: string;
};

export default function TestimonialCard({
  name = "Bessie Alexa",
  username = "bessiee",
  profilepic = image1,
  rating = 4.9,
  Comment = "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home.!",
}: Props) {
  return (
    <div className="flex w-full flex-col gap-y-4 divide-y-2 divide-[#ffe2bf] border-[1px] border-[#ffe2bf] bg-[#fafafa] px-8 py-6 xl:px-16 xl:py-12">
      {/* top */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-y-2 text-xl xs:text-2xl">
          <p className=" font-bold text-stone-800 ">{name}</p>
          <div className="flex flex-row items-center gap-x-2 text-base font-semibold text-[#ffa63a] xs:text-xl">
            <FaTwitter className="h-5 w-5"></FaTwitter> <p>{"@" + username}</p>
          </div>
        </div>
        <figure className="relative aspect-square w-20 overflow-hidden rounded-full">
          <Image
            className="object-cover"
            fill
            src={profilepic}
            alt={""}
          ></Image>
        </figure>
      </div>

      {/* rating */}
      <div className="flex flex-col items-start gap-y-2 pt-3">
        <div className="flex flex-row items-center gap-x-3">
          <figure className="flex flex-row items-center gap-x-1">
            <StarIcon className="h-6 w-6 text-orange-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-orange-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-orange-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-orange-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-orange-400"></StarIcon>
          </figure>
          <p className="mb-1 text-xl font-semibold text-stone-400">
            {rating}
            <span className="font-medium">/5</span>
          </p>
        </div>
        <p className="font-medium text-stone-400">{Comment}</p>
      </div>
    </div>
  );
}
