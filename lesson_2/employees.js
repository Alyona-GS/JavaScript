const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]

const averageSalary = employees.reduce((acc, item) => acc + Number(item.salary), 0)/employees.length;
const sortedBySalary = employees.sort((a, b) => a.salary - b.salary);
const filterBySalaryAge = employees.filter(emp => emp.salary > 4500 && emp.age > 25);

console.log(averageSalary, filterBySalaryAge);