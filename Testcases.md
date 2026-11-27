Playwright MCP Test Prompts (Automation Exercise)

Application URL: https://automationexercise.com

Prompt 1: Register User and Delete Account

Generate a Playwright test in typeScript using @playwright/test for the following scenario:

Navigate to https://automationexercise.com
Verify that the Home page is visible successfully
Click on "Signup / Login" button
Verify that "New User Signup!" is visible
Enter a unique name and a unique email address (generate the email using a timestamp)
Click on "Signup" button
Verify that "ENTER ACCOUNT INFORMATION" is visible
Fill in the account details: Title, Password, Date of birth (Day, Month, Year)
Select the checkbox "Sign up for our newsletter!"
Select the checkbox "Receive special offers from our partners!"
Fill in the address details: First name, Last name, Company, Address, Country, State, City, Zipcode, Mobile Number
Click on "Create Account" button
Verify that "ACCOUNT CREATED!" is visible
Click on "Continue" button
Verify that "Logged in as <username>" is visible
Click on "Delete Account" button
Verify that "ACCOUNT DELETED!" is visible and click on "Continue" button
Prompt 2: Login Functionality (Data Driven)

Generate a Playwright test in typeScript using @playwright/test for the following scenario:

Open the application URL: https://automationexercise.com
Use a data-driven approach with the following test dataset:
Email: <registered_email> | Password: <registered_password> | Expected: "Logged in as <username>" should be visible
Email: wrong_user@test.com | Password: wrongpass | Expected: Error message "Your email or password is incorrect!"
Email: <registered_email> | Password: wrongpass | Expected: Error message "Your email or password is incorrect!"
For each dataset, perform the following steps:
Navigate to the home page
Click on "Signup / Login" button
Verify that "Login to your account" is visible
Enter the email and password
Click on the "Login" button
Validate the expected result:
Verify "Logged in as <username>" is visible for valid credentials
Verify the expected error message is displayed for invalid credentials
If login is successful:
Click on "Logout"
Verify that the user is navigated to the login page
Ensure the browser is closed after executing all test scenarios.
Prompt 3: Search Product

Generate a Playwright test in JavaScript using @playwright/test for the following scenario:

Navigate to https://automationexercise.com
Verify that the Home page is visible successfully
Click on "Products" button
Verify that the user is navigated to the "ALL PRODUCTS" page successfully
Enter the product name "Blue Top" in the search input and click on the search button
Verify that "SEARCHED PRODUCTS" is visible
Verify that all the products related to the search are visible
Verify that "Blue Top" is listed in the search results
Prompt 4: Add Products to Cart

Generate a Playwright test in JavaScript using @playwright/test for the following scenario:

Navigate to https://automationexercise.com
Click on "Products" button
Hover over the first product and click on "Add to cart"
Click on "Continue Shopping" button
Hover over the second product and click on "Add to cart"
Click on "View Cart" button
Verify that both products are added to the cart
Verify the price, quantity and total price for each product
Verify that the total price of each product equals price multiplied by quantity
Prompt 5: Place Order (End to End, Register While Checkout)

Generate a Playwright test in JavaScript using @playwright/test for the following scenario:

Navigate to https://automationexercise.com
Verify that the Home page is visible successfully
Add the product "Blue Top" to the cart
Click on "Cart" button
Verify that the Cart page is displayed
Click on "Proceed To Checkout"
Click on "Register / Login" button in the popup
Fill in the signup details (use a unique name and email) and create the account
Verify that "ACCOUNT CREATED!" is visible and click on "Continue"
Verify that "Logged in as <username>" is visible
Click on "Cart" button and then click on "Proceed To Checkout"
Verify the address details and the order review (the product "Blue Top" is listed)
Enter a description in the comment text area and click on "Place Order"
Enter the payment details: Name on Card, Card Number, CVC, Expiration month, Expiration year
Click on "Pay and Confirm Order" button
Verify the success message "Your order has been placed successfully!"
Click on "Delete Account" button
Verify that "ACCOUNT DELETED!" is visible and click on "Continue"
Prompt 6: Contact Us Form

Generate a Playwright test in JavaScript using @playwright/test for the following scenario:

Navigate to https://automationexercise.com
Verify that the Home page is visible successfully
Click on "Contact us" button
Verify that "GET IN TOUCH" is visible
Enter name, email, subject and message
Upload a file (use a small sample file from the "test_data" folder)
Click on "Submit" button
Click "OK" on the browser alert popup
Verify that the success message "Success! Your details have been submitted successfully." is visible
Click on "Home" button and verify that the user is navigated to the Home page successfully