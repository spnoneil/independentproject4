// ORDER Business Logic
function OrderObj() {
  this.pizza = {};
  this.orderId = 0;
}

OrderObj.prototype.pizzaOrder = function(pizza) {
  pizza.id = this.assignID();
  this.pizza[pizza.id] = pizza;
}

OrderObj.prototype.assignID = function() {
  this.orderId += 1;
  return this.orderId;
}

OrderObj.prototype.findByID = function(id) {
  if (this.pizza[id] != undefined) {
    return this.pizza[id];
  }
  return false;
}

//PIZZA Business Logic
function PizzaObj(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

PizzaObj.prototype.costCalculator = function() {
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
let order = new OrderObj();

function showPizzas(order) {
  let pizzaOutput = $("#pizzaOutput");
  let pizzaHTML = "";
  let individualPizza = 1;
  Object.keys(order.pizza).forEach(function(key) {
    const pizza = order.findByID(key);
    pizzaHTML += "<li id=" + pizza.id + ">" + individualPizza++ + "</li>";
  });
  pizzaOutput.html(pizzaHTML);
}

function showDetails() {
  $("#pizzaOutput").on("click", "li", function() {
    $("#pizzaDetails").show();
    $("li#^1").addClass("addClass")
  })
}

//USER Interface Logic
// $(document).ready(function() {
//   $("#pizzaForm").submit(function(e) {
//     e.preventDefault();



//   })
// })





$(document).ready(function() {
  showDetails()
  $("#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#pizzaSize").val());
    let topping1 = parseInt($("#pizzaTopping1").val());
    let topping2 = parseInt($("#pizzaTopping2").val());
    let toppings = topping1 + topping2;
    let pizza = new PizzaObj(size, toppings);
    console.log(pizza)
    console.log(order)
    pizza.costCalculator();
    order.pizzaOrder(pizza);
    showPizzas(order);
    // $("#pizzaOutput").text(pizza.price);
    // $("#output").show();
    // console.log(showPizzas(pizza))
  })
})