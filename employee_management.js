
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


// Tssk 3 - Creating a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
            }

    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`;
            }}


















