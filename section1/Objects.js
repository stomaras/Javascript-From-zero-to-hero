/******************************
* Objects and methods
*/

var john = {
    firstName: 'John',
    lastName:'Smith',
    birthYear:1991,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    /*calcAge: function(birthYear){
        return 2020 - birthYear;
    }*/
    /* this what it means here is the context is John so this means the present the current object.... so this means john birthyear 
    */
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

//console.log(john.calcAge());
/* What if we actually wanted to store this result right into the John object 
*/

john.calcAge();
console.log(john);
