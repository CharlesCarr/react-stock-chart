import TickerLabel from "./TickerLabel";
import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const ChartTop = ({ tickers, deleteTicker, setTimePeriod, timePeriod }) => {
  const time = {
    year: "1 YR",
    threeMonth: "3 MO",
    month: "1 MO",
  };

  return (
    <Box
      w={{ md: "100%", lg: "100%" }}
      h={{ sm: "20%", md: "20%", lg: "15%" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      bg="#2d324d"
      borderRadius="lg"
      borderBottomRadius="0"
      paddingTop="3"
      paddingBottom="4"
    >
      <Box w="100%" display="flex" justifyContent="center" alignItems="center">
        <UnorderedList
          width="100%"
          styleType="none"
          display="flex"
          marginBottom={{ sm: "1%" }}
          justifyContent="center"
          paddingTop="2%"
        >
          <ListItem marginRight="1%" marginLeft="1%">
            <Text
              color="white"
              paddingTop={{ sm: "1%" }}
              paddingBottom={{ sm: "1.5%" }}
            >
              {time.year}
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <UnorderedList
          styleType="none"
          display="flex"
          marginBottom={{ sm: "1%" }}
        >
          {tickers.map((ticker) => {
            return (
              <TickerLabel
                key={ticker}
                ticker={ticker}
                deleteTicker={deleteTicker}
              />
            );
          })}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default ChartTop;
