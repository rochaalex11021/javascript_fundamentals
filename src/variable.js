/*var greeter = "hi" var-old way and has issues 
let greeter = "sup" can be changed later on/for variables or values that change ? age?
const greeter = "yooo" cannot be changed 

const rager = "fun";

console.log(rager)
console.log(rager)
console.log(rager)
console.log(rager)
console.log(rager)
console.log(rager)

let greeting = "say hi";
greeting = "say Hello instead"

console.log(greeting);


 let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"

    */

    const greeting = {
        message: "say Hi",
        times: 4
    }


    greeting.message = "say Hello instead";


    console.log(greeting);