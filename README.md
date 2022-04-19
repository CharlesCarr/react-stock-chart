# 'StockChartz'

V1 of stock chart web application built with React.js. Using Recharts for chart display and Polygon.io API for stock data.

## Project Description

I designed and built this mobile friendly, responsive stock chart web app with React.js, including React Hooks. I used Chakra UI to style components. For the chart itself I used the Recharts library and for the stock market data I used the Polygon.io API.

Areas of focus for this project include: 
- Use of fetching API data and updating data shape to fit Recharts props to display with clean, animated UI
- Styling React components with Chakra UI

## Flow of Application

1. The first page the user sees is a null state where the user can input up to two stock tickers to display on a BiAxial chart.
2. As the user inputs stock tickers the UI updates to animate the chart on the screen for 1 year of stock close price data as well as percent change calculated on a side component for easy view of the 1 year stock performance.
3. The user can review the data or add an additional ticker to compare two stocks' performance at the same time.

### About

I built this project for additonal practice in fetching data with APIs and working with a React charting library. As an active stock investor, I found that a stock chart app was an interesting way to demostrate this.

### Next Steps 

This is version 1 of an ongoing project. I have already started working on features to include multiple time periods of data to be displayed and make this more granular. Right now, this application supports just stocks but I am interested to compare cryptocurrency price data alongside stocks in the future as well.

### Hosting

Hosting with Firebase (will be adding live link later)