
// Task 1 - Create an Employee Class

class Employee {
    constructor (name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
getDetails() {
    return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
    }}

    let _employee = new Employee ("Alice", 80000, "Developer", "Engineering");
    console.log(_employee.getDetails());  // This will now output the details of the employee


























