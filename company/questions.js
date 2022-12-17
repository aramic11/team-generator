//Questions for the User to answer
const questions =
    [
        {
            type: "input",
            name: "name",
            message: "What is the employee's first and last name?",
            validate: (answer) => {
                if (!answer) {
                console.log("Please enter a name");
                return false;
                } 
            return true;
            }
        },
        //Ask for ID
        {
            type: "input",
            name: "id",
            message: "What is the employee's Identification Number?",
            validate: (answer) => {
                if (!answer) {
                console.log("Please enter an id");
                return false;
                } 
            return true;
            }
        },
        //Ask for  email
        {
            type: "input",
            name: "email",
            message: "What is the employee's work email?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter an email");
                    return false;
                } 
                return true;
            }
        },
        //ask for the role
        {
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
            message: "What is the employee's general role?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a role");
                    return false;
                } 
                return true;
            }
        },
        //ask for office number
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manger's office number?",
            when: (answers) => answers.role === "Manager",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter an office number");
                    return false;
                } 
                return true;
            }
        },
        //ask for github user
        {
            type: "input",
            name: "github",
            message: "What is the github user name?",
            when: (answers) => answers.role === "Engineer",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a github username");
                    return false;
                } 
                return true;
            }
        },
        //ask for school if its an intern
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            when: (answers) => answers.role === "Intern",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter a school");
                    return false;
                } 
                return true;
            }
        },
        //add more employees if theres more
        {
            type: "confirm",
            name: "addOrEnd",
            message: "Would you like to add an additional employee?",
            validate: (answer) => {
                if (!answer) {
                    console.log("Please enter yes or no");
                    return false;
                } 
                return true;
            }
        }
    ];

module.exports = questions;