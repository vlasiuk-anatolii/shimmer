# Shimmer

## Description
App is adaptive for all devices.

- Folders `pages`, `components`, `images`, `api`, `const`, `video` and `store` were created for better structuring my app
- `Scss` files were added for each component

### App
1. Routing was implemented at App component
1. Was adde `<header>` with links to all the pages
    - The `Logo` and the `Nav` are aligned left
    - The `Favorites` and the `Cart` are aligned right
1. Was created underline current page in `Header`
1. Was added `<footer>`
    - Was added the link to the Github repo
    - Was implemented `Back to top` button

### Home page
1. `HomePage` is available at `/` 
1. `HomePage` contains  `Header `, `Main` and `Footer`
    -  `Main` includes  `TopBanners`, `HotPrices`, `Categories`, `NewModels`
1. Products are fetched from json file 'products.json'
    -  Each product has a `type`: `oil`, `gel` or `scrub`
    - `price` is given before `discount`
    - `discount` is give in percents `%`
    - `id` is required to fetch product details
1. `Hot prices` block was implemented like 'carousel' of product`s cards
    -  All the filtering and sorting are doing on client side
    - `Card` component is used everywhere where it is needs
    -  Was added ability to use `<` and `>` buttons to scroll products.
1. Block `NewModels` and `MayLike` also are using 'carousel' such as in `Hot prices` block
1. Was added `Categories` block with the links to `/oils`, `/gels` and `/scrubs`. 

### Oils page
1. Was created `OilsPage` available at `/oils` with a `<h1>` title `Oil`
1. Was created `ProductsList` which can showing all the `oils`
1. Was added ability to sort the products by `name` (`Alphabetically`, `value="name"`) and `price` (`Cheapest`, `value="price"`) using `<select>` element.
1. `Pagination` was created using for it's components container and `Items on page` using `<select>` element with `4`, `8`, `16` and `all` options. 
    - all the pagination elements are hidden if there are a few items (less than 1 smallest page size)

### Gels and Scrubs pages
1. Was created `GelPage` page with `<h1>` title `Gel` available at `/gels` working the same way as `OilsPage`
1. Was created `ScrubssPage` with `<h1>` title `Scrub` page available at `/scrubs` working the same way as `OilsPage`
    - Was implemented `NotFound` component displayed if there are no products available containing text `<Category name> not found`

### Product details page
1. `ProductDetailsPage` was created available at `/product/:productId`
    - `ProductCard` has link to the details page
1. Was added ability to choose a picture
1. Implemented `You may also like` block with products chosen randomly

### Cart
1. Was implemented `CartPage` storing an array of `CartItems`
    - Each item has `id`, `quantity` and a `product`
1. `Add to cart` button in `ProductCart` is adding a product to the `Cart`
1. If the product is already in the `Cart` the button shows `Added to cart`
1. Was added ability to remove items from the `Cart` with a `x` button.
1. Was added ability to show message `Your cart is empty` when there are no products in the `Cart`
1. Was added ability to change the quantity in the `Cart` with buttons containing symbols `-` and `+` around the quantity.
1. Total amount and quantity are calculating automatically. 
1. `Checkout` button is showing the message `We are sorry, but this feature is not implemented yet` after clicking.
1. The total quantity is showing near the `Cart` icon in the header.

### Favorites
1. `FavoritesPage` was created and it has ability to show the `ProductsList` with all the favorite products
1. Was added ability to add/remove favorite products by pressing a hart.
1. The favorites count is showing near the `Favorites` icon in the header

## Local development
* VS Code
* ESlint
* Stylelint

### Dependencies
- redux
- react-router-dom
- typescript
- react-dom
- JS
- HTML
- SASS
- redux-toolkit
- material ui
- Node v14.18.2 and higher
- NPM v6.14.12 and higher

### Installing
* Fork and clone this repository
* Run `npm install` in your terminal
* Run `npm start`
