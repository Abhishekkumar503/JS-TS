const Person = require("./basic7")
class Pet extends Person
{

    get location()
    {
        return "BlueCross"
    }

    constructor(firstName, lastName)
    {
        super(firstName,lastName)
    }
}
let pet = new Pet("Sam","Altman")
console.log(pet.fullName())
console.log(pet.location)
