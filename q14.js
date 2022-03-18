//The value for result will be 4.
//Because the function getSomeValue is returning 2.
//And in the function myFunction is returning getSomeValue() * getSomeValu()
//so basically what is happening here is 2 * 2 which will be 4 within the myFunction scope.
//where ever myFunction is invoked 2 * 2 is what is happening.
//And in the code below it is invoked and saved in a variable call result.

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);
