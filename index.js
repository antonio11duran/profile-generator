const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const allAnswers = [];

const init = (managerAnswers) => {
    managerAnswers = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    allAnswers.push(managerAnswers);
    return newEmployee();
}

const engineerQuest = (engineerAnswers) => {
    engineerAnswers = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
    allAnswers.push(engineerAnswers);
    return newEmployee();
}

const internQuest = (internAnswers) => {
    internAnswers = new intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.github);
    allAnswers.push(internAnswers);
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
            } else if(val === 'Intern') {
                internQuest();
            }
            else {
                this.quit();
            }
        });
}

quit = () => {
    console.log("\nGoodbye!");
    process.exit(0);
}

employee.start();