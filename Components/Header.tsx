"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import logo from "@/public/logos/logo3.png";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const variants = {
  open: { innerHeight: "0" },
  closed: { innerHeight: "-100%" },
};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen text-zinc-100">
      <Menu as="div" className="mx-auto max-w-[2500px] flex flex-col">
        <div className="mx-5 h-20 flex min-h-[48px] items-center justify-between sm:mx-16 xl:mx-28">
          {/* logo & navigation*/}
          <div className="relative flex gap-x-16 items-center justify-start">
            <Link
              href="/"
              className="flex justify-start relative cursor-pointer w-[150px]"
            >
              <Image src={logo} alt={""} className="h-9 object-contain" />
            </Link>

            {/* navigation */}
            <div className="items-center gap-x-2 lg:gap-x-4 text-stone-100/50 lg:flex hidden">
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
                href="#"
              >
                Home
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
                href="#"
              >
                Services
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
                href="#Explore"
              >
                About us
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
                href="#"
              >
                Parternship
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="cursor-pointer hidden lg:flex select-none bg-[#ffa63a] px-7 font-medium py-4 text-base text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95">
            Consultation
          </div>
          <Menu.Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex lg:hidden "
          >
            {({ open }) => (
              <div
                className={`flex cursor-pointer transition-all duration-200 ${
                  open ? "bg-[#ff8c00]/100" : "bg-[#ff8c00]/0"
                } p-2 font-medium text-sm text-zinc-900 active:scale-95 select-none`}
              >
                <HiOutlineMenuAlt3
                  className={`h-7 w-7 ${
                    open ? "text-emerald-800 " : "text-zinc-100"
                  }`}
                />
              </div>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 "
          enterTo="transform opacity-100 "
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 "
          leaveTo="transform opacity-0 "
        >
          <Menu.Items className="text-sm text-gray-500 sm:mx-16 xl:mx-28 mx-5">
            {({ open }) => (
              <div className="flex lg:hidden overflow-hidden">
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={{
                        height: 0,
                      }}
                      className={"w-full flex flex-col gap-y-2 "}
                    >
                      <div className="cursor-pointer select-none bg-[#ffa63a] px-7 font-medium py-3 text-sm text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 w-full mt-5">
                        Get started
                      </div>
                      <div className="divide-y divide-emerald-900/70 text-green-50/50 w-full py-2">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Home
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Services
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Blog
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              About us
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Parternship
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu.Items>
        </Transition>

        {/* </motion.div> */}
      </Menu>
    </div>
  );
}

// <Disclosure>
// {({ open }) => (
//   <>
//     <div className="mx-5 h-20 flex min-h-[48px] items-center justify-between md:mx-10 lg:mx-16 xl:mx-28">
//       <div className="relative flex gap-x-14 items-center justify-start">
//         <Link
//           href="/"
//           className="flex justify-start relative cursor-pointer w-[150px]"
//         >
//           <Image src={logo} alt={""} className="h-9 object-contain" />
//         </Link>

//         <div className="items-center gap-x-2 lg:gap-x-4 text-emerald-50/50 lg:flex hidden">
//           <Link
//             className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
//             href="#"
//           >
//             Home
//           </Link>
//           <Link
//             className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
//             href="#"
//           >
//             Services
//           </Link>
//           <Link
//             className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
//             href="#"
//           >
//             Blog
//           </Link>
//           <Link
//             className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
//             href="#Explore"
//           >
//             About us
//           </Link>
//           <Link
//             className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-zinc-100 sm:flex"
//             href="#"
//           >
//             Parternship
//           </Link>
//         </div>
//       </div>

//       <div className="cursor-pointer hidden lg:flex select-none bg-[#ffa63a] px-7 font-medium py-3 text-sm text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95">
//         Get started
//       </div>
//       <Disclosure.Button className="flex lg:hidden cursor-pointer select-none bg-[#ff8c00] px-7 font-medium py-3 text-sm text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95">
//         Get started
//       </Disclosure.Button>
//     </div>

//     <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
//       If youre unhappy with your purchase for any reason, email us
//       within 90 days and well refund you in full, no questions asked.
//     </Disclosure.Panel>
//   </>
// )}
// </Disclosure>
