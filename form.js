function postToGoogle(){
    var q1= $('#first-name').val();
    var q2= $('#email').val();
    var q3= $('#message').val();
    $.ajax({
        url:"https://docs.google.com/forms/d/e/1FAIpQLSfrSedVzQk2ZvWTjrfa_db1NGOBIjFyQKrGL5FHdxxM5jeszQ/formResponse",
        data:{"entry.701358052":q1,"entry.172758568":q2,"entry.1561055336":q3},
        type:"POST",
        dataType:"xml",
        statusCode:{
            0:function(){

            },
            200:function(){

            }
        }
    });
}
$(document).ready(function(){
    $('#myform').submit(function(){
        postToGoogle();
        return false;
    });
});