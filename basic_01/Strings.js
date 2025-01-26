//Basic declaration of strings
const str1 = "kamal"
let h1 = 'kamall'
let h2 = `kamalll`
let str2 = "Hello"
let count = 50
let str3 = str1 + str2
//  console.log(str1,str2,str3,h1,h2)

//modern syntax for string print
//console.log(`hello my name is ${str1} and my repo count is ${count}`)

//declear string as an object

let gameName = new String('Hello World')
//console.log(gameName);

//find character using index number 

/*console.log(gameName[4]);
console.log(str1[3]); */

//String Methods 

console.log(gameName.charAt(6)); //Access charater using index
console.log(gameName.length);
/*
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof gameName);
console.log(typeof str3);
console.log(typeof h2); */

console.log(String.fromCharCode(65, 66, 67));
console.log(gameName.at(-3));

// ************************************************

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName1 = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName1.charAt(2));
console.log(gameName1.indexOf('t'));

const newString = gameName1.substring(0, 4)
console.log(newString);

const anotherString = gameName1.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName1.split('-'));







