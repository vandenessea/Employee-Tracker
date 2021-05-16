const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table')

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '1234',
    database: 'employee_trackDB',
  });

//make connection to database to begin application
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  startApplication()
})

const startApplication = () => {
  // Asks initial question about what user 
      inquirer
          .prompt({
              name: 'userResponse',
              type: 'list',
              message: 'What would you like to do?',
          choices: [
              'View Departments',
              'View Roles',
              'View Employees',
              'Exit'
          ],      
      })
      .then((anwser) => {
          console.log("Saturday",anwser)
           switch (anwser.userResponse) {
              case 'View Departments':
                  console.log('viewingDepartments')
                  viewingDepartments()
                  break;
              case 'View Roles':
                console.log('viewingRoles')
                viewingRoles()
                  //roles();
                  break;
              case 'View Employees':
                console.log('viewingEmployees')
                viewingEmployee()
                  //employees();
                  break;
              case 'Exit':
                  console.log('Exiting...');
                  connection.end();
                  break;
          }

      });
   }

const viewingDepartments =() => {

  inquirer
    .prompt({
        name: 'deptResponse',
        type: 'list',
        message: 'What would you like to do?',
    choices: [
        'View all Departments',
        'Add Departments',
    ],      
    })
    .then((anwser)=> {
      console.log(anwser)
      //hinge is a dating website which has nothing to do with what were doing, but it serves as the .then response which is the choice that was chosen and is then shown via console.log.
    
      switch (anwser.deptResponse) {
        case 'View all Departments':
          connection.query(
            'SELECT * FROM department',
            (err, res) => {
                //if response exists
                if (res) {
                    console.log('\n List of Departments: \n');
                    res.forEach((response) => {console.log('Class',response.name)});
                    //console.log('absoloutly',res);
                    startApplication();
                } else {
                    console.log(`Error! ... ${err}`)
                }
            })
            break;
        case 'Add Departments':
          
            break;
    }




})
}


const viewingRoles =() => {

    inquirer
        .prompt({
              name: 'rolesResponse',
              type: 'list',
              message: 'What would you like to do?',
        choices: [
              'View all Roles',
              'Add Roles',
        ],      
        })
        .then((hinge)=> {
            console.log(hinge)
            //hinge is a dating website which has nothing to do with what were doing, but it serves as the .then response which is the choice that was chosen and is then shown via console.log.
          
        switch (hinge.rolesResponse) {
            case 'View all Roles':
                connection.query(
                  'SELECT * FROM roles',
                  (err, res) => {
                      //if response exists
                      if (res) {
                          console.log('\n List of Roles: \n');
                          res.forEach((response) => {console.log(response.first_name)});
                          console.log('wombat');
                          startApplication();
                      } else {
                          console.log(`Error! ... ${err}`)
                      }
                  })
                  break;
        case 'Add Roles':
                
            break;
    }
      
      
      
      
})
}



const viewingEmployee =() => {

    inquirer
    .prompt({
                name: 'employeesResponse',
                type: 'list',
                message: 'What would you like to do?',
            choices: [
                  'View all Employees',
                  'Add Employees',
              ],      
              })
              .then((bing)=> {
                console.log(bing)
                //hinge is a dating website which has nothing to do with what were doing, but it serves as the .then response which is the choice that was chosen and is then shown via console.log.
              
                switch (bing.employeeResponse) {
                  case 'View all Employees':
                    connection.query(
                      'SELECT * FROM Employees',
                      (err, res) => {
                          //if response exists
                          if (res) {
                              console.log('\n List of Employees: \n');
                              res.forEach((response) => {console.log(response.name)});
                              console.log('');
                              startApplication();
                          } else {
                              console.log(`Error! ... ${err}`)
                          }
                      })
                      break;
        case 'Add Employees':
                    
            break;
    }
          
          
          
          
})
    
    


              
  //startApplication()



}




















