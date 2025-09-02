console.log('Hello from app.js! Your JavaScript is connected and running!');

const clearForm = document.getElementById('clearFormButton');
const submitForm = document.getElementById('submitFormButton');
const textBox = document.getElementById('textBoxInput');

// submit form
// trying to get form to display input content after submission
const submitFormButton = function(event) {
        event.preventDefault();
        console.log(event);
        textBox.textContent = `Welcome ${textContent}`;
        //document.textBoxInput();
        console.log(`Hello, ${textBoxInput}!`);
    }

// trying to get text equal to nothing when cleared ()
const clearFormButton = function(event) {
    clearForm.reset();
    textBox.value = "";
};


// link to other doc, unsure what goes here
// reviewed w3
// add init function
// added DOMContentLoader
function init() {
    console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');
    document.addEventListener('submit', submitFormButton);
    document.addEventListener('click', clearFormButton);
     
}

document.addEventListener('DOMContentLoaded', init);