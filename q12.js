//The value of result will be 10.
//Because the function getSomeValue returns 2.
//In the function myFunction, an input of num1 was passed.
//within myFunction, getSomeValue is called there and  set to a varaible num2.
//And the myFunction returns num1 * num2, which means multiply the value num1 to that of num2.
//Out side myFubction scope there is a varaible result that has the function call myFunctionw with a value of 5
// basically what is happing is 2 * 5 which 10.

function getSomeValue() {
  return 2;
}

function myFubction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFubction(5);
