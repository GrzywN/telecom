# Recruitment task

## Move on to the next stage of recruitment! Take matters into your own hands and solve the recruitment task.

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
