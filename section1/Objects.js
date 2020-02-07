/***********************************
* Objects and properties
*/

var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstname);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstname = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
