/* Variable and Data Types */
var firstName = 'Spyros';
console.log(firstName);

var lastName = 'Tomaras';
var age = 22;

var fullAge = true;

console.log(fullAge);

var job;

console.log(job);

job = 'Teacher';
console.log(job);

/*
*   Variable Mutation And Type coercion
*/

var firstName = 'Spyros';
var age = 22;


// Type coercion 
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he Married? ' +  isMarried);

// Variable Mutation 

age = 'Twenty Two';
job = 'Driver';
alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he Married? ' +  isMarried);

var lastName  = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);
