# 'StockChartz'

[Live App Link](https://stockchartz.web.app/)

Stock chart web application built with React.js to display 1 year price performance. Using Recharts for chart display and Polygon.io API for stock data.

## Project Description

I designed and built this mobile friendly, responsive stock chart web app with React.js, including React Hooks. I used Chakra UI to style components. For the chart itself I used the Recharts library and for the stock market data I used the Polygon.io API.

#### Areas of Focus 
- Prior to building, designed full app in Figma
- Using user input stock ticker to fetch price data with Polygon.io API
- Client side input validation to ensure user input a valid stock ticker
- Taking fetched API data and updating data shape to fit Recharts props to display with clean, animated UI
- Learning more about Recharts customization to layer two stock line components on one chart for a biaxial chart
- Calculating 1yr return percentages with array methods to display in separate component
- Styling responsive React components with Chakra UI

#### Challenges
My first challenge that I hit in development was figuring out how to properly display multiple line components on a single chart. This was difficult because the API data was structured one way and the required props for the Recharts library was very different. Completing this for one stock was not that difficult but for two it was a rewarding challenge when I solved it.

A minor challenge was also navigating through the app after it was built to determine how to best check for a valid ticker. The input submit function had grown quite a bit so it took time to navigate and conditionally set a data error state to prevent the invalid ticker symbols and give the user error feedback. I could have avoided this by addressing it earlier in development rather than later.

## Flow of Application / How to Navigate

1. The first page the user sees is a null state where the user can input up to two stock tickers to display on a biaxial chart.
2. As the user inputs stock tickers the UI updates to animate the chart on the screen for 1 year of stock close price data as well as percent change calculated on a side component for easy view of the 1 year stock performance.
3. The user can review the data or add an additional ticker to compare two stocks' performance at the same time.
4. The user can also delete tickers and display new tickers to start the process over.

## Background

#### Why I Built This
I built this project for additonal practice in fetching data with APIs and working with a React charting library. As an active stock investor, I found that a stock chart app was an interesting way to demonstrate this.

## Learnings

#### Starting Over Now I Would Change / If I Had More Time
- Chakra UI was new to me so I was interested to learn. It was intuitive but I prefer more control over my styles so I would opt to use CSS modules especially when it comes to responsiveness and using media queries.
- Adding a better UI to the null state prior to user inputting stock tickers rather than displaying empty chart
- Giving user ability to switch between multiple time periods of data to add granularity (could be done with cutting the original 1yr array of data to different periods to make it more dynamic rather than including in the initial input form)
- API provides more data than just the close price so I could have created functionality to click into a stock and view more information
- Call a cryptocurrency API to have option to compare crypto to stock performance as well

## Hosting

Hosting with Firebase (https://stockchartz.web.app/)

## Screenshots
![StockChartz Image 1](/screenshots/StockChartz.png)
![StockChartz Image 2](/screenshots/StockChartzResponsive.png)