// 1. Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.

function greet(greeting, name = "Alice"){
      return `${greeting}, ${name}`;
      
}
console.log(greet("Hi","Bob"));
console.log(greet("Hello"));

// output: // Hi, Bob // Hello, Alice
// ------------------------------------------------------------------------------------------
// 2.Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.
 
function multilineMessage (name, city){
     return `
     My name is ${name}.
     I live in ${city},
     a place I truly love. It's a wonderful city.`;
     
 }
console.log(multilineMessage("Merk", "New York"));

// output: 
// My name is Merk.
// I live in New York,
// a place I truly love. It's a wonderful city.
// ------------------------------------------------------------------------------------------
// 3.Combine two arrays using the spread operator and find the maximum value in the merged array.

let arr1 = [2, 3, 5];
let arr2 = [7, 8, 15];

const combineArray = [...arr1, ...arr2];
const maxValue = Math.max(...combineArray);
console.log(maxValue);

// output:15
// ------------------------------------------------------------------------------------------
// 4.Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.

let person = {
    names: "Steve Jobs",
    age: 54,
    country: "USA",
};


const { names, age, country} = person;
console.log(names);
console.log(age);
console.log(country);

let fiveNumber = [10, 20, 30, 40, 50];

 const [first, second] = fiveNumber;
 console.log(first);
 console.log(second);

 // output:
// Steve Jobs
// 54
// USA
// 10
// 20
// ------------------------------------------------------------------------------------------
 
//  5. Access the city property of a nested object using both dot notation and optional chaining.

let person2 = {
    namees: "Tom",
    age: 29,
    address: {
    city: "Toronto",
    country: "Canada",
    }
    
};

console.log(person2.address?.city);
console.log(person2.address.city);

// output: 
// Toronto
// Toronto
// ------------------------------------------------------------------------------------------
// 6. Given an array of student objects with properties name and marks, use:map() to extract the names.

let students = [
    {fullname: "Alex sen",  marks: 60},
    {fullname: "David Lee",  marks: 70},
    {fullname: "Liam Williams", marks: 80},
    {fullname: "Sara Johnson", marks: 90},
    {fullname: "Maya Patel", marks: 100}
];

const extractName = students.map((student) => {
    return student.fullname;
});
console.log(extractName);

// output:
// [
//     'Alex sen',
//     'David Lee',
//     'Liam Williams',
//     'Sara Johnson',
//     'Maya Patel'
//   ]

// 7. filter() to return students with marks above 80.

const filterMarks = students.filter((student) => {
    return student.marks > 80;
});

console.log(filterMarks);

// output:
//  [
//   { fullname: 'Sara Johnson', marks: 90 },
//   { fullname: 'Maya Patel', marks: 100 }
// ]
// ----------------------------------------------------------------------------------------
// 8. Use map() on a string array to create a new array where each string is prefixed with "Hello, ".

let strArray = ["Jack", "James", "Riyan", "Leo"];

const newArray = strArray.map((element) => {
    return `Hello, ${element}`;
   
});
console.log(newArray);

// output: [ 'Hello, Jack', 'Hello, James', 'Hello, Riyan', 'Hello, Leo' ]
// ----------------------------------------------------------------------------------------
// 9. Given an array of objects, use filter() to return all objects where a specific condition is met (e.g., products priced above a certain amount).

let productArray = [
    { pname: "Laptop", price: 1500 },
    { pname: "Smartphone", price: 1000 },
    { pname: "Tablet", price: 900 },
    { pname: "Mouse", price: 800},
    { pname: "Headphone", price: 500},
];

let productPrice = productArray.filter((product) => {
    return product.price > 800;
});
console.log(productPrice);

// ouptput: 
// [
//     { pname: 'Laptop', price: 1500 },
//     { pname: 'Smartphone', price: 1000 },
//     { pname: 'Tablet', price: 900 }
//   ]

// 10.You have an array of product objects, where each product has a name and price.Write a function that uses the map method to create a new array of strings. Each string should contain the products name and price formatted as Product: [name] costs $[price].

const eachProduct = productArray.map((product) => {
    return `Product: ${product.pname} costs $${product.price}`;
});
console.log(eachProduct);

// output:
// [
//     'Product: Laptop costs $1500',
//     'Product: Smartphone costs $1000',
//     'Product: Tablet costs $900',
//     'Product: Mouse costs $800',
//     'Product: Headphone costs $500'
//   ]