/*
* Coding challenge 1
*/

/*
Mark and John are trying to compare their BMI(Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2
(mass in kg and height in meter).

1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs
3.Create a boolean variable containing information
about whether Mark has a higher BMI than John
4.Print a string to the console containing the variable from step 3

*/

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.95 // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s'  + markHigherBMI);
