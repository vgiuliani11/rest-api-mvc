# REST API MVC

REST API implementation in Node.js and Express, using MVC architecture, for the Software Architecture course from XP
Educação.

## Usage

To run the server, use the following command:

```
npm start
```

## API - Products

This API provides CRUD operations and queries using the RESTful architecture.

### Endpoints

#### List all products

- Method: `GET`
- URL: `/product/`
- Description: Returns all registered products
- Response example:
  ```
  [
    { "id": 1, "name": "Keyboard", "price": 150 },
    { "id": 2, "name": "Mouse", "price": 80 }
  ]
  ```

#### Create new or update existing product

- Method: `POST`
- URL: `/product/`
- Body JSON:
  ```
  {
    "name": "Monitor",
    "price": 800
  }
  ```
- Description: Inserts (new or existing) product object to the database
- Response example:
  ```
  {
    "id": 3,
    "name": "Monitor",
    "price": 800
  }

  ```

#### Remove a product

- Method: `DELETE`
- URL: `/product/:id`
- Description: Remove a product with specified ID
- Request example: `DELETE /product/3"`
- Response example:
  ```
  { "message": "Product removed" }

  ```

#### Count all products

- Method: `GET`
- URL: `/product/count`
- Description: Returns the count of all products
- Response example:
  ```
  { "total": 3 }

  ```

#### Find product by ID

- Method: `GET`
- URL: `/product/:id`
- Description: Returns a product object which ID matches the query
- Request example: `GET /product/2"`
- Response example:
  ```
  { "id": 2, "name": "Mouse", "price": 80 }
  ```

#### Find product by name

- Method: `GET`
- URL: `/product/name/:name`
- Description: Return a product object which name matches the query
- Request example: `GET /product/name/keyboard"`
- Response example:
  ```
  { "id": 1, "name": "Keyboard", "price": 150 }

  ```
