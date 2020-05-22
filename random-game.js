// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

// // psuedocode
// random number b/w 1-0 every 1000 milliseconds
// 1++ (add 1 to the counter each time)
// get a random number
// if random number is > .75
// console.log("done")
// clear the interval and pass in the variable intervalled
// cosole.log("counter")
// exit loop

function randomGame() {
  let i;
  let counter = 0;
  let intervalled = setInterval(function () {
    counter++;
    i = Math.random();
    if (i > 0.75) {
      console.log(i);
      console.log("done");
      clearInterval(intervalled);
      console.log(counter);
    }
  }, 1000);
}
