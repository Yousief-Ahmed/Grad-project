$(document).ready(function(){
    var x = 1;
    $("#newbtn").click(function () {
     $("table tbody:first").clone().find("input").each(function () {
         $(this).val('').attr({
             'id': function (_, id) {
                 return id + x
             },
                 'name': function (_, name) {
                 return name + x
             },
                 'value': ''
         });
     }).end().appendTo("table");
     x++;
 });


});