// object is collectoin of properties

let person = {

    firstName:'Tim',
    lastName : 'Joe',
    age : 26,
    fullName : function()
    {
        console.log(this.firstName + this.lastName)
    }
}
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Tim Dane'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)

for(let key in person)
{
    console.log(person[key]) // Interview question to print all object
}

console.log(person.fullName())