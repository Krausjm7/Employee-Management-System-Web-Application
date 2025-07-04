const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Eve Davis', age: 32, department: 'HR', salary: 48000 },
    { id: 5, name: 'Charlie Brown', age: 40, department: 'IT', salary: 55000 }
    //... More employee records can be added here
];

// Function to display all employees
function displayAllEmployees() {
    const allEmployeesDisplay = employees.map((employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = allEmployeesDisplay;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find employee by ID (reads from input field)
function findEmployeeById() {
    const employeeIdInput = document.getElementById('employeeIdInput');
    const employeeId = parseInt(employeeIdInput.value); // Get value and convert to number

    if (isNaN(employeeId) || employeeIdInput.value.trim() === '') {
        document.getElementById('employeesDetails').innerHTML = 'Please enter a valid employee ID.';
        return;
    }

    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID.';
    }
}

// --- Event Listeners to connect buttons to functions ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all employees on page load (optional, but good for starting view)
    displayAllEmployees();

    // Get references to your buttons by their IDs
    const showAllEmployeesBtn = document.getElementById('showAllEmployeesBtn');
    const calcSalariesBtn = document.getElementById('calcSalariesBtn');
    const showHREmployeesBtn = document.getElementById('showHREmployeesBtn');
    const findEmployeeBtn = document.getElementById('findEmployeeBtn');

    // Attach event listeners
    if (showAllEmployeesBtn) {
        showAllEmployeesBtn.addEventListener('click', displayAllEmployees);
    }
    if (calcSalariesBtn) {
        calcSalariesBtn.addEventListener('click', calculateTotalSalaries);
    }
    if (showHREmployeesBtn) {
        showHREmployeesBtn.addEventListener('click', displayHREmployees);
    }
    if (findEmployeeBtn) {
        findEmployeeBtn.addEventListener('click', findEmployeeById);
    }
});
