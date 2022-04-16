import TickerLabel from "./TickerLabel";
import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const ChartTop = ({ tickers, deleteTicker, setTimePeriod, timePeriod }) => {

  const time = {
    year: '1 YR',
    month: '1 MO'
  };

  return (
    // borderBottomWidth="1px" borderColor="white" boxShadow="lg"
    <Box
      // w="100%"
      w={{ md: "100%", lg: "100%" }}
      h={{ sm: "20%", md: "20%", lg: "15%" }}
      display="flex"
      // borderBottomWidth="1px"
      // borderColor="#323647"
      flexDirection="column"
      justifyContent="space-around"
      bg="#2d324d"
      borderRadius="lg"
      borderBottomRadius="0"
      paddingTop="3"
      paddingBottom="4"
    >
      <Box w="100%" display="flex" justifyContent="center" alignItems="center">
        {/* color="#7c72ff" */}
        {/* <Text color="white" paddingTop={{sm:"1%"}} paddingBottom={{sm:"1.5%"}}>1 MONTH PERFORMANCE</Text> */}
        <UnorderedList
          width="100%"
          styleType="none"
          display="flex"
          marginBottom={{ sm: "1%" }}
          justifyContent="center"
        >
          <ListItem marginRight="1%" marginLeft="1%">
            <Text
              color="white"
              paddingTop={{ sm: "1%" }}
              paddingBottom={{ sm: "1.5%" }}
              onClick={() => setTimePeriod(time.year)}
            >
             {time.year}
            </Text>
          </ListItem>
          <ListItem marginRight="1%" marginLeft="1%">
            <Text
              color="white"
              paddingTop={{ sm: "1%" }}
              paddingBottom={{ sm: "1.5%" }}
              onClick={() => setTimePeriod(time.month)}
            >
               {time.month}
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
