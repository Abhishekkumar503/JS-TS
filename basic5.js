const Person = require('./basic7'); // import parent ( basic7 )
// Strings
let day = 'tuesday'
console.log(day.length)
let substring = day.slice(0,5)
console.log(substring)
console.log(day[1])

comment()

let splitDay = day.split("s")
console.log(splitDay[1].length)

comment()

console.log(splitDay[1].trim().length)

comment()

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

function comment()
{
    console.log("***********************")
}

comment()

let newQuote =day + " is Funday"
console.log(newQuote)

let val = newQuote.indexOf("day",5)
console.log(val)

let count = 0
let value =newQuote.indexOf("day")
while(value!== -1)
{
    count++
    value = newQuote.indexOf("day",val+1)
}
console.log(count)

let person = new Person("Abhishek", "Kumar")
console.log(person.fullName())