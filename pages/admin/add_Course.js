// Define an empty array to store the form data
let formData = [];

// Check if there is any existing data in the local storage
const storedData = localStorage.getItem("formData");
if (storedData) {
  formData = JSON.parse(storedData); // Parse the JSON string to an array
}

const courseForm = document.querySelector(".course-form");
const submitCourse = document.getElementById("submit-course");
const listCourses = document.querySelector(".list-courses");

submitCourse.addEventListener("click", function (event) {
  event.preventDefault();
  
  // Get the input values
  const name = document.getElementById("nameInput").value;
  const code = document.getElementById("codeInput").value;
  const description = document.getElementById("descriptionInput").value;
    const studyLevel = document.getElementById("studyLevelInput").value;
  const semester = document.getElementById("semesterInput").value;
  // Create a FileReader object to read the image file
  const reader = new FileReader();

  reader.onload = function () {
    // The image file has been read successfully
    const image = reader.result; // Get the base64-encoded image data
    const entry = {
      name: name,
      code: code,
      description: description,
      studyLevel: studyLevel,
      semester: semester,
    };

    formData.push(entry);

    // Store the updated formData array in the local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    courseForm.reset();

  };
  // Read the image file as a data URL

});
