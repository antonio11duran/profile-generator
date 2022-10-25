const inquirer = require("inquirer");
const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = getSchool(school);
    }
    
    getRole() {
        return 'Intern';
    }

    getSchool() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What school does the intern attend?"
            }
        ])
        .then(val => {
            return this.school = val;
        })
    }

}

module.exports = Intern;