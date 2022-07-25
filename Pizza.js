function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var za = {};
    za.crustType = crustType;
    za.sauceType = sauceType;
    za.cheeses = cheeses;
    za.toppings = toppings;
    return za;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("cheesy crust", "marinara", ["mozzerella"], ["ham", "pineapple"]);
console.log(pizza2); 

var pizza3 = pizzaOven("thin crust", "tomato basil", ["feta"], ["banana peppers", "olives", "turkey bacon"]);
console.log(pizza3);

var pizza4 = pizzaOven("cheesy crust", "arribiatta", ["no cheese"], ["basil", "garlic", "onions"]);
console.log(pizza4); 



// randomizer
// function randomPizza(){
// var random_za = Math.floor(Math.random()* pizzaOven.length);

// return pizza[random_za]
// }

// console.log(randomPizza())