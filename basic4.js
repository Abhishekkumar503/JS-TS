// block of code = function

function add(a,b)
{
    return a+b
}
let sum = add(2,3)
console.log(sum)

// dont have name called anonymus

let sumOfInt = function(c,d){return c+d}
console.log(sumOfInt(2,3))

let sumOfInteger = (c,d) => c+d
console.log(sumOfInteger(2,3))

// Scope 
 // let 
 let Str = "pending"
 console.log(Str)

 if(true)
    str = "Offered!!"

  console.log(Str)

str = () => "Hired!"
console.log(str())

