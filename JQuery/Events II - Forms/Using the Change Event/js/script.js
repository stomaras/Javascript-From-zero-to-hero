// Change Event :  in especially useful for :
                                                //1) checkboxes, 
                                                //2) radio buttons 
                                                //3) select elements.
// So for text inputs and text area as that 
// event will only fire once the focus is actually lost. So you can use the blur event instead. But you also going to learn a way to be more 
// responsive and give even faster feedback to your users to inform validation later on. Now for this lecture let's imagine a checkbox
// for the agree terms. So the user is required to check that checkbox and you want to inform the user right away if it's not checked
// or if you unchecked said. And to do that you are going to use the change event. 

// 2nd Work
// Add a select element in html with four options so that's going to be a drop down on the html page and then when the value changes.
// so when you select another option on that element, i want you to just alert that currently selected option. So essentially is going to pop
// out with a window to tell you again which element you just selected
// Hints: when you want to get the selected options think about the convenience or pseudo select here which is called selected
//        with a column before it. The actual name is inside opening and closing tags . So is not val() but text().
//        add an id at your html page and then select this in js code.

$(function() {
    $("#checkbox").change(function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
        } else {
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
        }
    });

    $("#selection").change(function() {
        var selectedOption = $(this).find(":selected").text();
        alert(selectedOption);
    });
});