
const inquirer = require("inquirer");
const questions = require("./company/questions.js");
const path = require("path");
const fs = require("fs");

const output_Direction = path.resolve(__dirname, "output");
const yieldPath = path.join(output_Direction, "team.html");

let employeeArray = [];

// function to ask User some questions
let promptUser = () => {
    return inquirer.prompt(questions)
        .then(function (answers) {

            let additionalEmployee;
            switch (answers.role) {
                case "Engineer":
                    additionalEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    employeeArray.push(additionalEmployee);
                    break;
                case "Manager":
                    additionalEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    employeeArray.push(additionalEmployee);
                    break;
                case "Intern":
                    additionalEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
                    employeeArray.push(additionalEmployee);
                    break;
            }
            //repeats the questions or ends them
            if (answers.addOrEnd) {
                return promptUser();
            }
            displayHTML();
        });
}

// function that displays HTML
let displayHTML = () => {
    let createHTML = render(employeeArray);
    fs.writeFile(yieldPath, createHTML, function(error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Successfully generated file!");
        }
    })
}

promptUser();