// BUDGET CONTROLLER
var budgetController = (function(){

    // Some code
    
})();


// UI CONTROLLER 
var UIController = (function(){
    
    // Some code
    
})();


// GLOBAL APP CONTROLLER 
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        // 1. Get the field input data
        
        // 2. Add the item to the budget Controller
        
        // 3. Add the item to the UI 
        
        // 4. Calculate the budget 
        
        // 5. Display the budget on the UI 
        
        console.log('It works.');
        
    }
    
    // I will set up the Event Listener for the input button right here in our controller
    // .add__btn becaue is class 
    // Not only the key Event but also the keypress event 
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // The keypress event does not happen on any specific element but it happens on the global 
    // web page , anywhere in the document 
    // Keyboard Event is a user interface event in the prototype chain 
    // the keyCode identifies the key that we pressed. We can see it in the console
    // Some older browsers use the which
    document.addEventListener('keypress', function(event) {
       
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    
})(budgetController,UIController);
