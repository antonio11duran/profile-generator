const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(github) {
        this.github = getGithub(github);
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is your github username?"
            }
        ])
    }
}

module.exports = Engineer;