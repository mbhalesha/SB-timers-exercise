// countDown
// Write a function called countDown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// // 3
// // 2
// // 1
// // "DONE!"

function countdown(i) {
  setTimeout(function () {
    console.log(i);
    i--;
    if (i >= 1) {
      countdown(i);
    } else {
      console.log("DONE!");
    }
  }, 1000);
}

// in the console: countdown(4)
