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

