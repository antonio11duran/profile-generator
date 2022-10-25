const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
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
                message: "What is the engineer's github username?"
            }
        ])
        .then(val => {return this.github = val})
    }
}

module.exports = Engineer;