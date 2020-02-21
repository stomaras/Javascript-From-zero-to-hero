var budgetController = (function(){
    
    var x = 23;
    
    var add = function(a){
        return x + a;
    }
    
    return {
        // the publicTest method that we exposed to the public 
        // this works due to the powerful of closures 
        // because of closures an inner function has always access to the variables and parameters
        //of its outer function even after the outer function has returned 
        // x and add variables are private because they are in the closure and therefore only 
        // the publicTest method can access them 
        publicTest: function(b) {
            return add(b);
        }
    }
})();


var UIController = (function(){
    
    // Some code
    
})();

// Now we create another module with just the one that's gonna take care of our uder interface 
// And let's call that one the UIcontroller 

// The User Interface is seperated from the data they don't communicate at all 
// and that is called separation of concerns 

// Separation of Concerns : means that each part of the application should only be interested
//                          in doing one thing independently so these two controllers don't know
//                          about each other so we need to connect these with some way 
//                          so we need to read data from the User Interface and then add the data
//                          as a new expanse in the budgetController so we create a new controller app


// Third module 
// So this controller knows about the other 2 modules 
var controller = (function(budgetCtrl, UICtrl) {
    
    var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
})(budgetController,UIController);
