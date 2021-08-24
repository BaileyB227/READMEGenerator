
const inquirer = require('inquirer');
const fs = require('fs');
const readmeMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Write a description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependicies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this repo?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?'
    }
];

function init() {
    inquirer.prompt(questions)
    .then(function (response){
        const fileName = "README.md";
        const generatedREADME =  readmeMarkdown(response)
        fs.writeFileSync(fileName, readmeMarkdown(response), function(err){
            if (err) {
                return console.log(err);
            }
        });
        console.log("README.md generated")
    });
}

init();