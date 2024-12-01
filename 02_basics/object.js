//create the object in javascript 
//we can declare object in java script just by using curly braces {}
 JSobject = {
    name: "Dipesh",
    surname: "Kafle",
    lastLogindays: ["Monday","Saturday"],
    JsAdmiin: "Bishal"
  
 }
 //to access object elements
 console.log(JSobject.name)
 console.log(JSobject.lastLogindays)
 console.log(typeof(sym1))

//to change the value of the key we can use 
JSobject.surname = "Bhandari"
console.log (JSobject.surname)

//to fridge the value we can use freeze function to prevent from changing 

//Object.freeze(JSobject)
// JSobject.surname = "Chaudhari"
// console.log (JSobject.surname)

//to declare function inside the function we can use (note) we can't declare function when object is at freeze state 
JSobject.greetings = function(){
   console.log("Hello there my name is dipesh kafle ")
}
console.log(JSobject.greetings())

//we can also use another method of declaring function by providing refrence of object
JSobject.greetings2 = function(){
   console.log(`Hello there my name is, ${JSobject.name}`)
}
console.log(JSobject.greetings2())




 
