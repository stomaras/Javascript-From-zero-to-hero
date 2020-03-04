// BUDGET CONTROLLER

var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome){  
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
           sum += cur.value; 
        });
        data.totals[type] = sum;
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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
        
        deleteItem: function(type, id){
            var ids, index;
            // id = 6 
            // data.allItems[type][id];
            // The above will work if we set that the IDs are all in order like zero, one, two , three
            // imagine that these are the ids ==  [1 2 4 6 8]
            // element number three we dont delete element with id 3 
            // the reason that isn't all in order is that we have delete items
            // index = 3
            // Solution is create an array with all id numbers 
            
            ids = data.allItems[type].map(function(current) {
                return current.id;    
            });
            
            // indexOf method return the index number of the element of the array that we input here 
            // index will be -1 if the index not found in the array in which we are searching 
            
            index = ids.indexOf(id);
            
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
            
        },
        
        
        calculateBudget: function(){
          
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            //calculate the percentage of income that we spent
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else {
                data.percentage = -1;
            }
            
            
            
            //Expense = 100 and income 200, spent 50% = 100/200 = 0.5 * 100
        },
        
        calculatePercentages: function(){
            
            /*
            a=20
            b=10
            c=40
            income=100
            a=20/100=20%
            b=10/100=10%
            c=40/100=40%
            
            */
            
            data.allItems.exp.forEach(function(cur) {
               cur.calcPercentage(data.totals.inc); 
            });
            
        },
        
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur){
               return cur.getPercentage(); 
            });
            return allPerc;
        },
        
        getBudget: function(){
          return {
              budget:data.budget,
              totalInc:data.totals.inc,
              totalExp:data.totals.exp,
              percentage:data.percentage
          };  
        },
        
        testing: function(){
            console.log(data);
        }
    };
    
    
})();

// UI CONTROLLER 
var UIController = (function(){
    
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: 'budget__title--month'
    };
    
    var formatNumber = function(num, type){
            
            /*
            + or - before number 
            exactly 2 decimal points
            comma separating the thousands 
            
            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00    
            */
            
            num = Math.abs(num);
            num = num.toFixed(2);
            
            numSplit = num.split('.');
            
            int = numSplit[0];
            if(int.length > 3){
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
                // input 23510, output 23,510
            }
            
            dec = numSplit[1];
            
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
            
    };
    
    var nodeListForEach = function(list, callback){
            for(var i = 0; i < list.length; i++){
                callback(list[i], i);
            }
    };
    
    
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if( type === 'inc'){
               element = DOMstrings.incomeContainer;    
               html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'; 
            }else if(type === 'exp'){
                element = DOMstrings.expensesContainer;
                // we will use thw exp-%id% we will tell to budgetController which item should delete 
                // when we hi the button and from the UI
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM 
            // NOTE !!!
            // This beforeend keyword here  makes it so that all of our HTML will be inserted
            // as a child of these containers: income__list, expenses__list
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },
        
        deleteListItem: function(selectorID){
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            
        },
        
        clearFields: function() {
            var fields, fieldsArr;    
            
            // querySelectorAll return list 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);  
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array){
               current.value = ""; 
            });
            
            fieldsArr[0].focus();
            
        },
      
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp,'exp');
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
            
            if(obj.percentage > 0){
                 document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }else {
                 document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },
        
        displayPercentages: function(percentages) {
            
            // Node List fields 
            
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
            
            
            nodeListForEach(fields, function(current, index) {
               
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                } 
            });
        },
        
        /*
        displayMonth: function() {
            var now, year, month, months;
            
            now = new Date();
            // var christmas = new Date(2020, 11, 25);
            
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            
            month = now.getMonth();
            
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = year;
        
        },
        */
        
        changedType: function() {
            
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + 
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            );
            
            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
        
        // We add an EventListener here to the container which is the first element that all of 
        // the income and expense items have in common and we did it so because we want to do 
        // event delegation which means that instead of adding one EventListener to all of the elements
        // that we are interested in  like all the incomes and all the expense items 
        // we add them to the container, and then let the event bubbling up 
        // So the function that we then attached to the container is the ctrlDeleteItem
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };
    
    var updateBudget = function(){
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI 
        UICtrl.displayBudget(budget);
    }
    
    var updatePercentages = function() {
      
        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();
        
        // 2. Read percentages from the budget controller 
        var percentages = budgetCtrl.getPercentages();
        
        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getinput();
        
        // Here i prevent in order to get valid data  
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            
            // 2. Add the item to the budget Controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
            // 3. Add the item to the UI 
            UICtrl.addListItem(newItem, input.type);
        
            // 4. Clear the fields 
            UICtrl.clearFields();
        
            // 5. Calculate and update budget 
            updateBudget(); 
            
            // 6. Calculate and Update Percentages
            updatePercentages();
        }
    
    };
    
    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        
        // We traverse the DOM to the element that we interested in and then we retrieve the ID from it
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID){
            
            //inc-1
            // all strings have access to the method split
            // as we call one method to the string the js automatically put a wrapper 
            // around the string and converts it to object so . . .
            splitID = itemID.split('-'); 
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. Delete the item from the data structure 
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from the user interface
            UICtrl.deleteListItem(itemID);
            
            // 3. Update and show the new budget 
            updateBudget();
            
            // 4. Calculate and Update Percentages
            updatePercentages();
        }
    };
    
    return {
        init: function(){
            console.log('Application has started.');
            //UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
    
    
})(budgetController,UIController);

controller.init();
