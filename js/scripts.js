// business logic
function Pizza(crust,pizzaSize,topChoice) {
  this.crust = crust;
  this.pizzaSize = pizzaSize;
  this.topChoice = topChoice;
}
var crusts = {"regular":0, "glutenFree":+2, "rustic":+2}
var pizzaSizes = {"small":10, "medium":14, "large":18}
var topChoices = {"cheese":0, "pepperoni":+2, "threeMeat":+5, "vegan":+3, "veggie":+2, "blueMoon":+2, "theDavid":+3}

Pizza.prototype.pizzaPrice = function(){
  return crusts[this.crust] + pizzaSizes[this.pizzaSize] + topChoices[this.topChoice]
};

// user interface
$(document).ready(function(){
  $("form#pizzaSubmit").submit(function(event) {
  event.preventDefault();

  var crustInput = $("#crust").val();
  var sizeInput = $("#pizzaSize").val();
  var topInput = $("#topChoice").val();
  var newPizza = new Pizza(crustInput, sizeInput, topInput);
  $("#price").text("");
  $("#price").append(" $" + newPizza.pizzaPrice());

  });
});