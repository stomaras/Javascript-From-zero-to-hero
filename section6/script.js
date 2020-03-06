// Lecture: let and const 
/*
//ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6 
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
//error
//console.log(name6);
*/




//ES5 
function driversLicence5(passedTest){
    //console.log(firstName);   
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);


//ES6
function driversLicence6(passedTest){
    // console.log(firstName);// temporal-dead zone
    // if we want to use a constant outside of the block then we must to declare out of the block
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest){
        firstName = 'John';
        //const yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);





let i = 23;

for (let i=0; i < 5; i++){
    console.log(i);
}

console.log(i);


// let and const are block-scoped 
// var are function-scoped
 

////////////////////////////////////////////////
// Lecture: Blocks and IIFEs



// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// False: const and let are block-scoped
//console.log(a + b);

console.log(c);

// ES5 
(function() {
    var c = 3;
})();

// False: var is function-scoped
//console.log(c);


////////////////////////////////////////////////
// Lecture: Strings 

let firstName = 'Spyros';
let lastName = 'Tomaras';
const yearOfBirth = 1990;

function calcAge(year){
    return 2020 - year;
}

//ES5 
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old. ');      

//ES6
console.log(`This is ${firstName}${lastName}. He was born in ${yearOfBirth}. Today he is 
${calcAge(yearOfBirth)} years old.`);



const fullName = `${firstName} ${lastName}`;
console.log(fullName.startsWith('S'));
console.log(fullName.endsWith('s'));
console.log(fullName.includes(' '));
console.log(firstName.repeat(3));
console.log(`${firstName}`.repeat(5));

/////////////////////////////////////
// Lecture: Arrow functions 

const years = [1990, 1965, 1982, 1937];


// ES5 
var age5 = years.map(function(el) {
    return 2020 - el;
});
console.log(age5);

// ES6 
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age Element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// more than 1 line of code we add curly braces 
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);


function Person(name) {
    this.name = name;
}


// ES5
Person.prototype.myFriends5 = 
function(friends){
    
    var arr = friends.map(function(el)
    {
        return this.name + 'is friends with ' + el;
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);



//ES6
Person.prototype.myFriends6 = 
function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Mike').myFriends6(friends);

/////////////////////////////////
// Lecture: Destructuring

// ES5 
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return[age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


///////////////////////////////////
// Lecture: Arrays 
 
const boxes = document.querySelectorAll('.box');

// ES6 
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES6 
for (const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}


//ES6
var ages = [12, 17, 8, 21, 14, 11];
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));

///////////////////////////////////////
// Lecture: Spread Operators 

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES6 
var ages = [18, 30, 12, 21];
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary','Bob','Ann'];

const bigFamily = [...familySmith,'Lily',...familyMiller];
console.log(bigFamily);




const h = document.querySelector('h1');
console.log(h);
const boxes = document.querySelectorAll('.box');
console.log(boxes);
const all = [h,...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');





