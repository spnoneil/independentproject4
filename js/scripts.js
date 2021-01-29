// ORDER Business Logic
function Order() {
  this.pizza = {};
  this.orderId = 0;
}

Order.prototype.pizzaOrder = function(pizza) {
  pizza.id = this.assignID();
  this.pizza[pizza.id] = pizza;
}

Order.prototype.assignID = function() {
  this.orderId += 1;
  return this.orderId;
}

//PIZZA Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.costCalculator = function() {
  if (this.size === 2) {
    this.price += 1;
  } else if (this.size === 3) {
    this.price += 3;
  } else if (this.size === 4) {
    this.price += 6;
  }
  if (this.toppings > 0 && this.toppings < 3) {
    this.price += 1;
  } else if (this.toppings >= 3 && this.toppings < 6) {
    this.price += 2;
  } else if (this.toppings >= 6) {
    this.price += 4;
  }
}

//USER Business Logic
let order = new Order();
let pizzaOutput = $("#pizzaOutput");


//USER Interface Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(e) {
    e.preventDefault();



  })
})





// $(document).ready(function() {
//   $("#pizzaForm").submit(function(e) {
//     e.preventDefault();
//     let size = parseInt($("#pizzaSize").val());
//     let topping1 = parseInt($("#pizzaTopping1").val());
//     let topping2 = parseInt($("#pizzaTopping2").val());
//     let toppings = topping1 + topping2;
//     let pizza = new Pizza(size, toppings);
//     pizza.costCalculator();
//     $("#pizzaOutput").text(pizza.price);
//     $("#output").show();
//   })
// })