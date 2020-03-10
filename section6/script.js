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

///////////////////////////////////
// Lecture: Rest Parameters

//ES6 
function isFullAge6(...years) {
    years.forEach(cur => console.log(2016 - cur) >= 18);
}

isFullAge6(1990, 1999, 1965);

// So the big difference between spread operator and the rest parameters is actually the place in which we use each of them 
// So the spread operator is used in the function call while the rest operator is used in the function declaration 



//ES6 
function isFullAge6(limit,...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(21,1990, 1999, 1965, 2000, 2001, 1997);

// So the big difference between spread operator and the rest parameters is actually the place in which we use each of them 
// So the spread operator is used in the function call while the rest operator is used in the function declaration 



////////////////////////////////////////////////////
// Lecture: Default Parameters 

// ES6 

function SmithPerson(firstName,yearOfBirth, lastName = 'Smith', nationality = 'american'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily',1983,'Diaz','Spanish');

///////////////////////////
// Lecture: Maps

const question = new Map();

question.set('question','What is the official name of the latest major Javascript version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer:D');
question.set(false, 'Wrong, please try again');

//console.log(question.get('question'));
//console.log(question.size);


/*
if (question.has(4)) {
    question.delete(4);
}

//question.clear();
*/

//question.forEach((value, key) =>
//console.log(`This is ${key}, and it is set to ${value}`));

for (let [key, value] of question.entries()){
        if (typeof(key) === 'number') {
            console.log(`Answer ${key}: ${value}`);
        }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));


///////////////////////////////////
// Classes 

//ES6

class Person {

    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }


    static greeting(){
        console.log('Hey there!');
    }


}

const john = new Person('John',1997,'teacher');

Person.greeting();

class Athlete extends Person {
    constructor(name, yearOfBirth, job, olymicGames, medals){
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const tomAthlete = new Athlete('Spyrus',1997,'Footballer',3,10);

tomAthlete.wonMedal();
tomAthlete.calculateAge();






