import USD from "../svgs/USD";
import { Box, Text } from "@chakra-ui/react";

const NullChart = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <USD />
      <Text marginTop="2%">Select a Ticker to View Chart</Text>
    </Box>
  );
};

export default NullChart;
