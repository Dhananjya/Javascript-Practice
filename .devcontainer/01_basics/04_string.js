// Mordern String technique 

//In mordern string technique we place those variable name into string by using ${} between strings
let name = "Dipesh";
let repoCount = 42;

let output = `${name} and my repocount is ${repoCount}`;
console.log(output);
const gameName = String("Dipesh")
//console.log(gameName.length)
//It is used for defining length of the strings
//console.log(gameName.toUpperCase())
//It is used for the uppercase the whole strings
console.log(gameName.charAt(3))
//It is used for find out what is written in index 3 
console.log(gameName.indexOf('h'))
//it is used for findout what is index of h in those string
console.log(gameName.substring(0,3))
//it is used for showing the 0-3 index characers
console.log(gameName.slice(0,4))
//it is used for sliceing the strings
const newString = "       Dp      "
console.log(newString.trim())
console.log(newString.trimEnd())
console.log(newString.trimStart())
//trim is used for removing white space in string it has 2 types trimEnd and trimStart both are work as their name 
url="https://dipesh.com//dipesh%20kafle"
console.log(url.replace('%20','-'))

//replace () replace the first input which is already avaliable in string and replace with new value into it 

console.log(url.includes('dipesh'))
//includes() search the strings and find out string is avaliable inside the string or not 
console.log(url.split('.'))
//split('') split the strings onthe basis of split characters 





