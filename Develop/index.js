// node variables 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user

async function userQuestions() {

  const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "Plese write a description of your project:",
      name: "description"
    },
    {
      type: "input",
      message: "Please describe the project's installation process if there is one:",
      name: "installation"
    },
    {
      type: "input",
      message: "Please provide instructions for the project's usage:",
      name: "usage"
    },
    {
      type: "list",
      message: "Choose a license for your project:",
      choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
      name: "license"
    },
    {
      type: "input",
      message: "Please input the information for the project's contributors",
      name: "contributing"
    },
    {
      type: "input",
      message: "If any, what tests did you create for this project? How do you run them?",
      name: "tests"
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Enter your github username:",
      name: "github"
    },

  ];

  const answers = inquirer.prompt(questions);
  return answers;
}

// // function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, err => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Sucess! Your README.md file has been generated")
//   });
// }

// function to initialize program
async function init() {
  try {
    const data = await userQuestions();

    const markdown = generateMarkdown(data);

    await writeFileAsync('NewREADME.md', markdown, "utf-8");
    console.log("Sucess! Your README.md file has been generated")
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();
