"use strict"; //treat all js code as newer version

let num = 33

/*console.log(typeof num)
let num1 = String(num) //type conversion number to string
console.log(typeof num1)
console.log(num1); */

let str = "kamal"
/*
console.log(typeof(str))
let str1 = Number(str) //type conversion string into number
console.log(typeof(str1))
console.log(str1) //output will be NaN(Not a Number) */

let isId = true
/*
console.log(typeof isId)
let isid1 = Number(isId)
console.log(typeof(isid1))
console.log(isid1) */

/* let num2 = 33
let num3 = Boolean(num2)
console.log(typeof num3)
console.log(num3)  */

/*let num2 //undefined
console.log(typeof num2) */

/* let num2=null
let num3 = Number(num2) //output => 0
console.log(num3) */

// ***************Lecture note ***************

let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion