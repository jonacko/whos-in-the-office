const inquirer = require("inquirer")

const TeamManager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');

const buildTeamPage = require('../src/buildHTMLPage');

const managers = [];
const interns = [];
const engineers = [];


const questions = require('./questions')


const askInternQuestions = () => {
    inquirer
    .prompt(questions.internQuestions)
    .then((response) => {

    const newIntern = new Intern (response.name, response.id, response.email, response.school);

    console.log(newIntern);
    interns.push(newIntern);

console.log(interns);

// shows main menu again
askMenuQuestions();

})
}


const askTeamManagerQuestions = () => {
    inquirer
    .prompt(questions.teamManagerQuestions)
    .then((response) => {

    const manager = new TeamManager(response.name, response.id, response.email, response.phone);

    console.log(manager);
    managers.push(manager);

    console.log(managers);




// shows main menu again
askMenuQuestions();

})
}

const askEngineerQuestions = () => {
    inquirer
    .prompt(questions.engineerQuestions)
    .then((response) => {

    const engineer = new Engineer (response.name, response.id, response.email, response.github);

    console.log(engineer);
    engineers.push(engineer);

    console.log(engineers);

// const buildTeamPage = () => {

// }


// shows main menu again
askMenuQuestions();

})
}



const askMenuQuestions = () => {
    inquirer
    .prompt(questions.mainQuestions)
    .then((response)=> {
        console.log(response);
        switch(response.mainmenu) {
            case 'Add team manager':

            askTeamManagerQuestions()
            break;
            case 'Add engineer':

            askEngineerQuestions()
            break;
            case 'Add intern':

            askInternQuestions()
            break;
            case 'Build the team':
            console.log('Build the team')

            buildTeamPage(managers, engineers, interns);
            break;
            default: console.log('default')
            break;


        }
    }) 
}

module.exports = askMenuQuestions;