// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email; 
        this.role = role;
    }
    obtainName() {
        return this.name;
    }
    obtainId() {
        return this.id;
    }
    obtainEmail() {
        return this.email;
    }
    obtainRole() {
        return this.role;
    }
}

module.exports = Employee;