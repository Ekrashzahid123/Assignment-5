"use strict";
console.log("Hello world");
//second question
let temperature = 20;
if (temperature <= 20) {
    console.log("It,s cold out side");
}
else {
    console.log("IT,s fine outside");
}
//third question
let number1 = 10;
console.log("The total apple is as:", number1);
let ans = number1 - 3;
console.log("The apples after the deduction is as", ans);
//fourth question
let firstname = "Ekrash";
let lastname = "Zahid";
let FullName = `The full name is as,${firstname} ${lastname}`;
console.log(FullName);
//fifth question
let number2 = 5;
let number3 = 3;
if (number2 > number3) {
    console.log("yes");
}
else {
    console.log("NO");
}
//sixth question
function calculatearea(x) {
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
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
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
function TOFINDADULT(age) {
    if (age >= 18) {
        console.log(" THE PERSON IS ADULT");
    }
    else if (age <= 18) {
        console.log("THE PERSON IS MINOR");
    }
    else {
        console.log("The PERSON IS ADULT ALREADY");
    }
}
TOFINDADULT(12);
//ten question
function Positivenumbercount() {
    let arr = [1, 2, -4, 1, 4, 5];
    let count;
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    console.log("The count of positive number in an array is", count);
}
Positivenumbercount();
/*Write a function that takes an array of words and
 returns a new array containing only the words that start with the letter 'a'.*/
let Arr = ["Apple", "Mango", "Orange", "Ali"];
function FIndELementStartwithA(Arr) {
    console.log("Print the Element that start with A");
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i][0] == "A" || Arr[i][0] == "a") {
            console.log("The Element with First letter A is as", Arr[i]);
        }
    }
}
//Create a script that logs the second to last element of an array named fruits.
FIndELementStartwithA(Arr);
let fruits1 = ["Apple", "Mango", "Orange", "Banana"];
fruits1.pop();
console.log("The second last Element of an array is as,", fruits1[2]);
//Develop a function that takes an array of numbers and returns a new array with each number squared.
let simplearr = [1, 2, 4, 5, 6];
function Square(simplearr) {
    for (let i = 0; i < simplearr.length; i++) {
        simplearr[i] = Math.pow(simplearr[i], 2);
    }
    console.log(simplearr);
}
Square(simplearr);
/*Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method.
 Log the result.*/
function reversearray(arr) {
    console.log("The original array is as", arr);
    console.log("The reversing of the array is as");
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
    return arr;
}
let arrq = [1, 2, 3, 4, 5];
reversearray(arrq);
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let maxScore = scores[0];
let minScore = scores[0];
for (let i = 0; i < scores.length; i++) {
    if (maxScore < scores[i]) {
        maxScore = scores[i];
    }
    else if (minScore > scores[i]) {
        minScore = scores[i];
    }
}
console.log("Maximum score:", maxScore);
console.log("Minimum score:", minScore);
function removeFalseyValues(arr) {
    return arr.filter((value) => {
        // Filter out falsey values: false, null, 0, "", undefined, NaN
        return (value !== false &&
            value !== null &&
            value !== 0 &&
            value !== "" &&
            value !== undefined);
    });
}
// Example usage
let arrayWithFalseyValues = [
    false,
    null,
    0,
    "",
    undefined,
    NaN,
    1,
    2,
    3,
    "hello",
];
let arrayWithoutFalseyValues = removeFalseyValues(arrayWithFalseyValues);
console.log("Array with falsey values:", arrayWithFalseyValues);
console.log("Array without falsey values:", arrayWithoutFalseyValues);
///
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let d = arr1.concat(arr2);
console.log("The concatination of the two string is as", d);
//
function EVENODDSUM() {
    let arr4 = [1, 2, 4, 5, 6];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] % 2 == 0) {
            even = arr4[i] + arr4[i];
        }
        else {
            odd = arr4[i] + arr4[i];
        }
    }
    console.log("The sum of even number are as:", even);
    console.log("The sum of odd number are as:", odd);
}
EVENODDSUM();
//Create a function that checks whether an element exists in an array. If it exists, return the index,
// otherwise return -1
function ElementExistinArray() {
    let arr5 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr5.length; i++) {
        if (arr5[i] < -1) {
            console.log("The array is Empty no element exist in an array");
        }
        else {
            console.log("There are element in the array");
            return -1;
        }
    }
}
ElementExistinArray();
//
function Smallestnoinanarray() {
    let arr3 = [1, 2, 3, 4, 5];
    let small = 1;
    for (let i = 0; i < arr3.length; i++) {
        if (small > arr3[i]) {
            small = arr3[i];
        }
    }
    console.log("The smallest Element in an array is as", small);
}
Smallestnoinanarray();
function product() {
    let arr4 = [2, 1, 3];
    let product = 1;
    for (let i = 0; i < arr4.length; i++) {
        product *= arr4[i];
    }
    console.log("The product of array is as", product);
}
product();
//
//
function dublicates() {
    let arr4 = [1, 2, 3, 3, 4, 4];
    let count = 0;
    let dublicates = 0;
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] == arr4[i + 1]) {
            count++;
            dublicates = arr4[i];
        }
    }
    console.log("The  Dublicates Element in an array is as:", dublicates);
}
dublicates();
