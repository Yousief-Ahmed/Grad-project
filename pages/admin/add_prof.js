// Function to save professor data to local storage
function saveProfessor(event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var code = document.getElementById('code').value;
    var email = document.getElementById('email').value;
    var studyLevel = document.getElementById('studyLevel').value;
    var course = document.getElementById('course').value;
  
    // Create professor object
    var professor = {
      name: name,
      code: code,
      email: email,
      course: course,
      studyLevel: studyLevel
    };
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve existing professor data from local storage or initialize empty array
      var professors = JSON.parse(localStorage.getItem('professors')) || [];
  
      // Add new professor to the array
      professors.push(professor);
  
      // Save updated professor data to local storage
      localStorage.setItem('professors', JSON.stringify(professors));
  
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('code').value = '';
      document.getElementById('email').value = '';
      document.getElementById('studyLevel').value = '';
      document.getElementById('course').value = '';
  
      // Refresh the professor table
      displayProfessor();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to display professors in the table
  function displayProfessor() {
    var professorTableBody = document.getElementById('professorTableBody');
    professorTableBody.innerHTML = '';
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve professor data from local storage
      var professors = JSON.parse(localStorage.getItem('professors')) || [];
  
      // Iterate over each professor and create a table row
      for (var i = 0; i < professors.length; i++) {
        var professor = professors[i];
  
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + professor.name + '</td>' +
                        '<td>' + professor.code + '</td>' +
                        '<td>' + professor.email + '</td>' +
                        '<td>' + professor.course + '</td>' +
                        '<td>' + professor.studyLevel + '</td>' +
                        '<td>' +
                          '<button class="badge bg-info text-white" onclick="editprofessor(' + i + ')">Edit</button> ' +
                          '<button class="badge bg-danger text-white" onclick="deleteprofessor(' + i + ')">Delete</button>' +
                        '</td>';
  
        professorTableBody.appendChild(row);
      }
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to delete a professor from the table and local storage
  function deleteprofessor(index) {
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve professor data from local storage
      var professors = JSON.parse(localStorage.getItem('professors')) || [];
  
      // Remove the professor at the specified index from the array
      professors.splice(index, 1);
  
      // Save updated professor data to local storage
      localStorage.setItem('professors', JSON.stringify(professors));
  
      // Refresh the professor table
      displayProfessor();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to edit a professor's information
  function editprofessor(index) {
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve professor data from local storage
      var professors = JSON.parse(localStorage.getItem('professors')) || [];
  
      // Get the professor at the specified index
      var professor = professors[index];
  
      // Set the form values with the professor's information
      document.getElementById('name').value = professor.name;
      document.getElementById('code').value = professor.code;
      document.getElementById('email').value = professor.email;
      document.getElementById('course').value = professor.course;
      document.getElementById('studyLevel').value = professor.studyLevel;
  
      // Delete the professor from the array
      professors.splice(index, 1);
  
      // Save updated professor data to local storage
      localStorage.setItem('professors', JSON.stringify(professors));
  
      // Refresh the professor table
      displayProfessor();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Call the displayProfessor() function to populate the table on page load
  displayProfessor();
  