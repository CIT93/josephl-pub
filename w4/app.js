//Reviewed previous code
//AI prompt: I need help correcting my code and finding errors and where Im going wrong.

console.log('Hello from app.js! Your JavaScript is connected and running!');

//AI: completely forgot to include formHandler
const form = document.getElementById('formHandler')
const clearForm = document.getElementById('clearFormButton');
const submitForm = document.getElementById('submitFormButton');
const textBox = document.getElementById('textBoxInput');
const output = document.getElementById('textOutput')

// submit form
// trying to get form to display input content after submission
const submitFormButton = function(event) {
    event.preventDefault(); // Prevent page reload
    console.log('Submit button clicked, event:', event);
    //AI: i was very close.
    // Didnt know how to declare 'name'
    ///and connect to text box
    // and how to output the text
    const name = textBox.value;
    console.log(`Input value: ${name}`);
    output.textContent = `Hello, ${name}!`;
    }

// trying to get text equal to nothing when cleared ()
const clearFormButton = function(event) {
    console.log('Clear button clicked.');
    //AI: was extremely close but needed to call form
    //not clearForm for reset
    form.reset(); // Reset form input
    //AI: was also close but need to call output!
    output.textContent = ''; // Clear output message
    console.log('Form and output cleared.');
};

// link to other doc, unsure what goes here
// reviewed w3
// add init function
// added DOMContentLoader
function init() {
    console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');
    //instead of "document." i need to attatch form
    // and clearForm
    form.addEventListener('submit', submitFormButton);
    clearForm.addEventListener('click', clearFormButton);
     
}

document.addEventListener('DOMContentLoaded', init);