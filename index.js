const Manager = require("./tests/manager.test")
const Engineer = require("./tests/engineer.test")
const Intern = require("./tests/intern.test")
const template = require('./src/template.js')
const renderEmployees = require("./dist/index.html")
const inquirer = require('inquirer')
const fs = require('fs')


class questions{
    constructor() {
        this.employees=[]
    }
} 
start();

function start() {
    let employees = []
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
            writeFile();
        }
    }) 


function team() {
    inquirer.prompt([
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
    ]).then((data) => {
        if (data.job === 'Manager') {
            addManager();
        } else if (job === 'Engineer') {
            addEngineer();
        } else if (job === 'Intern') {
            addIntern();
        }
    })
}

function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'manageroffice',
            message: 'What is the office number of the employee?'
        }
    ]).then(({ name, id, email, manageroffice}) => {
        const manager = (name, id, email, manageroffice)
        employees.push(manager)
        start()
    })

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: 'What is the GitHub username of the employee?'
        }
    ]).then(answer => {
        const engineer = newengineer(answer.name, answer.id, answer.email, answer.engineergithub)
        employees.push(engineer);
        start()
    })
}

function addIntern () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id # of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
            type: 'input',
            name: 'internschool',
            message: 'What is the school of the employee?'
        }
    ]).then(answer => {
        const intern = newintern(answer.name, answer.id, answer.email, answer.internschool)
        employees.push(intern);
        start()
    })
}
}
}
function writeFile() {
    then(data => {
    const pageHTML = template(data)
    fs.writeFile("./dist/index.html", pageHTML, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('HTML has been created, go to the dist folder for file.')
        }
    })
})
}
const init = new questions();
module.exports=questions