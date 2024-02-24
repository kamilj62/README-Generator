// Import necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is the your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the name of your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project'
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "If applicable, provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Unlicense'],
        name: 'license'
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('File created successfully!');
    });
}


// TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
            .then((data) => {
                writeToFile('./README.md', data);
            });
    }

// Function call to initialize app
init();
