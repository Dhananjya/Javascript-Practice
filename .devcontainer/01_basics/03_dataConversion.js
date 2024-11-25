/* we can directly assign numbers string using variables 
firstly we convert numbers into strings and strings into numbers */

let score = 33
console.log(typeof(score))
//converting numbers into strings 
Str = String(score)
console.log("After conversion number will become "+ typeof(Str))

//converting string into numbers 
let age = "55";
//console.log(typeof(age))
Finalnum = Number(age)
console.log(typeof(Finalnum))
console.log(Finalnum)
/* in conclusion if we put valid string number ("55") then 
it convert effectly but 
if we put 
33abc == NaN (not a number )
true == 1
false == 0 
Null == 0
"Dipesh"== NaN 
but if we put Number(), String() function then 
type will remain Number insted final value will be NaN */


