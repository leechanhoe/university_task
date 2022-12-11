const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person.fullName.apply(person1));
// console.log(person.fullName.call(person1));