const name = "Rohan"
const repocount = 50

//console.log(name + repocount + "Value");
//``=> use backticks(stringmanipulation used as placeholder)
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('rohani')

//console.log(gameName[0]);
//console.log(gameName.__proto__); // object => {}

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));// this tell about kis index pr kon sa character hai
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




