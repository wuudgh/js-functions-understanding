# Functions Understanding
This exercise is designed to improve your understanding of functions, function arguments and return statements.

## Learning Objectives
* Explain how functions, function arguments and returns statement work

## Questions
Go through each of the questions below, one by one, using the following process:

1. *Write down* a description of what you believe the function(s) are doing and what you think the answer to the question is. Do not skip the writing down step.
2. Run the code by typing (don't copy and paste, *type* the code for this exercise) it in to a js file and running the file with `node`. Name the file based on the question name (i.e `q1.js`, `q2.js`, etc.). Add `console.log` statements to observe values where required.
3. Did you answer correctly? If not, try to understand why not. What did you misunderstand about the code? **This step is crucial to this exercise. If the answer is not what you expected, do not move on until you understand why**. You can experiment with the code adding `console.log` messages to help you see what is happening. You can ask another member of the Cohort, you can look at previous exercises, online references, and of course you can ask the instructors using the support channel.
4. If necessary update your written answer (keep the original!) with your updated understanding.
5. Move on to the next question.

Keep your written notes in an MD file in this repository so your instructors can read it afterwards. Commit and push regularly. 

At the end of all questions, in a new MD file, write in a few paragraphs an explanation in your own words of:

* What a function is
* How function arguments work
* How return statements work

Share this final write up with your instructor.

### Q1
What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  return num1+num2
}

const result = myFunction(5,5)
```

### Q2
What is the value of `result` after calling this function? Why?

```javascript
function myFunction(num1, num2) {
  num1+num2
}

const result = myFunction(5,5)
```

### Q3
What is the value of `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
num = myFunction(num)
num = myFunction(num)
``` 

### Q4
What is the value of `add` and `num` at the end of the program? Why?

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)
```

### Q5
What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

```

### Q6
What value will be logged inside the function call? Why?

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num1, num)
```

### Q7
What will the value of counter be at the end of this program? Why?

```javascript
let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()
```

### Q8
What will the value of `result` be at the end of this program? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2
}

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
```

### Q9
What will be logged out on the console when this code rus? Why?

```javascript
function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)
```

### Q10
What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1, 100)
```

### Q11
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num2 + num3
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(1, 1, 1)
```

### Q12
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

const result = myFunction(5)
```

### Q13
What will be the value of `result` when this code runs? Why?

```javascript

function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
}

const result = myFunction(5)
```

### Q14
What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

const result = myFunction(5)
```

### Q15
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

const result = myFunction(5)
```


### Q16
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

const result = myFunction(5)
```

### Q17
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return -100

  return num1 * 10
}

const result = myFunction(5)
```

### Q18
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {

  return num1 * 10

  return -100
}

const result = myFunction(5)
```

### Q19
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num2
}

const result = myFunction(5, 10, 15)
```

### Q20
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num3
}

const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
```

### Q21
What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  const result = num1+num2
  return result
}

const result = myFunction(10, 20)
myFunction(100, 2)
```