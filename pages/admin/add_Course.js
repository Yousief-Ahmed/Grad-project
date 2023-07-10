// // Define an empty array to store the form data
// let formData = [];

// // Check if there is any existing data in the local storage
// const storedData = localStorage.getItem("formData");
// if (storedData) {
//   formData = JSON.parse(storedData); // Parse the JSON string to an array
// }

// const courseForm = document.querySelector(".course-form");
// const submitCourse = document.getElementById("submit-course");
// const listCourses = document.querySelector(".list-courses");

// submitCourse.addEventListener("click", function (event) {
//   event.preventDefault();
  
//   // Get the input values
//   const name = document.getElementById("nameInput").value;
//   const code = document.getElementById("codeInput").value;
//   const profId = document.getElementById("profIdInput").value;
//   const practicalHours = document.getElementById("practicalHoursInput").value;
//   const classHours = document.getElementById("classHoursInput").value;
//   const description = document.getElementById("descriptionInput").value;
//   const studyLevel = document.getElementById("studyLevelInput").value;
//   const semester = document.getElementById("semesterInput").value;
//   const type = document.getElementById("typeInput").value;

//   // Create a FileReader object to read the image file
//   const reader = new FileReader();

//   reader.onload = function () {
//     // The image file has been read successfully
//     const image = reader.result; // Get the base64-encoded image data
//     const entry = {
//       name: name,
//       code: code,
//       profId: profId,
//       practicalHours:practicalHours,
//       classHours:classHours,
//       description: description,
//       studyLevel: studyLevel,
//       semester: semester,
//       type:type,
//     };

//     formData.push(entry);

//     // Store the updated formData array in the local storage
//     localStorage.setItem("formData", JSON.stringify(formData));

//     courseForm.reset();

//   };
//   // Read the image file as a data URL

// });


// --------------------

// function saveCourse(event) {
//     event.preventDefault();
//   // Get form values
//   var name = document.getElementById("nameInput").value;
//   var code = document.getElementById("codeInput").value;
//   var profId = document.getElementById("profIdInput").value;
//   var pHours = document.getElementById("pHoursInput").value;
//   var cHours = document.getElementById("cHoursInput").value;
//   var description = document.getElementById("descriptionInput").value;
//   var studyLevel = document.getElementById("studyLevelInput").value;
//   var semester = document.getElementById("semesterInput").value;
//   var type = document.getElementById("typeInput").value;


//   // Create employee object
//   var course = {
//     name: name,
//     code: code,
//     profId: profId,
//     pHours:pHours,
//     cHours:cHours,
//     description:description,
//     studyLevel:studyLevel,
//     semester:semester,
//     type:type
//   };
//       // Check if local storage is available
//       if (typeof(Storage) !== 'undefined') {
//         // Retrieve existing professor data from local storage or initialize empty array
//         var courses = JSON.parse(localStorage.getItem('courses')) || [];
    
//         // Add new professor to the array
//         courses.push(courses);
    
//         // Save updated professor data to local storage
//         localStorage.setItem('courses', JSON.stringify(courses));
    
//         // Clear the form fields
//             document.getElementById("nameInput").value='';
//             document.getElementById("codeInput").value ='';
//             document.getElementById("profIdInput").value='';
//             document.getElementById("pHoursInput").value='';
//             document.getElementById("cHoursInput").value='';
//             document.getElementById("descriptionInput").value='';
//             document.getElementById("studyLevelInput").value='';
//             document.getElementById("semesterInput").value='';
//             document.getElementById("typeInput").value='';
       
//         // Refresh the courses table
//         displayCourses();
//       } else {
//         console.log('Local storage is not supported.');
//       }
//     }

// function displayCourses() {
//         var coursesTableBody = document.getElementById('coursesTableBody');
//         coursesTableBody.innerHTML = '';
      
//         // Check if local storage is available
//         if (typeof(Storage) !== 'undefined') {
//           // Retrieve professor data from local storage
//           var course = JSON.parse(localStorage.getItem('courses')) || [];
      
//           // Iterate over each professor and create a table row
//           for (var i = 0; i < courses.length; i++) {
//             var course = courses[i];
      
//             var row = document.createElement('tr');
//             row.innerHTML = '<td>' + course.name + '</td>' +
//                             '<td>' + course.code + '</td>' +
//                             '<td>' + course.profId + '</td>' +
//                             '<td>' + course.pHours + '</td>' +
//                             '<td>' + course.cHours + '</td>' +
//                             '<td>' + course.description + '</td>' +
//                             '<td>' + course.studyLevel + '</td>' +
//                             '<td>' + course.semester + '</td>' +
//                             '<td>' + course.type + '</td>' +

//                             '<td>' +
//                               '<button class="badge bg-info text-white" onclick="editprofessor(' + i + ')">Edit</button> ' +
//                               '<button class="badge bg-danger text-white" onclick="deleteprofessor(' + i + ')">Delete</button>' +
//                             '</td>';
      
//             coursesTableBody.appendChild(row);
//           }
//         } else {
//           console.log('Local storage is not supported.');
//         }
//       }

// function deleteCoures(index) {
//         // Check if local storage is available
//         if (typeof(Storage) !== 'undefined') {
//           // Retrieve professor data from local storage
//           var courses = JSON.parse(localStorage.getItem('courses')) || [];
      
//           // Remove the professor at the specified index from the array
//           professors.splice(index, 1);
      
//           // Save updated professor data to local storage
//           localStorage.setItem('courses', JSON.stringify(professors));
      
//           // Refresh the professor table
//           displayCourses();
//         } else {
//           console.log('Local storage is not supported.');
//         }
//       }


// function editCourse(index) {
//         // Check if local storage is available
//         if (typeof(Storage) !== 'undefined') {
//           // Retrieve professor data from local storage
//           var courses = JSON.parse(localStorage.getItem('courses')) || [];
      
//           // Get the professor at the specified index
//           var course = courses[index];
      
//           // Set the form values with the professor's information
//           document.getElementById("nameInput").value=course.name;
//             document.getElementById("codeInput").value =course.code;
//             document.getElementById("profIdInput").value=course.profId;
//             document.getElementById("pHoursInput").value=course.pHours;
//             document.getElementById("cHoursInput").value=course.cHours;
//             document.getElementById("descriptionInput").value=course.description;
//             document.getElementById("studyLevelInput").value=course.studyLevel;
//             document.getElementById("semesterInput").value=course.semester;
//             document.getElementById("typeInput").value=course.type;
       
      
//           // Delete the professor from the array
//           courses.splice(index, 1);
      
//           // Save updated professor data to local storage
//           localStorage.setItem('courses', JSON.stringify(courses));
      
//           // Refresh the professor table
//           displayCourses();
//         } else {
//           console.log('Local storage is not supported.');
//         }
//       }

// displayCourses();