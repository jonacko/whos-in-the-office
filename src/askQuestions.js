const inquirer = require("inquirer")

const manager = require('../lib/manager');
const intern = require('../lib/intern');
const engineer = require('../lib/engineer');

const managers = [];
const interns = [];
const engineers = [];

const questions = require('./buildHTMLPage')


const askInternQuestions = () => {
    inquirer
    .prompt(questions.internQuestions)
    .then((response) => {

    const intern = new intern (response.name, response.id, response.email, response.school);

    interns.push(intern);



// shows main menu again
askMenuQuestions();

})
}


const askTeamManagerQuestions = () => {
    inquirer
    .prompt(questions.teamManagerQuestions)
    .then((response) => {

    const manager = new teamManager (response.name, response.id, response.email, response.phone);

    managers.push(manager);



// shows main menu again
askMenuQuestions();

})
}

const askEngineerQuestions = () => {
    inquirer
    .prompt(questions.engineerQuestions)
    .then((response) => {

    const engineer = new Engineer (response.name, response.id, response.email, response.github);

    engineers.push(engineer);



// shows main menu again
askMenuQuestions();

})
}



const askMenuQuestions = () => {
    inquirer
    .prompt(questions.mainQuestions)
    .then((response)) => {
        switch(response.option) {
            case 'Add a manager':

            askTeamManagerQuestions()
            break;
            case 'Add an engineer':

            askEngineerQuestions()
            break;
            case 'Add an intern':

            askInternQuestions()
            break;
            case 'Build the team':
            console.log('Build the team')

            buildTeamPage(managers, engineers, interns);
            break;
            default: console.log('default')
            break;


        }
    }
}

module.exports = askMenuQuestions;