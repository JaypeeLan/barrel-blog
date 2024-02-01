import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box className=" w-full flex items-center justify-center ">
      <div className="-mt-[100vh]">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    </Box>
  );
};

export default Loader;
