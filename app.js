// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');

const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const orangeButton = document.getElementById('orange-button');
const redButton = document.getElementById('red-button');
const americaButton = document.getElementById('america-button');

const header = document.getElementById('header');
const footer = document.getElementById('footer');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', ()=> {
    let newName = nameInput.value; 
    firstName.textContent = newName; 
});

blueButton.addEventListener('click', ()=> {
    header.style.backgroundColor = 'blue';
    footer.style.backgroundColor = 'blue';
});
greenButton.addEventListener('click', ()=> {
    header.style.backgroundColor = 'green';
    footer.style.backgroundColor = 'green';
});
orangeButton.addEventListener('click', ()=> {
    header.style.backgroundColor = 'orange';
    footer.style.backgroundColor = 'orange';
});
redButton.addEventListener('click', ()=> {
    header.style.backgroundColor = 'red';
    footer.style.backgroundColor = 'red';
});
americaButton.addEventListener('click', ()=> {
    header.style.backgroundColor = 'red';
    footer.style.backgroundColor = 'blue';
});
