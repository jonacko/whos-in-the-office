const mainQuestions = [  {
    
        type: 'list',
        name: 'mainmenu',
        message: 'What would you like to do?',
        choices: ['Add team manager', 'Add engineer', 'Add intern', 'Build the team'],
    },

]

const teamManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',

    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },
    {
        type: 'input',
        name: 'phone',
        message: 'What is your office phone number?',

    },
  
  ]

  const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',

    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',

    },
  
  ]

  const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',

    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of your school?',

    },
  
  ]

  module.exports = {
      mainQuestions,
      teamManagerQuestions,
      engineerQuestions,
      internQuestions
  }