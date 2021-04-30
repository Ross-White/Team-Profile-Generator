const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamMembers = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number."
        }])
        .then(answers => {
            const manager = new Manager(answers.manName, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
        createTeam();
        });
}   

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamType",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "No more team members"]
        }]).then(teamMember => {
            switch (teamMember.teamType) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    console.log(teamMembers);
            }
        });            
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub user name."
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engName, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);    
        createTeam()
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of your school."
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.id, answers.email, answers.school);
        teamMembers.push(intern);    
        createTeam()
    })
}

createManager();