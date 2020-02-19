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
// hasOwnProperty is a method that we inherit from object 
// instanceOf operator also inherit 

// More ways to create Objects in JS
// Object.create builds an object that inherits directly from the one that we passed into the first
// argument
// Object. create and costructors patterns are the most common way to create object
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var  jane = Object.create(personProto,
{
    name:{ value: 'Jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer'}
});


// Primitive vs Objects


// Primitves
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



// Objects
var obj1 = {
    name:'John',
    age:26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions 
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

// because a is primitive will not affect the varibale in th outside
// but when we pass the object is not really the object that we pass but the reference 
// to the object, so again we do not pass an object into a function but only the reference that points
// to the object , so when change the object inside the function it is still reflected outside 
// of the function 
function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


*/
///////////////////////////////////////////////////////
// Lecture: Passing functions as arguments 


// birthYears
// A callback function is a function that called later in the function 
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el; 
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);


// After functions accepting functions as input let's now talk about functions returning functions
// Let's create a function that creates different interview questions for different jobs 
// Anonymous function is a function which does not has a name

// Lecture: Functions returning functions 

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello'+name+'what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');

interviewQuestion('teacher')('Tom');


// if the only purpose is to hide the score variable from the outside so which means creating 
// a private variable then we don't need to declare a whole function with a name and then call it
// we can do it with better way , with Immediately Invoked Function Expression

// What is in parenthesses cannot be a statement and js know that it should treat this 
// as an expression , with this way we create data privacy here


// Immediatly Invoked Function Expression used for data privacy.
(function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);



// Lecture: IIFE 

// Immediately Invoked Functions Expressions 

// Imagine that we wanted to build a little game where we win the game if a random score from zero to // nine is greater or equal to five, and lose if it's smaller so just  a small and silly game really
// But we want to keep the score hidden in this game, OK so the score should not be visible 
// The way is to write a simple function , because we know that varibales defined inside the funvtion cannot be accessed from the outside scope, right.

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// if the only purpose is to hide the score variable from the outside so which means creating 
// a private variable then we don't need to declare a whole function with a name and then call it
// we can do it with better way , with Immediately Invoked Function Expression

// What is in parenthesses cannot be a statement and js know that it should treat this 
// as an expression , with this way we create data privacy here


// Immediatly Invoked Function Expression used for data privacy.
(function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// Lecture: Closures 

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);



//retirement(66)(1990);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer') {
            console.log(name + ', can you please explain that UX design is?');
        }else if( job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }else{
            console.log('Hello' + name + ', what do you do ?');
        }
    }
}

interviewQuestion('teacher')('John');





