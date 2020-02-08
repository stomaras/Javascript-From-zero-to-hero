/****************************************
* Coding Challenge 4
*/

/*
Let's remember the first coding challenge where Mark
and John compared their BMI's/Let's now implement 
the same functionality with objects and methods
1. For each of them, create an object with 
properties for their full name, mass, and height
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return 
it from the method
3. In then end , log to the console who has the highest BMI, together with the 
full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 
mass in kg and height in meter
*/

var Spyros = {
    fullName: 'Spyros Tomaras',
    mass: 76,
    height: 1.80,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Efstathios = {
    fullName: 'Efstathios Tomaras',
    mass: 76,
    height:1.80,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

//Spyros.calcBMI();
//Efstathios.calcBMI();
//console.log(Spyros, Efstathios);

if (Spyros.calcBMI()> Efstathios.calcBMI()) {
    console.log(Spyros.fullName + ' has a higher bmi of ' + Efstathios.bmi);
} else if (Efstathios.bmi > Spyros.bmi){
    console.log(Efstathios.fullName + ' has a higher bmi of ' + Spyros.bmi);
} else {
    console.log('They have the same BMI');
}
