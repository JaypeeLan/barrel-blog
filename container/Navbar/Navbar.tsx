"use client";

import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { CustomButton } from "components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box className="flex items-center justify-center px-[6%] w-full mb-[108px]">
      <nav className="flex items-center justify-between flex-wrap py-6  w-full ">
        <div className="flex flex-row items-center justify-between w-full ">
          <Link href={"/"}>
            <Image
              src={"/assets/barrel-logo.svg"}
              alt="barrel logo"
              width={137}
              height={40}
              priority
              className="ml-4 md:ml-0"
            />
          </Link>

          <div className="hidden md:flex flex-row items-center justify-center md:gap-5">
            {/* <CustomButton
            borderWidth='0'
            className='text-white text-lg font-medium leading-28 border-none w-10 '
          >
            Blog
          </CustomButton> */}
            <CustomButton
              borderWidth="0"
              className="w-full rounded-xl md:px-3 bg-transparent font-medium text-sm leading-5"
              color="#fff"
              onClick={() => router.push("/blog")}
            >
              Blog
            </CustomButton>
            <CustomButton
              borderWidth="0"
              className="w-full rounded-xl md:px-3 bg-white  border-[#1B1F2426] font-medium text-sm leading-5 text-black "
              onClick={() =>
                handleNavigation("https://barrel-dev.vercel.app/auth/login")
              }
            >
              Login
            </CustomButton>
            <CustomButton
              className="w-full rounded-xl md:px-3 bg-[#5F01D2] border-[#1B1F2426] hover:bg-[#6914DC] h-10 font-medium text-sm leading-5 "
              color="#fff"
              borderWidth="0"
              paddingX="10"
              onClick={() =>
                handleNavigation(
                  "https://barrel-dev.vercel.app/auth/request-demo/"
                )
              }
            >
              Request Access
            </CustomButton>
          </div>
        </div>

        <div className="block lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center py-2 border rounded text-white border-none hover:text-teal-200 hover:border-white"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6 mr-2" aria-hidden="true" />
            ) : (
              // <HamburgerIcon className='h-6 w-6' aria-hidden='true' />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="align-justify">
                  <path
                    id="Vector"
                    d="M21 10H3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M21 6H3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M21 14H3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M21 18H3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            )}
          </button>
        </div>

        {isOpen ? (
          <div
            className={`w-full top-20 block flex-grow lg:flex lg:items-center lg:w-auto z-50 ${
              isOpen ? "fixed inset-0 bg-black bg-opacity-[88%]" : "hidden"
            }`}
          >
            <div
              className={`flex flex-col items-center justify-start mt-5 mx-4 gap-4 md:gap-1 ${
                isOpen ? "h-full" : "hidden"
              }`}
            >
              <CustomButton
                borderWidth="0"
                className="w-full rounded-xl md:px-3 bg-transparent "
                color="#fff"
              >
                <Link
                  className="font-medium text-sm leading-5"
                  target="_blank"
                  href={"/blog"}
                >
                  Blog
                </Link>
              </CustomButton>
              <CustomButton
                borderWidth="0"
                className="w-full rounded-xl md:px-3 bg-white  border-[#1B1F2426] "
              >
                <a
                  href={"https://barrel-dev.vercel.app/auth/login"}
                  target="_blank"
                  className="font-medium text-sm leading-5 text-black"
                >
                  Login
                </a>
              </CustomButton>
              <CustomButton
                className="w-4 md:w-full rounded-xl mx-10 md:px-3 bg-[#5F01D2]  border-[#1B1F2426] hover:bg-[#6914DC] h-10 "
                borderWidth="0"
                paddingX="10"
                color="#fff"
              >
                <a
                  href={"https://barrel-dev.vercel.app/auth/request-demo"}
                  target="_blank"
                  className="font-medium text-sm leading-5"
                >
                  Request Access
                </a>
              </CustomButton>
            </div>
          </div>
        ) : null}
        <hr className="block md:hidden" />
      </nav>
    </Box>
  );
};
