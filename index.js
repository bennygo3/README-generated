const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        name: 'welcome',
        message: 'Welcome to this README generator! Press return to continue',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Give a brief description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Which dependencies or installation packages are needed to get your project running?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Instructions to run test/s for your application:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for the user to use your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to include?',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'GPLv3', 'AGPLv3']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Would you like to leave contributing instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your preferred contact email:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data),
        (err) => err ? console.error(err) : console.log(`Hello ${data.title}`)
    )

}

// // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', response);
        })
}

// // Function call to initialize app
init();