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

    return
    <!DOCTYPE html>

}

