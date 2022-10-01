const Manager = require("./tests/manager.test")
const Engineer = require("./tests/engineer.test")
const Intern = require("./tests/intern.test")
const template = require('./src/template.js')
const renderEmployees = require("./src/team.html")
const inquirer = require('inquirer')
const fs = require('fs')

const employees=[];
start();

function start() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'start',
            message: 'Would you like to add an employee or render an HTML?',
            choices: [
                'Add',
                'Render'
            ]
        }
    ]).then(function(data) {
        const startselection = data.start;
        if (startselection === 'Add') {
            team();
        } else if (startselection === 'Render') {
            renderHTML();
        }
    }) 
}

function team() {
    inquirer.createPromptModule([
        {
            type: 'list',
            name: 'job',
            message: 'What type of employee would you like to add?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ]
        }
    ]).then(function(data) {
        const employeejob = data.role;
        if (employeejob === 'Manager') {
            addManager();
        } else if (employeejob === 'Engineer') {
            addEngineer();
        } else if (roleEmployee === 'Intern') {
            addIntern();
        }
    })
}

function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managername',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'manageroffice',
            message: 'What is the office number of the employee?'
        }
    ]).then(answer => {
        const manager = newmanager(answer.managername, answer.managerid, answer.manageremail, answer.manageroffice)
        employees.push(manager);
        start()
    })
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: 'What is the GitHub username of the employee?'
        }
    ]).then(answer => {
        const engineer = newengineer(answer.engineername, answer.engineerid, answer.engineeremail, answer.engineergithub)
        employees.push(engineer);
        start()
    })
}

function addIntern () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internname',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'internid',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'internschool',
            message: 'What is the school of the employee?'
        }
    ]).then(answer => {
        const manager = newmanager(answer.internname, answer.internid, answer.internemail, answer.internschool)
        employees.push(intern);
        start()
    })
}

function renderHTML(data) {
    fs.writeFile("./dist/employees.html", JSON.stringify(data), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('HTML has been created, go to the dist folder for file.')
        }
    })
}

function init() {
    inquirer.prompt(start).then(data => {
        fs.writeFile('team.html', renderHTML(data))
    })
}