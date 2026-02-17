// Javascript variables
var fullName='Supriya Shrestha';
let address='Kathmandu,Nepal';
const bloodGroup='B+';

console.log('Full Name:',fullName);
console.log('Address:',address);
console.log('Blood Group:',bloodGroup);

// Data Types
let age=25;  //number

let isStudent=false; //boolean

let name='Supriya';  //string

let hobbies=['Coding','Travelling','Cooking'];  //array

let user={
    name:'Supriya',
    age:21,
    hobbies:['Coding','Travelling','Cooking'],
    isStudent: false,
};   //object


console.log(hobbies[0]);
console.log(user['age']);
console.log(user['name']);

console.log(user.name)

// Functions
function greet(name){
    console.log('Welcome',name);
}
greet('Supriya');

// DOM manipulation
const headingElement = document.getElementById('heading-2');
console.log('Heading element by ID',headingElement);

const headingElementByIdQuery = document.querySelector('#heading-2');
console.log('Heading element by query selector',headingElementByIdQuery);

headingElementByIdQuery.textContent="Get element by query selector";
headingElementByIdQuery.style.color="blue";

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener("click",function(){
    alert("Button clicked:");
    console.log('Button Clicked');
});


