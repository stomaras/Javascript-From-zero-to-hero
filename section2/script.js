/////////////////////////////////////
// Lecture: Hoisting

function calculateAge(year){
    console.log(2020 - year);
}

calculateAge(1990);

// Variables 

console.log(age);
var age = 23;
console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);



/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/

//console.log(this);

// The Window Object is the default object 
/*
calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        // A function that is written inside a method is still a regular function so 
        // when we call this keyword will no longer point to the john object but instead point 
        // to the window object
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


// here we treat the function as variable so we say that mike calculate function 
// to be the exaact same as john.calculateAge
mike.calculateAge = john.calculateAge;
mike.calculateAge();
