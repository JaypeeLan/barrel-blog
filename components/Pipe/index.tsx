import { Box } from "@chakra-ui/react";

const VerticalLine = ({ width = "2px", height = 5 }: any) => {
  return (
    <Box
      className="vertical-line"
      width={width}
      height={height}
      style={{
        background:
          "linear-gradient(to bottom, rgba(244, 243, 242, 1), rgba(244, 243, 242, 0.4))",
      }}
    />
  );
};

export default VerticalLine;
