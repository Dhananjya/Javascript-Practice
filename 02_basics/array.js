const myArr=[1,2,3,4,5,6,7]
//to explore element in array
console.log(myArr[3])
//to push new element into the array we can use .push(element)
myArr.push(9)
console.log(myArr);

//to remove last value of the array we can use .pop() operation
myArr.pop()
console.log(myArr)

//to add element in first index we use .unshift(element)
myArr.unshift(9)
console.log(myArr)
//shift is just opposite of unshift 
myArr.shift()
console.log(myArr)

//includes checks the element is avaliable or not in array 
 console.log(myArr.includes(5))

 //indexOf check the index of given element

console.log(myArr.indexOf(7))
//slice doesnot manupulate original array and also stick with array and doesnot show range 
myn1= myArr.slice(1,3)
console.log(myn1)
console.log(myArr)

//splice manupulate original array and it also provide range in the result 
myn2=myArr.splice(1,3)
console.log(myn2)
console.log(myArr)
