const tinder = new Object() //singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "01"
tinderUser.name = "Manisha"
tinderUser.address = "Gaighat"
//we can assign object under object 
const regulationUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Dipesh",
        lastname: "Kafle"
    }
}

console.log(regulationUser.fullname.firstname)

//how to combine objects 
const obj1={1:"a",2: "b"};
const obj2={3:"a",4: "b"}
//one method using Object.assign
obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
//Another method using ...obj, ...obj
obj4={...obj1,...obj2}
console.log(obj4);

//some times when we fetching data from database we get result in object form inside array so we can access them using array indexing method
const userdata=[
    {name: "Dp",age:23},
    { name: "Mnsa",age:24}
];
console.log(userdata[1]);

//we can only access key or value of the object 
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('addres'))


