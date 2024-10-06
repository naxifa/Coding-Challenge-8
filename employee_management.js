
// Task 1 - Creating an Employee Class

class Employee {
    constructor (name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
getDetails() {
    return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }}


let _employee = new Employee ("Alice", 80000, "Developer", "Engineering");
    console.log(_employee.getDetails());  // This will now output the details of the employee



// Task 2 - Creating a Department Class

class Department {
    constructor(name) {
        this.name = name 
        this.employees = []
    }
    addEmployee(employee) {
    this.employees.push(employee);
    }

    getDepartmentSalary() {
    return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
}






















