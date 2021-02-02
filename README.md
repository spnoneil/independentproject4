# PizzaTime

#### A page simulating a pizza order, with customer able to change toppings, size, etc.
#### By **Scott O'Neil**

## Description

A website created with HTML and Javascript where a user can input a preferred pizza type/style and receive a cost

Stretch goals: complicated arithmetic for calculating cost, time/date order input, premade pizza?, select multiple toppings, delivery/pickup


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **function PizzaObj()** | let pizza = new Pizza("Large", "Pepperoni, Peppers, Olives") | pizza = { size: "Large", toppings: "Pepperoni, Peppers, Olives" } |
| **Pizza.prototype.costCalculate** | pizza.costCalculate() | pizza = { size: "Large", toppings: "Pepperoni, Peppers, Olives", price: 15} |
| **function OrderObj()** | let order = new Order() | order = { ... } |
| **Pizza.prototype.assignId** | pizza.assignId() | pizza = { size: ..., toppings: ..., id = 1++ } |
| findByID() | Order.findByID(1) | pizza { ... }

## Setup/Installation Requirements

1. Download/clone from GitHub
2. Unzip, if necessary; open local folder
3. Run index.html in browser of choice
4. Alternatively, view on [GitHub Pages](https://github.com/spnoneil/independentproject4)

## Known Bugs
* Delete button functionality not currently working

## Technologies Used
* HTML
* CSS/Bootstrap
* Javascript/jQuery
* Coded in VSCode

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2021 **_{[Scott O'Neil](https://github.com/spnoneil)}_**
