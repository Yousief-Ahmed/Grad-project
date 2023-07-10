// Function to save employee data to local storage
function saveEmployee(event) {
    event.preventDefault();
  // Get form values
  var name = document.getElementById("name").value;
  var code = document.getElementById("code").value;
  var email = document.getElementById("email").value;

  // Create employee object
  var employee = {
    name: name,
    code: code,
    email: email,
  };

  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve existing employee data from local storage or initialize empty array
    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee to the array
    employees.push(employee);

    // Save updated employee data to local storage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("email").value = "";

    // Refresh the employee table
    displayemployee();
  } else {
    console.log("Local storage is not supported.");
  }
}

// Function to display employees in the table
function displayemployee() {
  var employeeTableBody = document.getElementById("employeeTableBody");
  employeeTableBody.innerHTML = "";

  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve employee data from local storage
    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Iterate over each employee and create a table row
    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];

      var row = document.createElement("tr");
      row.innerHTML =
        "<td>" +
        employee.name +
        "</td>" +
        "<td>" +
        employee.code +
        "</td>" +
        "<td>" +
        employee.email +
        "</td>" +
        "<td>" +
        '<button class="badge bg-info text-white" onclick="editemployee(' +
        i +
        ')">Edit</button> ' +
        '<button class="badge bg-danger text-white" onclick="deleteemployee(' +
        i +
        ')">Delete</button>' +
        "</td>";

      employeeTableBody.appendChild(row);
    }
  } else {
    console.log("Local storage is not supported.");
  }
}

// Function to delete a employee from the table and local storage
function deleteemployee(index) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve employee data from local storage
    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Remove the employee at the specified index from the array
    employees.splice(index, 1);

    // Save updated employee data to local storage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Refresh the employee table
    displayemployee();
  } else {
    console.log("Local storage is not supported.");
  }
}

// Function to edit a employee's information
function editemployee(index) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve employee data from local storage
    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Get the employee at the specified index
    var employee = employees[index];

    // Set the form values with the employee's information
    document.getElementById("name").value = employee.name;
    document.getElementById("code").value = employee.code;
    document.getElementById("email").value = employee.email;

    // Delete the employee from the array
    employees.splice(index, 1);

    // Save updated employee data to local storage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Refresh the employee table
    displayemployee();
  } else {
    console.log("Local storage is not supported.");
  }
}

// Call the displayemployee() function to populate the table on page load
displayemployee();
