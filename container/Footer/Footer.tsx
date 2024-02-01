"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "helpers/cn";

export const Footer = ({ className }: any) => {
  const router = useRouter();
  return (
    <Box
      className={cn(
        "footer flex flex-col md:flex-row  justify-around align-middle items-center py-8 text-sm font-light leading-[21px] tracking-[-0.2px] capitalize shadow-custom text-white",
        className
      )}
    >
      <Text>© 2024 Barrel software inc. All rights reserved.</Text>
      <Box className=" md:hidden flex flex-row justify-between gap-8 my-5 md:my-0">
        <Text
          className="cursor-pointer"
          onClick={() => router.replace("/privacy-policy")}
        >
          Privacy Policy
        </Text>
        <Text
          className="normal-case cursor-pointer"
          onClick={() => router.replace("/terms-of-service")}
        >
          Terms of Service
        </Text>
      </Box>
      <Text
        className="hidden md:block cursor-pointer"
        onClick={() => router.replace("/privacy-policy")}
      >
        Privacy Policy
      </Text>
      <Text
        className="hidden md:block normal-case cursor-pointer"
        onClick={() => router.replace("/terms-of-service")}
      >
        Terms of Service
      </Text>
      <Box className="flex flex-row items-center justify-between gap-2 ">
        <Image
          src={"/assets/twitter.svg"}
          alt="barrel logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="cursor-pointer"
          onClick={() => window.open("https://twitter.com/barrel_HQ", "_blank")}
          priority
        />
        <Image
          src={"/assets/linkedIn.svg"}
          alt="barrel logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/company/barrelhq/", "_blank")
          }
          priority
        />
      </Box>
    </Box>
  );
};
