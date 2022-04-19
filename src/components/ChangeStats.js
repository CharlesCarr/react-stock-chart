import Stats from "./Stats";
import { Box } from "@chakra-ui/react";

const ChangeStats = ({ fullResults, timePeriod }) => {
  return (
    <Box
      borderRadius="lg"
      p={{md:"1", lg: "6"}}
      display="flex"
      flexDirection={{ lg: "column"}}
      alignItems="center"
      justifyContent={{ sm:"space-around", md:"space-around", lg:"flex-start"}}
      h={{ sm:"100%", md: "100%", lg: "100%"}}
      w={{ sm:"60%", md: "62.5%", lg: "100%"}}
      marginLeft={{ sm:"2%", md: "2.5%"}}
      bg="componentbg"
      boxShadow="dark-lg"
    >
      {fullResults.length === 0 ? (
        <Box>Select a Ticker to View</Box>
      ) : (
        fullResults.map((result) => (
          <Stats
            key={result.ticker}
            ticker={result.ticker}
            change={result.percentChange}
            lastClose={result.lastClose}
            threeMonthClose={result.threeMonthClose}
            oneMonthClose={result.threeMonthClose}
            timePeriod={timePeriod}
          />
        ))
      )}
    </Box>
  );
};

export default ChangeStats;
