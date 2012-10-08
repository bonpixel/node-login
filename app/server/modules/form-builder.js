var FB = {};
	
module.exports = FB;


/*
	var FB = require('./app/server/modules/form-builder');
	FB.input({
		id: 'input1-id',
		class: 'input1-class',
		name: 'input1-name',
		type: 'button',
		value: 'value'
	});


	so the idea of this would be to have some functions that basically you pass in a form object and it returns valid HTML. 

	not sure of the best way to implement this. Perhaps something like the following:

	{	// idicative of a form wrapper
		
		input: {
			
			// <input name="string" type=" {
				button |
				checkbox |
				file |
				hidden |
				image |
				password |
				radio |
				reset |
				submit |
				text } 
				" value="value" />

			id: 'input1-id',
			class: 'input1-class',
			name: id: 'input1-name',
			type: 'button', // or a defualt if entered type is not valid
			value: 'value'
		},
		
		button: {
			
			// <button name="string" type=" { button | reset | submit } " value="value"></button>

			id: 'button-id',
			class: 'button-class',
			name: id: 'button-name',
			type: 'button || reset || default (none)', // or a defualt if entered type is not valid
			value: 'value'
		},
		
		

	}
*/

// form
// defines a form that includes a range of inputs and controls
FB.form = function(obj) {
};



// button
// groups a selection of elements together into a clickable form element
FB.button = function(obj) {
};



// fieldset
// groups related form controls
FB.fieldset = function(obj) {
};



// input
// defines the input control for a form
FB.input = function(obj) {
	var html = "";

	for(property in obj){
		html += " " + property + " ";
	}
	return html;
};



// label
// specifies descriptive text for the associated form control
FB.label = function(obj) {
};



// label
// defines caption text for form controls that are grouped by the fieldset element
FB.label = function(obj) {
};



// optgroup
// groups related option elements contained in a select list
FB.optgroup = function(obj) {
};



// option
// defines an item in a select list
FB.option = function(obj) {
};



// select
// defines a selection list (for single or multiple selections)
FB.select = function(obj) {
};



// textarea
// creates a multiline text input field
FB.textarea = function(obj) {
};
