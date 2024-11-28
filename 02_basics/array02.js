Arr1= ["Dipesh","Hitesh","Laxman","Manisha"];
Arr2= ["Kafle","baral",true,2];
//we can not join two array just by using push() into the another array 
//it treat array to element inside the array
// Arr1.push(Arr2);
// console.log(Arr1);

//concat
//To join two array we can use concat method 
// A1=Arr1.concat(Arr2)
// console.log(A1)

//Sprad operation
//It is more like breaking glass and we can break neasted array by using [....arr1, ....arr2]
// A2=[...Arr1,...Arr2];
// console.log(A2)
//flat()
//it breakdown all level of array inside the array and provide full array 
Array1=[1,2,3,4,[5,6,7,8,],9]
Arr2=Array1.flat(Infinity)
console.log(Arr2)

//Array.isArray() findout it is array or not in this program
console.log(Array.isArray(Arr2))

//Array.form("String") it create array of the given string inside the method 

console.log(Array.from("Dipesh Kafle don hoo"))

//Array.of create single array of the provided element list 
Array2=[2,3,4]
Array12=[1,2,3]
console.log(Array.of(Array12,Array2))
