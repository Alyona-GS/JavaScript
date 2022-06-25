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

const reduceCallback = function(acc, item) {
    return acc + Number(item.salary)
}

const sortCallBack = function(a, b) {
    return a.salary - b.salary
}

const filterCallBack = function(emp) {
    return emp.salary > 4500 && emp.age > 25
}

const averageSalary = employees.reduce(reduceCallback, 0)/employees.length;
const sortedBySalary = employees.sort(sortCallBack);
const filterBySalaryAge = employees.filter(filterCallBack);

console.log(averageSalary, filterBySalaryAge);