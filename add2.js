var i = 1;
var a=1;
var b=1;
var z=1;
var e=1;
var f=1;
var p=1;
var q=1;

 // counter to track number of divs
$("#butn1").click(function () {
    if (i < 4) { // check if three divs have been created

        // create a div and use index for id
        var $d = $("<div />", {
            id: "d" + i,
            class: 'container'
        });

        // loop for creating 4 inputs
        for (n = 1; n < 2; n++) {
            // create an input and use index for id
            var $i = $("<input />", {
                type: "text",
                id: "i" + n,
                placeholder:++a
            });

            // append the input to the div
            $d.append($i);
        }
        // append the div to the wrapper
        $('#wrapp1').append($d);

        // increment the index for div creation
        i++;
    }
    i=0;
}

);
$("#butn2").click(function () {
    if (i < 4) { // check if three divs have been created
 
        // create a div and use index for id
        var $d = $("<div />", {
            id: "d" + i,
            class: 'container'
        });
 
        // loop for creating 4 inputs
        for (n = 1; n < 2; n++) {
          
            // create an input and use index for id
            var $i = $("<input />", {
                type: "text",
                id: "i" + n,
                placeholder:++b
            });
 
            // append the input to the div
            $d.append($i);
        }
        // append the div to the wrapper
        $('#wrapp2').append($d);
 
        // increment the index for div creation
        i++;
    }
    i=0;
 }
 
);

$("#butn4").click(function () {
    if (i < 4) { // check if three divs have been created
 
        // create a div and use index for id
        var $d = $("<div />", {
            id: "d" + i,
            class: 'container'
        });
 
        // loop for creating 4 inputs
        for (n = 1; n < 2; n++) {
          
            // create an input and use index for id
            var $i = $("<input />", {
                type: "text",
                id: "i" + n,
                placeholder:++z
            });
 
            // append the input to the div
            $d.append($i);
        }
        // append the div to the wrapper
        $('#wrapp4').append($d);
 
        // increment the index for div creation
        i++;
    }
    i=0;
 }
 
 );
 

 

 



