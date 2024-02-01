"use client";

import { Box } from "@chakra-ui/react";
import { Features } from "container/Features/Features";
import { Footer } from "container/Footer/Footer";
import { Hero } from "container/Hero/Hero";
import { Navbar } from "container/Navbar/Navbar";
import React from "react";

export default function Home() {
  return (
    <Box className="flex flex-col bg-mobilebackgroundImage  md:bg-backgroundImage bg-center bg-no-repeat bg-cover h-full  overflow-hidden  ">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </Box>
  );
}
