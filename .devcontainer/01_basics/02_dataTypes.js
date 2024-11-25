/* In java script we have different datatypes*/
// strings
/* Basically strings caried out combination of characters.
 For example */
 console.log("Hello my name is dipesh kafle ")
//Numbers
/*Basically numbers are assign directly into the value of variable 
we are not use any invorted comma into it number range varies from 
2^53 values
for example  */
let a = 67
let b = 73
c=a+b
console.log("sum of a and b is "+c)
//Boolean
/* Boolean is used for assigning yes or no answer 
for example */
/* if we need to find out a is greater then b or not then we can  use boolean*/

let isNotEqual = a !==b;
console.log(isNotEqual)
//null 
/* null is a one type of object in javascript it define nothing in js */
let e= null
console.log(e)
console.log(typeof(e))//from this example we can say type of null is object

//undefined
/* undefined is a method where we do not defined anything */
 let j;
 console.log(j)
 console.log(typeof(j))

//symbol 
/* symbol is used for unique value in javascript we can use symbol into react and figma */
let sym1 = Symbol("test");
let sym2 = Symbol("test");

console.log(sym1 === sym2); 
/*output will be false because sym1 and sym2 are using unique value 
because they use symbol datatype */

//Object
/* The Object data type in JavaScript is one of the most fundamental
 structures used to store and manage data. It allows you to group
  related values (properties) and methods
   (functions) in a single structure.*/
    let person = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log(person.name);
console.log(person.age);
