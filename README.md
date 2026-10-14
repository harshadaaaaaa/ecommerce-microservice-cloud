# ShopNest Ecommerce | Microservices Architecture

A polished ecommerce demo using Node.js + Express, separated into independent services.

## Services
- **API Gateway** (`3001`): serves the storefront and routes `/api/*` requests
- **Product Service** (`4001`): product catalogue
- **Cart Service** (`4002`): shopping cart and quantities
- **Order Service** (`4003`): demo order creation

## Run locally
1. Install Node.js 18 or newer.
2. Open a terminal in this folder (the folder containing `package.json`).
3. Run `npm install`, then `npm start`.
4. Open **http://localhost:3001**.

The `npm start` command launches all four processes together. Keep the terminal open while using the app. Stop all services with `Ctrl+C`.

## Architecture
`Browser → API Gateway → Product Service / Cart Service / Order Service`

Data is held in memory and resets when a service restarts. Checkout is simulated and does not process payments. Docker is not needed for Assignment 1 unless your lecturer explicitly requires it.
