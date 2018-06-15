function pizza(size, topping){
  this.size = size;
  this.topping = topping;
}
 function sides(drinks, breadsticks){
   this.drinks = drinks;
   this.breadsticks = breadsticks;
 }

 $(document).ready(function(){
   $("form#Order-Pizza").submit(function(){
     event.preventDefault();
     //console.log("Hello");

     var selectSize = $("select#size").val();
     var selectTopping = $("select#topping").val();
     var selectSause = $("select#sause").val();
     var selectDrink = $("select#choose-drink").val();
     var selectBreadstick = $("select#choose-breadsticks").val();
     var newPizza = new Pizza(selectSize, selectTopping, selectSause, selectDrink, selectBreadstick)


   })
 })
