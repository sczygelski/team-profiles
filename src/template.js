function generateHTML(data) {
    let employees = ``
    for (let i = 0; i < data.length; i++) {
       let extra = ``;
       if(data[i].getRole() === 'Manager'){
           extra=data[i].manageroffice()
       }
       else if(data[i].getRole() === 'Engineer'){
           extra=data[i].engneergithub()
       }
       else if(data[i].getRole() === 'Intern'){
           extra=data[i].internschool()
       }

       let card = `<div>
        <h2>${data[i].name()}</h2>
        <h3>${data[i].role()}</h3>
        <p>ID: ${data[i].id()}</p>
        <p><a href="mailto:https://${data[i].email}">${data[i].email()}</a></p>
        <p>${extra}</p>
       </div>`

       employees += card;
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        <title>Team Profile</title>
        <link real="stylesheet" href="style.css"
    </head>
    <body>
        <div>
        ${employees}
        </div>
    </body>
    </html>
    `
}

module.exports = generateHTML
