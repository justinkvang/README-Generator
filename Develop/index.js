// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Explain how the user would install your project (if necessary).'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter your project instructions and examples.'
    },
    {
        type: 'input',
        name: 'License',
        message: 'What license will be used for your project?',
        choices: ['Apache-2.0', 'BSD-3-Clause', 'GPL-3.0', 'ISC', 'MIT']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Explain how users can contribute to your project (if necessary).'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Provide tests for your project and explain how to to test it (if necessary).'
    },
    {
        type: 'input',
        name: 'GitHub username',
        message: 'Enter your GitHub username.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'Repository',
        message: 'Enter the name of your repository on GitHub.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the valid name of your GitHub repository.");
            }
            return true;
        } 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
