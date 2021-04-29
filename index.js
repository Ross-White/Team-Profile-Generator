const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');


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
            console.log("Manager Created");
        
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
                    buildTeam();
            }
        });            
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
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
        }
    ])
    .then(engineer => {
        console.log("New Engineer Created");
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
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
    .then(engineer => {
        console.log("New Intern Created");
    })
}



createManager();