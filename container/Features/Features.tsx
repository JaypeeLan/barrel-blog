import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Features = () => {
  return (
    <Box className="max-w-full mx-auto whitespace-nowrap mt-10 md:mt-3">
      <div className="inline-flex   items-center justify-center ">
        <Image
          src={"/assets/features.svg"}
          alt="barrel logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="hidden md:block"
          priority
        />
        <Image
          src={"/assets/featuremobile.svg"}
          alt="barrel logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="block md:hidden "
          priority
        />
      </div>
    </Box>
  );
};
