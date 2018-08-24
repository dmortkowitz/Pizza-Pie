// business logic
function Pizza(pizzaSize,crust,topChoice) {
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.topChoice = topChoice;
}

var pizzaSizes = {"small":10, "medium":14, "large":18}
var crusts = {"regular":0, "glutenFree":+2, "rustic":+2}
var topChoices = {"cheese":0, "pepperoni":+2, "threeMeat":+5, "vegan":+3, "veggie":+2, "blueMoon":+2, "theDavid":+3}

Pizza.prototype.pizzaPrice = function(){
  return pizzaSizes[this.pizzaSize] + crusts[this.crust] + topChoices[this.topChoice]
};

// user interface
$(document).ready(function(){
  $("form#pizzaSubmit").submit(function(event) {
  event.preventDefault();

  var sizeInput = $("#pizzaSize").val();
  var crustInput = $("#crust").val();
  var topInput = $("#topChoice").val();
  var newPizza = new Pizza(sizeInput, crustInput, topInput);
  $("#price").text("");
  $("#price").append("YOUR PERFECT PIZZA PRICE IS $" + newPizza.pizzaPrice());
  

  });
});