# Lumen PHP Pizza API

## Requirements
- PHP >= 8.0
- Composer
- MySQL >= 5.2

## Environment Variables
- DB_CONNECTION=mysql
- DB_HOST=
- DB_PORT=
- DB_DATABASE=
- DB_USERNAME=
- DB_PASSWORD=

## Installation

- Clone the repository
- Run `composer install`
- Copy `.env.example` to `.env` or add the environment variables to your server
- Run `php artisan migrate`
- Run `php artisan db:seed`

## Endpoints

- `GET /api/pizzas` - Get all pizzas
- `GET /api/pizzas/{id}` - Get pizza by id
- `POST /api/pizzas` - Create a new pizza
- `PUT /api/pizzas/{id}` - Update a pizza
- `DELETE /api/pizzas/{id}` - Delete a pizza

## Data

- `name` - The name of the pizza
- `description` - A description of the pizza
- `price` - The price of the pizza
- `image` - The image of the pizza

## Example

```
{
  "id": 1,
  "name": "Pizza Margherita",
  "description": "A classic pizza with tomato sauce, mozzarella and basil",
  "price": 8.99,
  "image": "https://images.unsplash.com/photo-1556905053-3d9a9a5a1d0e"
}
```

## Author

- Hansel Ramos <hansell.ramos@gmail.com>

## Copyright 2023

