//we can use function into java script 
function addTwoNumber(num1,num2) {                      //num1 and num2 is parameter of this function 
return num1+num2
}
console.log("Result is ",addTwoNumber(5,4))             //here 5,4 is an argument 

//we cant print anything after return but before return we can print or execute 

function addTwoNumber(num1,num2) { 
    console.log("Hello first") 
    return num1+num2
    console.log("Hello second") 
    }

function loginUserMessage(username){               //if there is unvalid syntax then it will print DP but if there is any argument then it is overlapped
   if (username=undefined) {
    return console.log("Please enter value inside the box")
    
   }
    return `${username} just logged in `
}
console.log(loginUserMessage())