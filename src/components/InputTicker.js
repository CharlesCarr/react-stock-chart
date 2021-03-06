import { useState } from "react";
import {
  Text,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const InputTicker = ({
  fetchChartData,
  addTicker,
  fullResults,
  dataError,
  setDataError,
  ticker,
  setTicker,
}) => {
  const [isError, setIsError] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  const handleChange = (e) => {
    setTicker(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (fullResults.length < 2) {
      if (ticker === "") {
        // clear other errors
        setIsLimit(false);
        // set no input error
        setIsError(true);
      } else {
        let capsTicker = ticker.toUpperCase();
        setIsError(false);
        // will need to pass the value into a function that calls the API
        fetchChartData(capsTicker);
        // clear input field
        setTicker("");
      }
    } else {
      // clear other errors
      setIsError(false);
      // set error for limit to only 2 tickers
      setIsLimit(true);
      // clear input field
      setTicker("");
    }
  };

  // quick fix to create variable to check for both errors
  // can then use to prevent duplicate error texts
  let error;
  if (dataError && isError) {
    error = true;
  } else {
    error = false;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={{ sm: "30%", md: "25%", lg: "100%" }}
      maxW={{ lg: "sm" }}
      h={{ sm: "100%", md: "100%", lg: "35%" }}
      bg="#7c72ff"
      marginBottom={{ lg: "5%" }}
      borderRadius="lg"
      p={{ md: "6", lg: "0" }}
      boxShadow="dark-lg"
    >
      <form onSubmit={submitHandler}>
        <FormControl>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            p="1.5"
          >
            <FormLabel htmlFor="ticker" >Ticker:</FormLabel>
            <Input
              type="text"
              id="ticker"
              value={ticker}
              onChange={handleChange}
              maxW="50%"
              variant="flushed"
              h="4"
            />
          </Box>

          {(dataError && !error) && (
            <Text
              textAlign="center"
              w="100%"
              marginTop="-10px"
              marginBottom="-12px"
              fontSize={{ sm: "0.5rem", md: "0.6rem" }}
            >
              Ticker not found.
            </Text>
          )}
          {isError && (
            <Text
              textAlign="center"
              w="100%"
              marginTop="-10px"
              marginBottom="-12px"
              fontSize={{ sm: "0.5rem", md: "0.6rem" }}
            >
              No ticker input.
            </Text>
          )}
          {isLimit && (
            <Text
              textAlign="center"
              w="100%"
              marginTop="-10px"
              marginBottom="-12px"
              fontSize={{ sm: "0.5rem", md: "0.6rem" }}
            >
              Ticker limit met.
            </Text>
          )}

          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="primaryOutline"
              type="submit"
              marginTop="4"
              marginBottom="2"
              w={{ sm: "90%" }}
              fontSize={{ sm: "0.8rem" }}
            >
              View Chart
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default InputTicker;
