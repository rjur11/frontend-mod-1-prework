// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Rana";
var specialAbility = "Teleportation";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
var greeting = "Hello, I'm a superhero and my name is " + heroName;
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var catchPhrase = `My super power is ${specialAbility}`;

// Declare two variables - power AND energy - set to integers
var power = 50;
var energy = 45;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
var fullPower = power * 500;
//   fullEnergy should add 150 to your current energy
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
var archEnemies = ["Spiders", "The Joker", "The Penguin"];
//   sidekicks should be an array of at least 3 different sidekick strings
var sideKicks = ["Linus the Cat", "Batman", "Spiderman"];

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length - 1]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Darth Vader");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel


function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else if (10 < dangerLevel && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else {
    console.log(badExcuse);
  }
};

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, announcement, excuse);
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, announcement, excuse);
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3, announcement, excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Boo",
  smell: "Stinky",
  weight: 1000,
  citiesDestroyed: ["LA", "NYC", "PGH"],
  luckyNumbers: [10, 2, 1000],
  address: {number:621, street: "Penn Ave.", state: "MA", zip:15222}
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemsis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(name);
  }
  maximizeEnergy() {
    powerLevel = 1000;
  }
  gainPower(powerIncrease) {
    powerLevel + powerIncrease;
  }
}
// - Create 2 instances of your SuperHero class
var superHero1 = new SuperHero("Bob", "Invisibility", 33);
var superHero2 = new SuperHero("Linus", "Extreme Cuteness", 2);

// Reflection
// What parts were most difficult about this exerise?
/*
Keeping all the parts of an object together is a bit tricky for me.
I am working on this a few days after I did the bulk of the prework due to
my wedding and I'm currently on my honeymoon. So taking some time off from my
work makes me rusty. I'll feel more confident when I can spend more consistent
time on this work!
*/
// What parts felt most comfortable to you?
/*
I feel comfortable with variable declaration, data types, and manipulating
that data. I also feel good about functions.
*/
// What skills do you need to continue to practice before starting Mod 1?
/*
Consistent practice in general and then object familiarity.
*/
