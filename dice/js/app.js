/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)


3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

function randomiser() {
  return Math.floor(Math.random() * 6 + 1);
}

var rollDelay = randomiser() * 30;
var numRolls = randomiser() * 3;

document.getElementById('roll-dice').onclick = function() {
  (function roll (i) {
    setTimeout(function () {
      if (i <= numRolls ) { // If i > 0, keep going
        var random1 = randomiser();
        document.getElementById('first-die').className = "dice-" + random1;
        i++;
        roll(i);       // Call the loop again, and pass it the current value of i
      }
    }, rollDelay);
  })(0);
  (function roll (i) {
    setTimeout(function () {
      if (i <= numRolls ) { // If i > 0, keep going
        var random1 = randomiser();
        document.getElementById('second-die').className = "dice-" + random1;
        i++;
        roll(i);       // Call the loop again, and pass it the current value of i
      }
    }, rollDelay);
  })(0);
}
