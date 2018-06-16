

function pizza(size,topping,extraLayer,extraSause,total){
  this.size = size;
  this.topping = topping;
  this.extraLayer= extraLayer;
  this.extraSause= extraSause;
}
//pizza.prototype.total = function(){
// return selectSize +selectExtrasause+selectExtratopping;
//}

function sides(drinks, breadsticks,sum){
 this.drinks = drinks;
 this.breadsticks = breadsticks;
}

//pizza.prototype.total = function(){
//  return pizzaSize + selectExtratopping + selectExtrasause;
//}

//sides.prototype.total = function(){
//return selectDrink + selectBreadstick;
//}

$(document).ready(function(){
  $("form#Order-Pizza").submit(function(){
    event.preventDefault();
    //console.log("Hello");
    //pizza.prototype.total = function(){
    //  return selectSize +selectExtrasause+selectExtratopping;
    //}

    debugger;

    pizza.prototype.total = function(){
      return pizzaSize + extraTopping + extradipping;
    }

    sides.prototype.sum = function(){
      return drinkSelect + breadstickSelect;
    }

    //var together =function( side, pizza){
    //  return pizza.prototype.total + sides.prototype.sum;
    //}

    var selectSize = $("select#choose-size").val();
    var selectTopping = $("select#choose-topping").val();
    var selectExtratopping = $("select#Extra-topping").val();
    var selectExtrasause = $("select#Extra-Sause").val();
    var selectDrink = $("select#choose-drink").val();
    var selectBreadstick = $("select#choose-breadsticks").val();

    //var total ;
    //var newSides = new sides(selectDrink, selectBreadstick);
    var newPizza = new pizza(selectSize,selectTopping, selectExtratopping, selectExtrasause);
    //var newSides = new sides(selectDrink, selectBreadstick);

    if(selectSize === "Small"){
      var pizzaSize = 8;
    }
    if(selectSize === "Small"){
      var pizzaSize = 8;
    }
    if(selectSize === "Medium"){
      var pizzaSize = 10;
    }
    if(selectSize === "Large"){
      var pizzaSize = 12;
    }
    if(selectExtratopping === "Pepperoni" || "Sausage"){
      var extraTopping = 1;
    }
      if(selectExtratopping === "None"){
      var extraTopping = 0;
    }
    if(selectExtrasause === "Barbeque" || "Tomatoe"|| "Hot"){
      var extradipping = .25;
    }
    if(selectExtrasause === "None"){
      var extradipping = 0;
    }
    var newSides = new sides(selectDrink, selectBreadstick);
    if(selectDrink === "Coca"){
      var drinkSelect = 2;
    }
    if(selectDrink === "Pepsi"){
      var drinkSelect = 2;
    }
    if(selectBreadstick === "Rolled"){
      var breadstickSelect = 5;
    }
    if(selectBreadstick === "Crispy"){
      var breadstickSelect = 5;
    }




    // var selectDrink = $("select#choose-drink").val();
    //var selectBreadstick = $("select#choose-breadsticks").val();
    // var total;
    //   var newSides = new sides(selectDrink, selectBreadstick)

    // if(selectSize){
    //  pizza.prototype.total

    // }

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
      $(".total").text(newPizza.total);
      $(".sum").text(newSides.sum);
    })
    $("select#choose-size").val("");
    $("select#choose-topping").val("");
    $("select#Extra-topping").val("");
    $("select#Extra-Sause").val("");
    $(".total").val("");
    $(".sum").val("");
  })
})
