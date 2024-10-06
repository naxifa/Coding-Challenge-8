
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



// Task 2 & 4 - Creating a Department Class

class Department {
    constructor(name) {
        this.name = name 
        this.employees = []
           }
    addEmployee(employee) {
    this.employees.push(employee);
           }
           
    // To check if the employee is a manager instance to decide if a bonus should be added
    getDepartmentSalary() {
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.salary;  // Adds the employee's salary to the total
        });
        return totalSalary;
    }
    
    calculateTotalSalaryWithBonus () {
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.salary;
            if (employee instanceof Manager) {
                totalSalary += employee.bonus; // Manager's bonus added if applicable
            }
        });
    return totalSalary;
        }}
    


    


// Tssk 3 - Creating a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); // Calling the parent constructor
        this.bonus = bonus;
            }

    getDetails() {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`;
            }}



// Task 5 - Create departments

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const angela = new Employee("Angela", 80000, "Developer", "Engineering");
const billy = new Employee("Billy", 75000, "Designer", "Marketing");
const carmilla = new Manager("Carmilla", 120000, "Engineering Manager", "Engineering", 20000);
const dyrroth = new Manager("Dyrroth", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(angela);
engineering.addEmployee(carmilla);
marketing.addEmployee(billy);
marketing.addEmployee(dyrroth);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);














