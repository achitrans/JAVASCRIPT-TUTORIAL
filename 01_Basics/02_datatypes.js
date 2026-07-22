"use strict" //treat js as newer version

//alert(3+3) // we are using nodejs,not browser


let name = "Abhilasha Chitrans";
let age = 22;
let isSchool = true;
let middlename;
let state = null;
let uniqueId = ("@Chitrans");
let bigNumber = 12345678987654321;

console.log(name);
console.log(age);
console.log(isSchool);
console.log(middlename);
console.log(state);
console.log(uniqueId);
console.log(bigNumber);

//typeof conversion

console.log(typeof name);
console.log(typeof age);
console.log(typeof isSchool);
console.log(typeof middlename);
console.log(typeof state);
console.log(typeof uniqueId);
console.log(typeof bigNumber);


//Primitive Datatype:
//Number => 2 to power 53
//bigint => For bigger numbers
//string => ""
//bollean => true/false
//null => standalone value
//undefined => value is not defined
//symbole => unique

//Non-Primitive (Reference) Data Types:
//object
//array
//Function

// create a obect represnting yourself
let person = {
    name: "Abhilasha Chitrans",
    age: 22,
    city: "Darbhanga",
    Collage: "Lovely Professional University",
    Class: "Btech From Computer Science and Technology"
};
console.log(person);

//create a array of five fav food
let fivefavfood = [
    "dal chawal aloo bhujiya",
    "paneer",
    "Icecream",
    "gulab jamun",
    "maggie"
];
console.log(fivefavfood);

//create a function that prints "welcomes to JavaScript!" and call it
function welcome() {
    console.log("Welcome to JavaScript!");
    
}
welcome();








