/*****************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code ';
        case 'driver':
            return firstName + ' drives a cab in lisbon';
        case 'designer':
            return firstName + ' designs websites';
        default:    
            return firstName + ' something else';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));

// statements do things but not produce immediatly results 
// expressions do things and produce immediatly results
