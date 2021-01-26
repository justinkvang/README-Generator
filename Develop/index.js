// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/API.js');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how the user would install your project (if necessary).'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will be used for your project?',
        choices: ['Apache-2.0', 'BSD-3-Clause', 'GPL-3.0', 'ISC', 'MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if necessary).'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for your project and explain how to to test it (if necessary).'
    },
    {
        type: 'input',
        name: 'gitHub username',
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
        name: 'repository',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) {
            return console.log(err);
        }
        console.log('Your README file has been created!');
    })
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged! Grabbing GitHub data now...");

        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        console.log("Generating your README file...");
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);

    }   catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
