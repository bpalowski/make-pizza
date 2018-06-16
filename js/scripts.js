
//Contructors for Pizza and Side
function Pizza(size,topping,extraLayer,extraSause){
  this.size = size;
  this.topping = topping;
  this.extraLayer= extraLayer;
  this.extraSause= extraSause;
  this.total = 0;
}
function Sides(drinks, breadsticks){
  this.drinks = drinks;
  this.breadsticks = breadsticks;
  this.total = 0;
}
//Beggining of Document
$(document).ready(function(){
  $("form#Order-Pizza").submit(function(){
    event.preventDefault();
    var selectSize = $("select#choose-size").val();
    var selectTopping = $("select#choose-topping").val();
    var selectExtratopping = $("select#Extra-topping").val();
    var selectExtrasause = $("select#Extra-Sause").val();
    var selectDrink = $("select#choose-drink").val();
    var selectBreadstick = $("select#choose-breadsticks").val();

    var newPizza = new Pizza(selectSize,selectTopping, selectExtratopping, selectExtrasause);
    var newSides = new Sides(selectDrink, selectBreadstick);
    if(selectSize === "Small"){
      var pizzaSize = 8;
    }
    if(selectSize === "Medium"){
      var pizzaSize = 10;
    }
    if(selectSize === "Large"){
      var pizzaSize = 12;
    }
    if(selectSize === "Choose"){
      var pizzaSize = 0;
    }
    if(selectExtratopping === "Pepperoni" || "Sausage"){
      var extraTopping = 1;
    }
    if(selectExtratopping === "Choose"){
      var extraTopping = 0;
    }
    if(selectExtrasause === "Barbeque" || "Tomatoe"|| "Hot"){
      var extradipping = .25;
    }
    if(selectExtrasause === "Choose"){
      var extradipping = 0;
    }
    if(selectDrink === "Coca" || "Pepsi"){
      var drinkSelect = 2;
    }
    if(selectDrink === "Choose") {
      var  drinkSelect = 0;
    }
    if(selectBreadstick === "Rolled" || "Crispy"){
      var breadstickSelect = 5;
    }
    if(selectBreadstick === "Choose"){
      var breadstickSelect = 0;
    }
    // created prototypes
    Pizza.prototype.totalCalc = function(){
      return this.total = pizzaSize + extraTopping + extradipping;
      //console.log("THis is the total: ", this.total);
    }
    Sides.prototype.totalNumtwo = function(){
      return this.total = drinkSelect + breadstickSelect;
    }
    //function to add both prototypes values
    function result (){
      var result = newPizza.totalCalc() + newSides.totalNumtwo();
      return result;
    }
    //Output
    $("ul#results").append("<li><span class='pizza-info'>" + newPizza.size + "</span></li>");
    $(".pizza-info").last().click(function(){
      $("#show-info").show();
      $("#show-info h2").text(newPizza.size);
      $(".pizza-Size").text(newPizza.size);
      $(".topping-type").text(newPizza.topping);
      $(".Extra-top").text(newPizza.extraLayer);
      $(".Extra-dipp").text(newPizza.extraSause);
      $(".side-drink").text(newSides.drinks);
      $(".side-breadstick").text(newSides.breadsticks);
      $(".total").text(result());
    })
    $("select#choose-size").val("");
    $("select#choose-topping").val("");
    $("select#Extra-topping").val("");
    $("select#Extra-Sause").val("");
    $(".total").val("");
  })
})
