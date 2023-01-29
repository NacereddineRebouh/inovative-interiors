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
    <div className="w-screen select-none bg-[#325e52] text-zinc-100">
      <Menu as="div" className="mx-auto flex max-w-[2500px] flex-col">
        <div className="mx-5 flex h-36 min-h-[48px] items-center justify-between sm:mx-16 xl:mx-28">
          {/* logo & navigation*/}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="relative flex items-center justify-start gap-x-16"
          >
            <Link
              href="/"
              className="relative flex w-[150px] cursor-pointer justify-start"
              title="innovativeInteriors_logo"
            >
              <Image src={logo} alt={""} className="h-9 object-contain" />
            </Link>

            {/* navigation */}
            <nav className="hidden items-center gap-x-2 text-stone-100/50 lg:flex lg:gap-x-4">
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
            </nav>
          </motion.div>

          {/* CTA */}
          <motion.button
            viewport={{ once: true }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="hidden cursor-pointer select-none bg-[#ffa63a] px-7 py-4 text-base font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95 lg:flex"
          >
            Consultation
          </motion.button>
          <Menu.Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex lg:hidden"
            aria-label="openNavigation"
          >
            {({ open }) => (
              <div
                className={`flex cursor-pointer transition-all duration-200 ${
                  open ? "bg-[#ff8c00]/100" : "bg-[#ff8c00]/0"
                } select-none p-2 text-sm font-medium text-zinc-900 active:scale-95`}
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
          <Menu.Items className="mx-5 text-sm text-gray-500 sm:mx-16 xl:mx-28">
            {({ open }) => (
              <div className="flex overflow-hidden lg:hidden">
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
                      className={"flex w-full flex-col gap-y-2 "}
                    >
                      <button className="mt-5 w-full cursor-pointer select-none bg-[#ffa63a] px-7 py-3 text-sm font-medium text-zinc-900 transition-all duration-100 hover:bg-[#fdaa45] active:scale-95">
                        Get started
                      </button>
                      <nav className="w-full divide-y divide-emerald-900/70 py-2 text-green-50/50">
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
                      </nav>
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
