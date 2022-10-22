const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor(school) {
        this.school = getSchool(school);
    }

    getSchool() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What school do you go to?"
            }
        ])
        .then(val => {
            const internSchool = val;
        })
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;