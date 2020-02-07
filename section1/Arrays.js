/*************************
* Arrays
*/

// Initialize new array
var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


// Different data types
var john = ['John', 'Smith',1990,'designer',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(31));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
