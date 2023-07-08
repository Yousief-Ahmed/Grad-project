// Function to save student data to local storage
function saveStudent(event) {
  event.preventDefault();
  // Get form values
  var name = document.getElementById('name').value;
  var code = document.getElementById('code').value;
  var email = document.getElementById('email').value;
  var studyLevel = document.getElementById('studyLevel').value;

  // Create student object
  var student = {
    name: name,
    code: code,
    email: email,
    studyLevel: studyLevel
  };

  // Check if local storage is available
  if (typeof(Storage) !== 'undefined') {
    // Retrieve existing student data from local storage or initialize empty array
    var students = JSON.parse(localStorage.getItem('students')) || [];

    // Add new student to the array
    students.push(student);

    // Save updated student data to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('code').value = '';
    document.getElementById('email').value = '';
    document.getElementById('studyLevel').value = '';

    // Refresh the student table
    displayStudents();
  } else {
    console.log('Local storage is not supported.');
  }
}

// Function to display students in the table
function displayStudents() {
  var studentTableBody = document.getElementById('studentTableBody');
  studentTableBody.innerHTML = '';

  // Check if local storage is available
  if (typeof(Storage) !== 'undefined') {
    // Retrieve student data from local storage
    var students = JSON.parse(localStorage.getItem('students')) || [];

    // Iterate over each student and create a table row
    for (var i = 0; i < students.length; i++) {
      var student = students[i];

      var row = document.createElement('tr');
      row.innerHTML = '<td>' + student.name + '</td>' +
                      '<td>' + student.code + '</td>' +
                      '<td>' + student.email + '</td>' +
                      '<td>' + student.studyLevel + '</td>' +
                      '<td>' +
                        '<button class="badge bg-info text-white" onclick="editStudent(' + i + ')">Edit</button> ' +
                        '<button class="badge bg-danger text-white" onclick="deleteStudent(' + i + ')">Delete</button>' +
                      '</td>';

      studentTableBody.appendChild(row);
    }
  } else {
    console.log('Local storage is not supported.');
  }
}

// Function to delete a student from the table and local storage
function deleteStudent(index) {
  // Check if local storage is available
  if (typeof(Storage) !== 'undefined') {
    // Retrieve student data from local storage
    var students = JSON.parse(localStorage.getItem('students')) || [];

    // Remove the student at the specified index from the array
    students.splice(index, 1);

    // Save updated student data to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Refresh the student table
    displayStudents();
  } else {
    console.log('Local storage is not supported.');
  }
}

// Function to edit a student's information
function editStudent(index) {
  // Check if local storage is available
  if (typeof(Storage) !== 'undefined') {
    // Retrieve student data from local storage
    var students = JSON.parse(localStorage.getItem('students')) || [];

    // Get the student at the specified index
    var student = students[index];

    // Set the form values with the student's information
    document.getElementById('name').value = student.name;
    document.getElementById('code').value = student.code;
    document.getElementById('email').value = student.email;
    document.getElementById('studyLevel').value = student.studyLevel;

    // Delete the student from the array
    students.splice(index, 1);

    // Save updated student data to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Refresh the student table
    displayStudents();
  } else {
    console.log('Local storage is not supported.');
  }
}

// Call the displayStudents() function to populate the table on page load
displayStudents();
