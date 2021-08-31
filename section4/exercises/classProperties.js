/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
/*
class Dog {};
var corgi = new Dog();
var germanShep = new Dog();
console.log(corgi);
console.log(germanShep);

// Prompt 2: Snack
class Snack {};
var chips = new Snack();
var candy = new Snack();
console.log(chips);
console.log(candy);

// Prompt 3: Shirt
class Shirt {};
var polo = new Shirt();
var blouse = new Shirt();
console.log(polo);
console.log(blouse);
*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*
class Dog {
  constructor() {
    this.breed = "Corgi";
    this.age = 5;
    this.color = "Brown";
  }
}
var corgiDog = new Dog();
console.log(corgiDog);
// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = "Chips";
    this.brand = "Pringles";
    this.calories = 230;
  }
}
var chipsSnack = new Snack();
console.log(chipsSnack);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.style = "Polo";
    this.color = "Blue with white stripes";
    this.price = 35;
  }
}
var poloShirt = new Shirt();
console.log(poloShirt);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, age, color) {
    this.breed = breed;
    this.age = age;
    this.color = color;
  }
}
var newDog = new Dog("Corgi", 5, "Brown");
var secondNewDog = new Dog("German Shepherd", 2, "Brown with Black Ears");
console.log(newDog, secondNewDog);

// Prompt 2: Snack
class Snack {
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
  }
}
var newSnack = new Snack("Chips", "Pringles", 2);
var secondNewSnack = new Snack("Chocolate Bar", "Hersheys", 1.5);
console.log(newSnack, secondNewSnack);

// Prompt 3: Shirt
class Shirt {
  constructor(style, color, price) {
    this.style = style;
    this.color = color;
    this.price = price;
  }
}
var newShirt = new Shirt("Polo", "Red with Yellow Polkadots", 35);
var secondNewShirt = new Shirt("Blouse", "White", 22);
console.log(newShirt, secondNewShirt);
