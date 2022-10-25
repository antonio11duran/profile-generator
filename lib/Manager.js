const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "office",
                    message: "What is the manager's office number?"
                }
            ])
            .then(val => { return this.officeNumber = val; })
    }
}

module.exports = Manager;