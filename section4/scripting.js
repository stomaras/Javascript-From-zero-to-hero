// Function creating objects using the function constructor 
// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Costructor Function
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// So attaching methods to the constructors function's prototype property is something that is 
// really really common to use
Person.prototype.calculateAge = 
function(){
    console.log(2020 - this.yearOfBirth);
}

// What we do with method here we can make the same with properties,
// So this can inherit from all of the objects
Person.prototype.lastName = 'Smith'
// instantiation
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
// All these objects has the function , in this case is not big deal  bcause is just one function
// We will have access to lastName because it is in the prototype property of the function constructor
// So all John, Jane and Mark inherit this property.
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
