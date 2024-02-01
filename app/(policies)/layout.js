"use client";

import { CustomButton } from "@/components/Button/index";
import { Footer } from "@/container/Footer/Footer";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
  const router = useRouter();
  return (
    <Box
      className="bg-white px-2 lg:px-0 w-full min-h-screen text-black"
      display="flex"
      flexDirection="column"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box className="w-full flex items-center justify-between md:py-4  md:px-6 fixed ">
        <Link href="/">
          <Image
            src={"/assets/barrel.svg"}
            alt="barrel logo"
            width={94}
            height={26}
            priority
            className="text-black"
          />
        </Link>

        <Box className="flex gap-3 justify-center items-center">
          {/* <CustomButton className="bg-transparent h-[40px] border-none text-b-grey-8 text-sm text-black">
            <Text className="text-black">Blog</Text>
          </CustomButton> */}
          <CustomButton
            className="bg-transparent h-[40px]  text-b-grey-8 text-sm text-black"
            paddingX="10"
            onClick={() =>
              window.open("https://barrel-dev.vercel.app/auth/login", "_blank")
            }
          >
            <Text className="text-black">Login</Text>
          </CustomButton>
          <CustomButton
            className=" h-[40px] border-none font-[600] px-10 bg-[#1D2939] "
            paddingX="10"
            onClick={() =>
              window.open(
                "https://barrel-dev.vercel.app/auth/request-demo/",
                "_blank"
              )
            }
          >
            <Text className="text-white ">Book a Demo</Text>
          </CustomButton>
        </Box>
      </Box>

      <Flex
        display="flex"
        flex="1"
        justify="center"
        align="center"
        marginTop={"185px"}
        className="px-[25%]"
      >
        {children}
      </Flex>
      <div className="border-1 bg-[#E4E7EC]"></div>
      <Footer textColor="text-[#667085]" marginTop="mt-0" />
    </Box>
  );
}
