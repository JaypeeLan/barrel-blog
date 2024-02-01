"use client";

import { Box, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Button";
import { Navbar } from "container/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function BlogLayout({ children }) {
  const router = useRouter();
  return (
    <Box
      className=" px-2 lg:px-0 w-full min-h-screen text-black bg-mobilebackgroundImage  md:bg-backgroundImage bg-center bg-no-repeat bg-cover h-full  overflow-hidden"
      display="flex"
      flexDirection="column"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Navbar />

      {children}
    </Box>
  );
}
