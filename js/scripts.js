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
}