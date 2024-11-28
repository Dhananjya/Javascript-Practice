// .toPrecision(4)
/* It roundup 4th number into the giving numbers for example we put num1 = 456.789 and use function .toPrecision(4) that means it 
roundup 4 th number from starting */
num1 = 456.789;
console.log(num1.toPrecision(4));

//applying comma in numbers 
/* for applying comma in number we can use .toLocalString() for us standard 
for nepali and indian standard we can use .toLocaleString('en-IN') */

const amount= 10000000000;
console.log(amount.toLocaleString())
//for indian conversion 
console.log(amount.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Maths
//To find absulate number means no negative number 
/* for findings absulate number we can use Math.abs(number) */

num2= -234.56
console.log(Math.abs(num2))

//To roundup numbers 
/* we can use math.round(numbers) */

console.log(Math.round(num2))

//To ceiling the number we can use Math.ceil(numbers)

console.log(Math.ceil(num2))


//to flooring the number we can use Math.floor(numbers)
console.log(Math.floor(num2))

//To finding which number is maximum in the given array then we can use Math.max(array)

//arr1=(2,4,5,6,78,3)
console.log(Math.max(2,4,5,6,78,3))
// To findout minimum number we can use Math.min(array)
console.log(Math.min(2,4,5,6,78,3))

//random numbers
//we can generate random numbers by just applying Math.random()it can generate 0 to infinitive numbers

console.log(Math.random())
//but it only generate 0.0-1 range number to make it usable we can generally multiply 10 to it 

console.log(Math.round(((Math.random())*10)+1))
//to declare range in random numbers we can define as 
max=10
min=0
console.log(Math.floor(Math.random()*(max-min+1)))+min





