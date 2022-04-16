import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Rechart = ({ fullResults, convertDateFormat, tickers, timePeriod }) => {
  const [data, setData] = useState([]);
  const [oneYearData, setOneYearData] = useState([]);

  useEffect(() => {
    if (fullResults.length === 1) {
      let arr = fullResults[0].dayResultsArr;
      var ticker = fullResults[0].ticker;

      setData(() => {
        const objArr = arr.map((day) => {
          let obj = {
            date: convertDateFormat(new Date(day.t)),
            [ticker]: day.c.toFixed(2),
          };
          return obj;
        });
        return objArr;
      });
    } else {
      for (let i = 1; i < fullResults.length; i++) {
        let arr = fullResults[i].dayResultsArr;
        var ticker = fullResults[i].ticker;
        let prices = arr.map((day) => ({ [ticker]: day.c.toFixed(2) }));

        setData((prev) => {
          let final = prev.map((obj, i) => ({
            ...obj,
            [ticker]: prices[i][ticker],
          }));
          return final;
        });
      }
    }
  }, [fullResults]);

  // storing the initial full year data in separate state variable
  // only update when fullResults (new tickers are added)
  // useEffect(() => {
  //     setOneYearData(() => data);
  // }, [fullResults]);


  // logic for setting data to display different subsets for different time periods
  // useEffect(() => {
  //   if (timePeriod === "1 YR" && data !== oneYearData) {
  //     setData(() => oneYearData);
  //   } else if (timePeriod === "1 MO") {
  //     setData((oneYearData) => oneYearData.slice(0, 5));
  //   }
  // }, [oneYearData, timePeriod]);

  // logic for finding smallest / largest closes to use for domain for recharts y axis
  const findMinMax = (i) => {
    if (data.length !== 0) {
      const numData = data.map((result) => {
        return Number(result[tickers[i]]);
      });

      const minVal = numData.reduce((prev, curr) =>
        prev < curr ? prev : curr
      );
      const maxVal = numData.reduce((prev, curr) =>
        prev > curr ? prev : curr
      );

      let minMaxObj = {
        min: minVal,
        max: maxVal,
      };

      return minMaxObj;
    } else {
      let minMaxObj = {
        min: 0,
        max: 1000,
      };
      return minMaxObj;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      paddingTop="2"
      color="black"
      h="100%"
      w="100%"
      marginTop={{ md: "2rem" }}
    >
      <ResponsiveContainer width="90%" aspect={2}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c72ff" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#7c72ff" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorTwo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2d324d" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2d324d" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.1} vertical={false} />
          <XAxis
            // stroke="#2d324d"
            stroke="white"
            dataKey="date"
            interval={5}
            axisLine={false}
            tickLine={false}
            tickFormatter={(date) => date.substring(6, date.length)}
          />
          {/* dataKey={ticker} */}
          <YAxis
            // stroke="#2d324d"
            stroke="white"
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tickFormatter={(number) => `$${number.toFixed(0)}`}
            yAxisId="left-axis"
            domain={[findMinMax(0)["min"] * 0.9, findMinMax(0)["max"] * 1.05]}
          />
          {tickers.length > 1 ? (
            <YAxis
              // stroke="#2d324d"
              stroke="white"
              axisLine={false}
              tickLine={false}
              tickCount={5}
              tickFormatter={(number) => `$${number.toFixed(0)}`}
              yAxisId="right-axis"
              orientation="right"
              domain={[findMinMax(1)["min"] * 0.9, findMinMax(1)["max"] * 1.05]}
            />
          ) : null}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={tickers[0]}
            stroke="#7c72ff"
            fill="url(#color)"
            key={tickers[0]}
            yAxisId="left-axis"
          />
          {/* if two tickers then create another area chart for the second */}
          {tickers.length > 1 ? (
            <Area
              type="monotone"
              dataKey={tickers[1]}
              stroke="#2d324d"
              fill="url(#colorTwo)"
              key={tickers[1]}
              yAxisId="right-axis"
            />
          ) : null}
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Rechart;
