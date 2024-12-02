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