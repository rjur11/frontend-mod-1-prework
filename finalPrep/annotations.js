// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Create function buildABear that takes in the args name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; // Assign variable greeting to string "Hey partner, my name is (arg name)- will you be my friend?" using template literals with substitution
  var demographics = [name, age]; // Assign variable demographics to an array containing name and age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // Assign variable powerSaying to string "Did you know that I can" concatenated with var specialPower and "?"
  // Create object builtBear that assigns the key value pairs of: basicInfo (demographics array), clothes to arg clothes, exterior to arg fur, fixed cost of 49.99, sayings (array of greeting, powerSaying and "Goodnight my friend"), and isCuddly(bool set to true)
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  // Return out buildBear values (do not print out)
  return builtBear
}

// Using above function, create 2 new bears
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Create new function FizzBuzz that takes in 2 nums and a range
function fizzBuzz(num1, num2, range) {
  // Iterate through our range
  for (var i = 0; i <= range; i++) {
    // If i is divisible by num1 and i is divisible by num2, log "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // if i is divisible by num1, log "fizz"
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if i is divisible by num2, log "buzz"
    } else if (i % num2 === 0) {
      console.log('buzz');
      // if i is not divisible by num1 or num2, log i
    } else {
      console.log(i);
    }
  }
}

// Print numbers 0-100 inclusive replacing multiples of 3 and/or 5 appropriately
fizzBuzz(3, 5, 100);
// Print numbers 0-400 inclusive replacing multiples of 5 and/or 8 appropriately
fizzbuzz(5, 8, 400);
