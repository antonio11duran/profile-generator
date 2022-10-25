const inquirer = require('inquirer');
const Engineer = require(`./Engineer`);
const Intern = require(`./Intern`);
const Manager = require(`./Manager`);
const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
                return this.name = val;
            })
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
                return this.id = val;
            })
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
                return this.email = val;
            })
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;