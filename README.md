# Service Price Calculator

This project is a price calculator for a telecommunications company. It is a one-window application that allows the user to select the year and services they want to purchase and displays the final price of the order. The application retrieves data from an external source using a data model that can be easily modified.

## Demo

[Live site](https://telecom-service-price-calculator.vercel.app)
[Source](https://github.com/GrzywN/telecom)

## Recruitment task

A certain telecommunications company called back with a request to create a price calculator for their services.

Build a one-window application that will allow the user, from the available data, to select the year and services he wants to purchase, and below it will show the final price of this order (before and after taking into account promotions in total - without specifying for individual products).

The data should be retrieved from an external source (e.g. JSON file). Design a data model that you would like to get from an external provider. Ensure that the model is readable and easy to modify (adding another product, changing prices, adding more years), and ready for further development.

The program should work not only for the sample data listed below, but also if the product data, price list data changes. It should implement solutions that will allow to carry out the appropriate calculations that result from the sample data (discounting, the possibility of bundling, the inability to add a product dependent on others).

**Make the application using React technology**. Ensure the cleanliness and high maintainability of your solution, using familiar good programming practices

Sample data

List of services:

- Internet
- Television
- Telephone Subscription
- 4K decoder

Prices for services may vary depending on the year selected. What we currently know about prices is that:

- Internet costs 39 PLN in 2023, 49 PLN in 2024 and 59 PLN in 2025,
- Television costs 49 PLN in 2023, 49 PLN in 2024 and 59 PLN in 2025,
- The "Internet + TV" package costs less - 79 PLN in 2023, 89 PLN in 2024, 99 PLN in 2025,
- The "Internet + Phone Subscription" package costs 64 PLN in each year,
- Telephone subscription costs 29 PLN,
- A 4K decoder costs 29 PLN, and is available for free in the "Internet + TV" package.

It makes no sense that a customer can order a "4K decoder" without ordering TV. Ensure that the program calculates the most favorable price solution for the user. Discounts do not overlap - the more favorable solution for the user wins.

## Setup

To run the application, make sure you have Node.js and Yarn installed. Then, follow these steps:

1. Clone the repository.
2. Navigate to the project's root directory.
3. Install dependencies by running the following command:

```shell
yarn install
```

## Development

To start the development server, use the following command:

```shell
yarn start:calculator
```

This will launch the application in development mode. You can access it in your browser at `http://localhost:4200`.

## Testing

To run the tests, use the following command:

```shell
yarn test:calculator
```

This will execute the tests and display the results.

## Dependencies

The key dependencies used in this project are:

- `@tanstack/react-query` (version 4.29.12): Library for managing remote data fetching and caching.
- `react` (version 18.2.0): JavaScript library for building user interfaces.
- `react-dom` (version 18.2.0): Entry point to the DOM and server renderers for React.
- `react-router-dom` (version 6.11.2): Library for routing in React applications.
- `zod` (version 3.21.4): Library for data validation and parsing.

## Project Structure

The project has the following structure:

- `apps/service-price-calculator`: Contains the price calculator application code.
- `libs/calculator/core`: Contains the core logic for calculating prices and finding the best deal.
- `libs/calculator/fetch`: Contains the code for fetching data from an external source.
- `libs/calculator/types`: Contains type definitions used throughout the calculator.
- `libs/calculator/utils`: Contains utility functions used by the calculator.
