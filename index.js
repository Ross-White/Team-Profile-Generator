const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const CSS = require('./src/styles');

const teamMembers = [];

const outputPath = path.resolve(__dirname, "output");
const filePath = path.join(outputPath, "index.html");
const cssFilePath = path.join(outputPath, "styles.css");

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
                    createFile(teamMembers);
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
 
function createFile(teamMembers) {
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
      }
      fs.writeFileSync(filePath, renderHTML(teamMembers), "utf-8");
      fs.writeFileSync(cssFilePath, CSS);
}

function renderHTML() {
    const cardHTML = [];
    cardHTML.push(teamMembers
        .filter(teamMember => teamMember.getRole() === 'Manager')
        .map(manager => manager.createManagerCard()));
    cardHTML.push(teamMembers
        .filter(teamMember => teamMember.getRole() === 'Engineer')
        .map(engineer => engineer.createEngineerCard()));
    cardHTML.push(teamMembers
        .filter(teamMember => teamMember.getRole() === 'Intern')
        .map(intern => intern.createInternCard()));
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">    <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <header class="jumbotron text-center">
            <h1>Team Profiles</h1>
            </header>
            <main class="row">
                ${cardHTML.join('')}
               
            </main>
            
        </body>
        </html>`
    };

function init() {
    createManager()
};

init();