"use client";

import { Text } from "@chakra-ui/react";
import { CustomButton } from "components/Button";
import Image from "next/image";
import { useLayoutEffect } from "react";

export const Hero = () => {
  useLayoutEffect(() => {
    const scrollers = document.querySelectorAll(".scroll-container");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scrolling");

        const scrollContent = Array.from(scrollerInner.children);

        scrollContent.map((item) => {
          const duplicate = item.cloneNode(true) as Element;
          duplicate.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicate);
        });
      });
    }
  }, []);
  return (
    <div className="flex flex-col justify-center align-middle items-center mt-[150px] md:mt-[200px]">
      <h1 className="text-center justify-center align-middle flex text-[50px] md:text-7xl  font-medium leading-[55px] md:leading-[97.76px] text-white tracking-[-2px] md:tracking-[-3.76px] md:px-0 px-4">
        The fastest way to design and <br /> deploy procurement automation
      </h1>

      <Text className="text-white text-center text-sm md:text-base mt-[15px] font-light md:font-light leading-6 md:leading-7 tracking-wide md:tracking-[0.2px] md:px-0 px-4 normal-case">
        Barrel makes it easy for employees to request purchases and provides{" "}
        visual workflows for approvals <br className="hidden md:block" />
        across various teams, including finance, legal, procurement, IT, and
        security.
      </Text>
      <CustomButton
        className=" bg-white max-w-min h-11 pt-6 mt-[27px]"
        borderWidth="0"
        // letterSpacing='-0.2px'
        h="44px"
      >
        <Text
          onClick={() =>
            window.open(
              "https://barrel-dev.vercel.app/auth/request-demo/",
              "_blank"
            )
          }
          className="text-black text-base  font-medium leading-6 tracking-[-0.2px]"
        >
          Request Access
        </Text>
      </CustomButton>
      <div className="flex flex-col items-center mt-[35px] ">
        <Text className="text-white font-medium text-xs md:text-sm leading-6 border rounded-xl px-2 border-[#FFFFFF0A] bg-[#FFFFFF0A]">
          TRUSTED BY MODERN COMPANIES
        </Text>
        {/* scroll to left */}
        <div className="scroll-container max-w-[700px]  mt-4 mx-auto whitespace-nowrap">
          <div className="scrolling inline-flex   items-center justify-center gap-4 ">
            <Image
              src={"/assets/okra.svg"}
              alt="Okra logo"
              width={100}
              height={30}
              priority
            />
            <Image
              src={"/assets/nomba.svg"}
              alt="nomba logo"
              width={130}
              height={25}
              priority
            />

            <Image
              src={"/assets/foodcourt.svg"}
              alt="Foodcourt logo"
              width={130}
              height={25}
              priority
            />
            <Image
              src={"/assets/chowcentral.svg"}
              alt="Chowcentral logo"
              width={130}
              height={30}
              priority
            />
          </div>
        </div>
        {/* end  */}
      </div>
    </div>
  );
};
