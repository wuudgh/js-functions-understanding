//The value of counter at the end of the program will be 3.
//It so because outside of the function block counter has a value of 1,
//and couter++ within the function, adds 1 to counter when ever the function is been called.
//In the code below the function is called two times and any time it is called it increases
// counter by 1. Which already has a value of 1.

let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();
