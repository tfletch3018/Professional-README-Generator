//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


//Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'Please enter a title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter instructions for installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please select a license',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please select a badge',
        name: 'badge',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter test instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter the link to this Github repo',
        name: 'repo',
    },
])
    .then((response) => {
        console.log(response);

    })
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
