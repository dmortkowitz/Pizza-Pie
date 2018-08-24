// business logic
function Pizza(crust,pizzaSize,numToppings, topChoice) {
  this.crust = crust;
  this.pizzaSize = pizzaSize;
  this.numToppings = numTopping;
  this.topChoice = topChoice;
}
var crusts = {"regular":0, "glutenFree":+2, "rustic":+1}
var pizzaSizes = {"small":8, "medium":8, "large":10}
var topChoices = {"pepperoni":+1, "mushroom"}

Pizza.prototype.pizzaprice = function(){
  return crusts[this.crust] + pizzaSizes[this.pizzaSize] + topChoices[this.topChoice]
};

