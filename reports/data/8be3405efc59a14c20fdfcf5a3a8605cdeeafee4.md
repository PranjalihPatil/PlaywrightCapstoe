# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addShirtToCart.spec.ts >> Add Shirt to Cart >> should search for a shirt, add to cart, and verify it appears in the cart
- Location: tests\addShirtToCart.spec.ts:16:3

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.check: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#id_gender1')
    - locator resolved to <input value="Mr" type="radio" name="title" id="id_gender1"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - banner [ref=f1e2]:
    - generic [ref=f1e5]:
      - link [ref=f1e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f1e9]
      - list [ref=f1e12]:
        - listitem [ref=f1e13]:
          - link " Home" [ref=f1e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e15]: 
            - text: Home
        - listitem [ref=f1e16]:
          - link " Products" [ref=f1e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f1e18]: 
            - text: Products
        - listitem [ref=f1e19]:
          - link " Cart" [ref=f1e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f1e21]: 
            - text: Cart
        - listitem [ref=f1e22]:
          - link " Signup / Login" [ref=f1e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f1e24]: 
            - text: Signup / Login
        - listitem [ref=f1e25]:
          - link " Test Cases" [ref=f1e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f1e27]: 
            - text: Test Cases
        - listitem [ref=f1e28]:
          - link " API Testing" [ref=f1e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f1e30]: 
            - text: API Testing
        - listitem [ref=f1e31]:
          - link " Video Tutorials" [ref=f1e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f1e33]: 
            - text: Video Tutorials
        - listitem [ref=f1e34]:
          - link " Contact us" [ref=f1e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f1e36]: 
            - text: Contact us
  - generic [ref=f1e41]:
    - heading "Enter Account Information" [level=2] [ref=f1e42]
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]: Title
        - generic [ref=f1e47]:
          - radio "Mr." [ref=f1e49]
          - text: Mr.
        - generic [ref=f1e51]:
          - radio "Mrs." [ref=f1e53]
          - text: Mrs.
      - generic [ref=f1e54]:
        - generic [ref=f1e55]:
          - text: Name
          - superscript [ref=f1e56]: "*"
        - textbox "Name *" [ref=f1e57]: TestUser
      - generic [ref=f1e58]:
        - generic [ref=f1e59]:
          - text: Email
          - superscript [ref=f1e60]: "*"
        - textbox "Email *" [disabled] [ref=f1e61]: testuser_1795676944560@test.com
      - generic [ref=f1e62]:
        - generic [ref=f1e63]:
          - text: Password
          - superscript [ref=f1e64]: "*"
        - textbox "Password *" [ref=f1e65]
      - generic [ref=f1e66]:
        - generic [ref=f1e67]: Date of Birth
        - generic [ref=f1e68]:
          - combobox [ref=f1e71]:
            - option "Day" [selected]
            - option "1"
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
            - option "10"
            - option "11"
            - option "12"
            - option "13"
            - option "14"
            - option "15"
            - option "16"
            - option "17"
            - option "18"
            - option "19"
            - option "20"
            - option "21"
            - option "22"
            - option "23"
            - option "24"
            - option "25"
            - option "26"
            - option "27"
            - option "28"
            - option "29"
            - option "30"
            - option "31"
          - combobox [ref=f1e74]:
            - option "Month" [selected]
            - option "January"
            - option "February"
            - option "March"
            - option "April"
            - option "May"
            - option "June"
            - option "July"
            - option "August"
            - option "September"
            - option "October"
            - option "November"
            - option "December"
          - combobox [ref=f1e77]:
            - option "Year" [selected]
            - option "2021"
            - option "2020"
            - option "2019"
            - option "2018"
            - option "2017"
            - option "2016"
            - option "2015"
            - option "2014"
            - option "2013"
            - option "2012"
            - option "2011"
            - option "2010"
            - option "2009"
            - option "2008"
            - option "2007"
            - option "2006"
            - option "2005"
            - option "2004"
            - option "2003"
            - option "2002"
            - option "2001"
            - option "2000"
            - option "1999"
            - option "1998"
            - option "1997"
            - option "1996"
            - option "1995"
            - option "1994"
            - option "1993"
            - option "1992"
            - option "1991"
            - option "1990"
            - option "1989"
            - option "1988"
            - option "1987"
            - option "1986"
            - option "1985"
            - option "1984"
            - option "1983"
            - option "1982"
            - option "1981"
            - option "1980"
            - option "1979"
            - option "1978"
            - option "1977"
            - option "1976"
            - option "1975"
            - option "1974"
            - option "1973"
            - option "1972"
            - option "1971"
            - option "1970"
            - option "1969"
            - option "1968"
            - option "1967"
            - option "1966"
            - option "1965"
            - option "1964"
            - option "1963"
            - option "1962"
            - option "1961"
            - option "1960"
            - option "1959"
            - option "1958"
            - option "1957"
            - option "1956"
            - option "1955"
            - option "1954"
            - option "1953"
            - option "1952"
            - option "1951"
            - option "1950"
            - option "1949"
            - option "1948"
            - option "1947"
            - option "1946"
            - option "1945"
            - option "1944"
            - option "1943"
            - option "1942"
            - option "1941"
            - option "1940"
            - option "1939"
            - option "1938"
            - option "1937"
            - option "1936"
            - option "1935"
            - option "1934"
            - option "1933"
            - option "1932"
            - option "1931"
            - option "1930"
            - option "1929"
            - option "1928"
            - option "1927"
            - option "1926"
            - option "1925"
            - option "1924"
            - option "1923"
            - option "1922"
            - option "1921"
            - option "1920"
            - option "1919"
            - option "1918"
            - option "1917"
            - option "1916"
            - option "1915"
            - option "1914"
            - option "1913"
            - option "1912"
            - option "1911"
            - option "1910"
            - option "1909"
            - option "1908"
            - option "1907"
            - option "1906"
            - option "1905"
            - option "1904"
            - option "1903"
            - option "1902"
            - option "1901"
            - option "1900"
      - generic [ref=f1e78]:
        - checkbox "Sign up for our newsletter!" [ref=f1e79]
        - text: Sign up for our newsletter!
      - generic [ref=f1e80]:
        - checkbox "Receive special offers from our partners!" [ref=f1e81]
        - text: Receive special offers from our partners!
      - heading "Address Information" [level=2] [ref=f1e82]
      - paragraph [ref=f1e83]:
        - generic [ref=f1e84]:
          - text: First name
          - superscript [ref=f1e85]: "*"
        - textbox "First name *" [ref=f1e86]
      - paragraph [ref=f1e87]:
        - generic [ref=f1e88]:
          - text: Last name
          - superscript [ref=f1e89]: "*"
        - textbox "Last name *" [ref=f1e90]
      - paragraph [ref=f1e91]:
        - generic [ref=f1e92]: Company
        - textbox "Company" [ref=f1e93]
      - paragraph [ref=f1e94]:
        - generic [ref=f1e95]:
          - text: Address
          - superscript [ref=f1e96]: "*"
          - text: (Street address, P.O. Box, Company name, etc.)
        - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=f1e97]
      - paragraph [ref=f1e98]:
        - generic [ref=f1e99]: Address 2
        - textbox "Address 2" [ref=f1e100]
      - paragraph [ref=f1e101]:
        - generic [ref=f1e102]:
          - text: Country
          - superscript [ref=f1e103]: "*"
        - combobox "Country *" [ref=f1e104]:
          - option "India" [selected]
          - option "United States"
          - option "Canada"
          - option "Australia"
          - option "Israel"
          - option "New Zealand"
          - option "Singapore"
      - paragraph [ref=f1e105]:
        - generic [ref=f1e106]:
          - text: State
          - superscript [ref=f1e107]: "*"
        - textbox "State *" [ref=f1e108]
      - paragraph [ref=f1e109]:
        - generic [ref=f1e110]:
          - text: City
          - superscript [ref=f1e111]: "*"
        - textbox "City * Zipcode *" [ref=f1e112]
      - paragraph [ref=f1e113]:
        - generic [ref=f1e114]:
          - text: Zipcode
          - superscript [ref=f1e115]: "*"
        - textbox [ref=f1e116]
      - paragraph [ref=f1e117]:
        - generic [ref=f1e118]:
          - text: Mobile Number
          - superscript [ref=f1e119]: "*"
        - textbox "Mobile Number *" [ref=f1e120]
      - button "Create Account" [ref=f1e121] [cursor=pointer]
  - contentinfo [ref=f1e122]:
    - generic [ref=f1e127]:
      - heading "Subscription" [level=2] [ref=f1e128]
      - generic [ref=f1e129]:
        - textbox "Your email address" [ref=f1e130]
        - button "" [ref=f1e131] [cursor=pointer]
        - paragraph [ref=f1e133]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e137]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |   readonly loginEmail: Locator;
  6  |   readonly loginPassword: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly loginErrorMessage: Locator;
  9  | 
  10 |   readonly signupName: Locator;
  11 |   readonly signupEmail: Locator;
  12 |   readonly signupButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 |     this.loginEmail = page.locator('[data-qa="login-email"]');
  17 |     this.loginPassword = page.locator('[data-qa="login-password"]');
  18 |     this.loginButton = page.locator('[data-qa="login-button"]');
  19 |     this.loginErrorMessage = page.locator('p:has-text("Your email or password is incorrect!")');
  20 | 
  21 |     this.signupName = page.locator('[data-qa="signup-name"]');
  22 |     this.signupEmail = page.locator('[data-qa="signup-email"]');
  23 |     this.signupButton = page.locator('[data-qa="signup-button"]');
  24 |   }
  25 | 
  26 |   async navigate() {
  27 |     await this.navigateTo('/login');
  28 |   }
  29 | 
  30 |   async login(email: string, password: string) {
  31 |     await this.loginEmail.fill(email);
  32 |     await this.loginPassword.fill(password);
  33 |     await this.loginButton.click();
  34 |   }
  35 | 
  36 |   async signup(name: string, email: string) {
  37 |     await this.signupName.fill(name);
  38 |     await this.signupEmail.fill(email);
  39 |     await this.signupButton.click();
  40 |   }
  41 | 
  42 |   async fillRegistrationForm(userData: {
  43 |     password: string;
  44 |     firstName: string;
  45 |     lastName: string;
  46 |     company: string;
  47 |     address: string;
  48 |     address2: string;
  49 |     country: string;
  50 |     state: string;
  51 |     city: string;
  52 |     zipcode: string;
  53 |     mobileNumber: string;
  54 |   }) {
> 55 |     await this.page.locator('#id_gender1').check();
     |                                            ^ Error: locator.check: Test timeout of 60000ms exceeded.
  56 |     await this.page.locator('[data-qa="password"]').fill(userData.password);
  57 |     await this.page.locator('[data-qa="days"]').selectOption('10');
  58 |     await this.page.locator('[data-qa="months"]').selectOption('June');
  59 |     await this.page.locator('[data-qa="years"]').selectOption('1990');
  60 |     await this.page.locator('[data-qa="first_name"]').fill(userData.firstName);
  61 |     await this.page.locator('[data-qa="last_name"]').fill(userData.lastName);
  62 |     await this.page.locator('[data-qa="company"]').fill(userData.company);
  63 |     await this.page.locator('[data-qa="address"]').fill(userData.address);
  64 |     await this.page.locator('[data-qa="address2"]').fill(userData.address2);
  65 |     await this.page.locator('[data-qa="country"]').selectOption(userData.country);
  66 |     await this.page.locator('[data-qa="state"]').fill(userData.state);
  67 |     await this.page.locator('[data-qa="city"]').fill(userData.city);
  68 |     await this.page.locator('[data-qa="zipcode"]').fill(userData.zipcode);
  69 |     await this.page.locator('[data-qa="mobile_number"]').fill(userData.mobileNumber);
  70 |     await this.page.locator('[data-qa="create-account"]').click();
  71 |   }
  72 | }
  73 | 
```