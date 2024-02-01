"use client";

import { Box, Text } from "@chakra-ui/react";

import { Footer } from "container/Footer/Footer";

const SingleArticleLayout = ({ children }) => {
  // console.log("params:", params);
  return (
    <Box className="w-full text-white bg-mobilebackgroundImage  md:bg-backgroundImage bg-center bg-no-repeat bg-cover h-full  overflow-hidden">
      {children}

      <Footer />
    </Box>
  );
};

export default SingleArticleLayout;
