// BUDGET CONTROLLER

// We are going to create an object which will keeps the type description and value 
// in the UIController so that if i decide to change the UI the changes be locally
// we need a data model for expenses and incomes here 
// For each new item we have a description and a value and also we should have some way to distinguish // between different incomes or expensesso we want to have a unique ID number as well 

var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    
    return {
        addItem: function(type, des, val){
            var newItem, ID;
            
            
            // ID = last ID + 1
            //Create a new ID 
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }
            
            // Create a new Item based on 'inc' or 'exp' type 
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure 
            data.allItems[type].push(newItem);
            
            // Return the new Element 
            return newItem;
            
        },
        
        testing: function(){
            console.log(data);
        }
    };
    
    
})();


// We are going to select add__type, add_description, add__value and return the type 
// UI CONTROLLER 
var UIController = (function(){
    
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
            
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();


// GLOBAL APP CONTROLLER 
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function(){
    
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event) {
       
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });   

    };
    
    
    
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the field input data
        input = UICtrl.getinput();
        
        // 2. Add the item to the budget Controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI 
        
        // 4. Calculate the budget 
        
        // 5. Display the budget on the UI 
        
        console.log('It works.');
        
    }
    
    // I will set up the Event Listener for the input button right here in our controller
    // .add__btn becaue is class 
    // Not only the key Event but also the keypress event     
    // The keypress event does not happen on any specific element but it happens on the global 
    // web page , anywhere in the document 
    // Keyboard Event is a user interface event in the prototype chain 
    // the keyCode identifies the key that we pressed. We can see it in the console
    // Some older browsers use the which
    
    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
    
})(budgetController,UIController);

// Without this line of code nothing will happen because without EventListeners we cannot get data
// and without data there is not application.
controller.init();


