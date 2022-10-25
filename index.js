const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");
const fs = require("fs");
const allAnswersArray = [];

const init = () => { managerQuest() };

const managerQuest = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ])
        .then((managerAnswers) => {
            managerAnswers = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
            allAnswersArray.push(managerAnswers);
            return newEmployee();
        })
}

const engineerQuest = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        }
    ])
        .then((engineerAnswers) => {
            engineerAnswers = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
            allAnswersArray.push(engineerAnswers);
            return newEmployee();
        })
}

const internQuest = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
        }
    ])
        .then((internAnswers) => {
            internAnswers = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            allAnswersArray.push(internAnswers);
            return newEmployee();
        })
}

newEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Would you like to add another employee?",
                choices: ["Engineer", "Intern", "No"]
            }
        ])
        .then(val => {
            if (val.role === "Engineer") {
                engineerQuest();
            } else if (val.role === "Intern") {
                internQuest();
            }
            else {
                quit();
            }
        });
}

quit = () => {
    let html = template(allAnswersArray);

    fs.writeFile(`./dist/index.html`, html, (err) =>
        err
            ? console.error(err)
            : console.log(
                `Team Page has been created!`
            )
    );
}

init();