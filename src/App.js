import React, { useState, useEffect } from "react";
import InputTicker from "./components/InputTicker";
import Rechart from "./components/Rechart";
import ChangeStats from "./components/ChangeStats";
import ChartTop from "./components/ChartTop";
import NullChart from "./components/NullChart";
import { Box, Heading } from "@chakra-ui/react";

const App = () => {
  // make this an array of results and then add each api fetched data object to it (array of objects)
  // const [fullResults, setFullResults] = useState(null);
  const [fullResults, setFullResults] = useState([
    // {
    //   ticker: "EXAMPLE",
    //   // will be an array (each day returned) of objects (pricing info)
    //   dayResultsArr: [{ t: 1618372800000, c: 280}, { t: 1618372800050, c: 333}, { t: 1618372800100, c: 888}],
    // }
  ]);
  const [todayDate, setTodayDate] = useState(new Date());
  const [tickers, setTickers] = useState([]);
  const [dataError, setDataError] = useState(false);
  const [timePeriod, setTimePeriod] = useState("1 YR");
  console.log(timePeriod);

  // potential opportunity to add context here to shorten this? w. all time stuff going in there then passing down
  useEffect(() => {
    setTodayDate(convertDateFormat(todayDate));
  }, []);

  const addTicker = (ticker) => {
    setTickers([...tickers, ticker]);
  };

  const deleteTicker = (ticker) => {
    setFullResults(fullResults.filter((el) => el.ticker !== ticker));
    setTickers(tickers.filter((el) => el !== ticker));
  };

  const convertDateFormat = (date) => {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    let day = date.getDate().toString();
    if (day.length < 2) {
      day = "0" + day;
    }
    let convertedDate = `${year}-${month}-${day}`;
    return convertedDate;
  };

  // console.log(todayDate);
  // year
  // let pastDate = todayDate.toString().replace("2022", "2021");
  // month
  let pastDate = todayDate.toString().replace("04", "03");
  // console.log(pastDate);

  const fetchChartData = (ticker) => {
    // moving forward can add variables for dates and add to url that way
    // will be able to add dates through parameters that are in the function called in input.tsx
    // hardcoding for now to test
    let apiKey = "XCvfXTvpPVHyWKQ9UrxFmh9I3yd1WHLA";
    let url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${pastDate}/${todayDate}?adjusted=true&sort=asc&limit=400&apiKey=`;
    let qString = url + apiKey;

    fetch(qString)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        // add UI for input error - 'Ticker not found' - maybe call function in InputTicker.js
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Need to fix this b/c not currently working ****************
        // if (data.resultsCount > 0) {
        // creating own state object with the data I need from data fetched from API
        setFullResults([
          ...fullResults,
          {
            ticker: data.ticker,
            // will be an array (each day returned) of objects (pricing info)
            dayResultsArr: data.results,
            lastClose: data.results[data.results.length - 1].c,
            // create percent change from first day price to last day price
            percentChange: (
              ((data.results[data.results.length - 1].c - data.results[0].c) /
                data.results[0].c) *
              100
            ).toFixed(2),
          },
        ]);
        // } else {
        //   setDataError(true);
        //   console.log(dataError);
        // }
      })
      .catch(console.error);
  };

  console.log(fullResults);

  return (
    <Box h="100vh" m="0" bg="background" color="white">
      <Box
        h={{ sm: "8%", md: "12vh", lg: "12vh" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="#7c72ff">StockChartz</Heading>
      </Box>

      <Box
        h="90vh"
        w={{ lg: "100vw" }}
        display={{ lg: "flex" }}
        flexDirection={{ lg: "row" }}
        justifyContent={{ lg: "space-around" }}
        marginTop={{ sm: "2.5%", md: "0", lg: "0.5%" }}
      >
        <Box
          // w="20%"
          w={{ sm: "100%", md: "100%", lg: "20%" }}
          // h="80vh"
          h={{ sm: "17.5%", md: "17vh", lg: "80vh" }}
          display="flex"
          flexDirection={{ lg: "column" }}
          // justifyContent="space-between"
          justifyContent={{ sm: "center", md: "center" }}
          alignItems={{ sm: "center", md: "center" }}
        >
          <InputTicker
            fetchChartData={fetchChartData}
            addTicker={addTicker}
            fullResults={fullResults}
            dataError={dataError}
          />
          <ChangeStats fullResults={fullResults} />
        </Box>

        <Box
          w={{ sm: "100%", md: "100%", lg: "70%" }}
          h={{ sm: "65vh", md: "65vh", lg: "80vh" }}
          marginTop={{ sm:"3.5%", md: "0.5%", lg: "0" }}
          paddingTop={{ md: "2.5vh", lg: "0" }}
          display={{ sm: "flex", md: "flex" }}
          flexDirection={{ sm: "column", md: "column" }}
          justifyContent={{ sm: "center", md: "center" }}
          alignItems={{ sm: "center", md: "center" }}
        >
          <Box
            w={{ sm: "90%", md: "90%", lg: "100%" }}
            h={{ sm: "90%", md: "95%", lg: "100%" }}
            borderRadius="lg"
            bg="componentbg"
            boxShadow="dark-lg"
          >
            <ChartTop tickers={tickers} deleteTicker={deleteTicker} setTimePeriod={setTimePeriod} timePeriod={timePeriod} />

            <Box
              display={{ sm:"flex", md: "flex" }}
              justifyContent={{ sm:"center", md: "center" }}
              alignItems={{ sm:"center", md: "center" }}
              w={{ sm:"100%", md: "100%" }}
              h={{ sm:"80%", md: "80%" }}
            >
              {fullResults.length > 0 ? (
                <Rechart
                  fullResults={fullResults}
                  convertDateFormat={convertDateFormat}
                  tickers={tickers}
                  timePeriod={timePeriod}
                />
              ) : (
                <NullChart />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
