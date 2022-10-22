const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "office",
                message: "What is the Manager's office number?"
            }
        ])
        .then(val => {
            
        })
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;