const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");
const allAnswersArray = [];

const init = () => { managerQuest() };

const managerQuest = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
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
    engineerAnswers = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
    allAnswersArray.push(engineerAnswers);
    return newEmployee();
}

const internQuest = () => {
    internAnswers = new intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.github);
    allAnswersArray.push(internAnswers);
    return newEmployee();
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
            if (val === 'Engineer') {
                engineerQuest();
            } else if (val === 'Intern') {
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