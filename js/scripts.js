function pizza(size,topping,extraLayer,extraSause,total){
  this.size = size;
  this.topping = topping;
  this.extraLayer= extraLayer;
  this.extraSause= extraSause;
}

//pizza.prototype.total = function(){
  // return selectSize +selectExtrasause+selectExtratopping;
//}

 //function sides(drinks, breadsticks){
//   this.drinks = drinks;
  // this.breadsticks = breadsticks;
 //}


 //pizza.prototype.total = function(){
  // return selectSize + selectExtrasause + selectExtratopping;
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


     var selectSize = $("select#choose-size").val();
     var selectTopping = $("select#choose-topping").val();
     var selectExtratopping = $("select#Extra-topping").val();
     var selectExtrasause = $("select#Extra-Sause").val();
    //var total ;
     var newPizza = new pizza(selectSize,selectTopping, selectExtratopping, selectExtrasause);
     console.log(newPizza);

    // var selectDrink = $("select#choose-drink").val();
     //var selectBreadstick = $("select#choose-breadsticks").val();
    // var total;
  //   var newSides = new sides(selectDrink, selectBreadstick)

    // if(selectSize){
    //  pizza.prototype.total

    // }

  $("ul#results").append("<li><span class='pizza-info'>" + newPizza.size + "</span></li>");
  $(".pizza-info").last().click(function(){

      $("#show-info h2").text(newPizza.size);
      $(".pizza-Size").text(newPizza.size);
      $(".topping-type").text(newPizza.topping);
      $(".Extra-top").text(newPizza.extraLayer);
      $(".Extra-dipp").text(newPizza.extraSause);
      $(".total").text(newPizza.total);

    })

    $("select#choose-size").val("");
    $("select#choose-topping").val("");
    $("select#Extra-topping").val("");
    $("select#Extra-Sause").val("");
    $(".total").val("");
   })
 })
