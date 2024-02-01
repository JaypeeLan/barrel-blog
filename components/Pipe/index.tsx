import { Box } from "@chakra-ui/react";

const VerticalLine = ({
  width = "2px",
  height = 5,
  backgroundColor = "#C1272D",
}) => {
  return (
    <Box
      className="vertical-line"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    />
  );
};

export default VerticalLine;
