// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project need?',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should user know about contributing to this repo?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command needs to be run to install the dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should the user know about using this repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),
    fileName), data);
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(function (inquirerResponses) {
            console.log('Generating README...');
            writeToFile('README.md',
                generateMarkdown({ ...inquirerResponses }));
        });
}

// Function call to initialize app
init();