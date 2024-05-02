console.log("Hello world");
//second question
let temperature: number = 20;
if (temperature <= 20) {
  console.log("It,s cold out side");
} else {
  console.log("IT,s fine outside");
}

//third question
let number1 = 10;
console.log("The total apple is as:", number1);
let ans = number1 - 3;
console.log("The apples after the deduction is as", ans);

//fourth question

let firstname: string = "Ekrash";
let lastname: string = "Zahid";
let FullName: string = `The full name is as,${firstname} ${lastname}`;
console.log(FullName);

//fifth question

let number2 = 5;
let number3 = 3;
if (number2 > number3) {
  console.log("yes");
} else {
  console.log("NO");
}

//sixth question
function calculatearea(x: number) {
  let calculatearea;
  let radius = 9;
  const pi = 3.14;
  calculatearea = pi * (radius * radius);
  return calculatearea;
}

calculatearea(3);

//seven question

for (let i = 1; i < 50; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//eight question
let arr = [23, 77, 87, 12, 88];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log("The max Temperature  is as", max);
//nine question
function TOFINDADULT(age: number) {
  if (age >= 18) {
    console.log(" THE PERSON IS ADULT");
  } else if (age <= 18) {
    console.log("THE PERSON IS MINOR");
  } else {
    console.log("The PERSON IS ADULT ALREADY");
  }
}

TOFINDADULT(12);

//ten question

function Positivenumbercount() {
  let arr = [1, 2, -4, 1, 4, 5];
  let count: number;
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  console.log("The count of positive number in an array is", count);
}

Positivenumbercount();
//11 questions
//Write a function that takes an array of words and returns
// a new array containing only the words that start with the letter 'a'.

function Arrayofwords(Arr_name: string[]) {}

/*Write a JavaScript function that accepts an array and reverses its elements without 
using the .reverse() method. Log the result.*/

// question no 21
/*Write a function calculateProduct that takes an array of numbers
 and returns the product of all elements.
*/
let arr_prod = [1, 2, 3, 4];
function arrayProd(arr_prod: number[]) {
  let prod;
  for (let i = 1; i < arr_prod.length; i++) {
    prod = arr_prod[i] * arr_prod[i];
  }
  console.log("The Product of Array is as:", prod);
}

arrayProd(arr_prod);
//question 23
/*Create a function findDuplicates that finds and logs all duplicates in an array.*/
let arr_duplicate = [1, 2, 3, 4, 5, 6];

function findDuplicates(arr_duplicate: number[]) {
  let count = 0;
  for (let k = 0; k < arr_duplicate.length - 1; k++) {
    if (arr_duplicate[k] === arr_duplicate[k + 1]) {
      count++;
    }
  }
  if (count > 0) {
    console.log("There are duplicate elements in the array");
  } else {
    console.log("There are no duplicate elements in the array");
  }
}

findDuplicates(arr_duplicate);
