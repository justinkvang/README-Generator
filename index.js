// TODO: Include packages needed for this application
// require is used to pull in necessary tools for this code to work
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'What is the name of your project?'},
    {type: 'input', name: 'description', message: 'What is your project about?'},
    {type: 'input', name: 'installation', message: 'How can the user install your project (if necessary).'},
    {type: 'input', name: 'usage', message: 'Enter your project instructions and examples.'},
    {type: 'input', name: 'contributing', message: 'How can user contribute to your project (if necessary)?'},
    {type: 'input', name: 'test', message: 'Provide tests for your project and explain how to to test it (if necessary).'},
    {type: 'list', name: 'license', message: 'What license will be used for your project?', choices: ['Apache', 'MIT']},
    {type: 'input', name: 'username', message: 'What is your GitHub username?'},
    {type: 'input', name: 'repo', message: 'What is your GitHub repository?'},
    {type: 'input', name: 'email', message: 'What is your email?'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile is the code to create the actul file
    fs.writeFile(fileName, data, err =>{
        if(err) {
            return console.log(err);
        }
        console.log('Your README file has been created!');
    })
}

// promisify takes a function following the common error-first callback style and returns a version that returns promises
// https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
// util.promisify pretty much glues it all together
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// put 'async' in front of a function declaration to turn it into an async function.
// An async function then knows how to expect the possibility of the 'await' keyword.
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions); // await pauses until user responds 
        console.log("Your responses: ", userResponses);

        console.log("Creating your README file...");
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);
    }
    // always need a catch or will throw a syntax error
    catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
