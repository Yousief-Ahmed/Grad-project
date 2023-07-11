// <!-- Competencies -->

  function addRowCc() {
    // Get the table
    var table = document.getElementById("tableCc");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var cC = newRow.insertCell();
    
    

    // Add content to the cells
    cC.innerHTML = `<select id="" class="form-control" required>
                      <option>choose...</option>
                      <option>1</option>
                       <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select> `;
   
    
  }

// <!-- LO -->

  function addRowLo() {
    // Get the table
    var table = document.getElementById("tableLo");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var ld = newRow.insertCell();
    var lo = newRow.insertCell();

    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    ld.innerHTML = `<select id="" class="form-control" required>
                      <option>choose...</option>
                      <option>Cognitive</option>
                       <option>Psychomotor</option>
                      <option>Affective</option>
                    </select> `;
   lo.innerHTML='<textarea  style="width: 750px; height: 50px; " id="autoresizing"></textarea> ';
    
  }

// <!-- course content -->

  function addRowCo() {
    // Get the table
    var table = document.getElementById("tableCo");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var content = newRow.insertCell();
    var week = newRow.insertCell();
    var lecture = newRow.insertCell();
    var tutorial = newRow.insertCell();


    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    content.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    week.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    lecture.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    tutorial.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    
  }

// <!-- Teaching Method -->

  function addRowTm() {
    // Get the table
    var table = document.getElementById("tableTm");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var tMethod = newRow.insertCell();
    


    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    tMethod.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    
    
  }

// <!-- Teaching Method Disabled -->

  function addRowTmD() {
    // Get the table
    var table = document.getElementById("tableTmD");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var tMethod = newRow.insertCell();
    var reason = newRow.insertCell();

    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    tMethod.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    reason.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
  }

// <!-- Evaluation Method -->

  function addRowEm() {
    // Get the table
    var table = document.getElementById("tableEm");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var eMethod = newRow.insertCell();
    var week = newRow.insertCell();
    var weights = newRow.insertCell();
    
    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    eMethod.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    week.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    weights.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
   
    
  }


// <!-- Refrences Method -->

  function addRowR() {
    // Get the table
    var table = document.getElementById("tableR");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var ref = newRow.insertCell();
    
    
    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    ref.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    
    
  }


// <!-- TCM content -->

  function addRowCLM() {
    // Get the table
    var table = document.getElementById("tableCLM");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var no = newRow.insertCell();
    var topic = newRow.insertCell();
    var cognitive = newRow.insertCell();
    var psychomotor = newRow.insertCell();
    var affective = newRow.insertCell();


    // Add content to the cells
    no.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    topic.innerHTML = '<input type="text"  class="form-control" id="" value="" required> ';
    cognitive.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    psychomotor.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    affective.innerHTML='<input type="number"  class="form-control" id="" value="" required> ';
    
  }


// <!-- TLM content -->

  function addRowTLM() {
    // Get the table
    var table = document.getElementById("tableTLM");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var eMethod = newRow.insertCell();
    var lecture = newRow.insertCell();
    var pSolving = newRow.insertCell();
    var discussion = newRow.insertCell();
    var eLearning = newRow.insertCell();
    var project = newRow.insertCell();
    


    // Add content to the cells
      eMethod.innerHTML='<select id="" class="form-control" required> <option>choose...</option><option>Cognitive</option> <option>Psychomotor</option> <option>Affective</option></select> ' ;
      lecture.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      pSolving.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      discussion.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      eLearning.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      project.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
    
  }

// <!-- ALM content -->

  function addRowALM() {
    // Get the table
    var table = document.getElementById("tableALM");

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    var eMethod = newRow.insertCell();
    var assigments = newRow.insertCell();
    var quizzes = newRow.insertCell();
    var mExam = newRow.insertCell();
    var project = newRow.insertCell();
    var fExam = newRow.insertCell();
    


    // Add content to the cells
      eMethod.innerHTML='<select id="" class="form-control" required> <option>choose...</option><option>Cognitive</option> <option>Psychomotor</option> <option>Affective</option></select> ' ;
      assigments.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      quizzes.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      mExam.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      project.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
      fExam.innerHTML='<input type="number"  class="form-control" id="" value="" >';    
    
  }
