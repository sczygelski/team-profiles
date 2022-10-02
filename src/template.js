function generateHTML(data) {
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
    }
}