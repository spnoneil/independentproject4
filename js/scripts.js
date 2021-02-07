// ORDER Business Logic
function OrderObj() {
  this.pizza = {};
  this.totalPrice = 0;
  this.orderId = 0;
}

OrderObj.prototype.pizzaOrder = function(pizza) {
  pizza.id = this.assignID();
  this.pizza[pizza.id] = pizza;
  this.totalPrice += pizza.price;
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

OrderObj.prototype.deletePizza = function(id) {
  if (this.pizza[id] === undefined) {
    return false;
  }
  delete this.pizza[id];
  return true;
}

//PIZZA Business Logic
function PizzaObj(name, toppings, size, value) {
  this.name = name
  this.toppings = toppings;
  this.size = size;
  this.value = value;
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
  if (this.value > 0 && this.value < 3) {
    this.price += 1;
  } else if (this.value >= 3 && this.value < 6) {
    this.price += 2;
  } else if (this.value >= 6) {
    this.price += 4;
  }
}

//USER Interface Logic

function showPizzas(order) {
  let pizzaOutput = $("#pizzaOutput");
  let pizzaHTML = "";
  let individualPizza = 1;
  Object.keys(order.pizza).forEach(function(key) {
    const pizza = order.findByID(key);
    pizzaHTML += "<li id=" + pizza.id + ">" + "Pizza " + individualPizza++ + "</li>";
  });
  pizzaOutput.html(pizzaHTML);
  $("#orderBtn").show();
}

function showDetails() {
  $("#pizzaOutput").on("click", "li", function() {
    $("#pizzaDetails").show();
    $("li").removeClass("addClass");
    $(this).addClass("addClass");
  })
}

$(document).ready(function() {
  let order = new OrderObj();
  showDetails();
  $("#pizzaForm").submit(function(e) {
    e.preventDefault();
    let size = parseInt($("#pizzaSize").val());
    let toppingValue1 = parseInt($("#pizzaTopping1").val());
    let toppingValue2 = parseInt($("#pizzaTopping2").val());
    let toppingValues = toppingValue1 + toppingValue2;
    let pizSize = "Size: " + $("#pizzaSize option:selected").text();
    let pizTop1 = $("#pizzaTopping1 option:selected").text();
    let pizTop2 = $("#pizzaTopping2 option:selected").text();
    let pizTop = "Toppings: " + pizTop1 + " & " + pizTop2;
    let pizza = new PizzaObj(pizSize, pizTop, size, toppingValues);
    pizza.costCalculator();
    order.pizzaOrder(pizza);
    showPizzas(order);
  })

  $("button#orderBtn").click(function() {
    let name = $("#nameInput").val();
    $("#inputFields, #clearOutput").hide();
    $("#output").show()
    $("#orderOutput").text(order.totalPrice)
    $("#nameOutput").text(name);
  })
  $("#goBack").click(function() {
    location.reload();
  })
})