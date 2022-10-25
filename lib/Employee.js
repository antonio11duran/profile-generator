const inquirer = require('inquirer');
const Engineer = require(`./Engineer`);
const Intern = require(`./Intern`);
const Manager = require(`./Manager`);
const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = getName(name);
        this.id = getId(id);
        this.email = getEmail(email);
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?"
                }
            ])
            .then(val => {
                const employeeName = val;
            })
        this.getId();
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "id",
                    message: "What is the employee's id number?"
                }
            ])
            .then(val => {
                const employeeId = val;
            })
        this.getEmail();
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "email",
                    message: "What is the employee's email?"
                }
            ])
            .then(val => {
                const employeeEmail = val;
            })
    }

    getRole() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "role",
                    message: "What role does the employee do at the company?",
                    choices: ["Manager", "Engineer", "Intern", "Employee"]
                }
            ])
            .then(val => {
                if (val === "Manager") {
                    this.newE = new Manager()
                }
            })
        return 'Employee';
    }

    newEmployee() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "addEmployee",
                    message: "Would you like to add an employee to your team?",
                    choices: ["Yes", "No"]
                }
            ])
            .then(val => {
                // If the user says yes to another game, play again, otherwise quit the game
                if (val.choice === 'Yes') {
                    this.getRole();
                } else {
                    this.quit();
                }
            });
    }

    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
    }
}

module.exports = Employee;