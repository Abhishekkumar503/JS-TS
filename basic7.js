module.exports = class Person
{
age = 26
// location = "India" 

//variable
get location()
{
    return "India"
}

// Constructor is method which executes by default when you create 
constructor(firstName,lastName)
{
    this.firstName = firstName
    this.lastName = lastName

}

// methods
fullName() {
    return this.firstName + " " + this.lastName;
}
}

// let person = new Person("Tim","Cook")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())