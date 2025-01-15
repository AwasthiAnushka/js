//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// js is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ritesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);// tell about type of

//+*********************************************************

// stack (primitive), Heap (Non-primitive)

let myname = "Hellohii"

let anothername = "This"

console.log(myname);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 
userTwo.email ="Rohit"

console.log(userOne.email);
console.log(userTwo.email);





