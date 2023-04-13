$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    })
})

function validateForm()
{
   
    var name =document.getElementById("name").value;
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
    var email=document.getElementById("email").value;
     var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
     var subject=document.getElementById("message").value;
     var message=document.getElementById("address").value;
    if (!name.match(nameRegex)) {
        var inputElement = document.getElementById("name");
         alert("Enter a proper name");

        return false;  
    }
    else if (!email.match(validRegex)) {
         
        alert("Please enter a valid email address.");
        return false;
    }
      else  if (message == null || message == "") {
        var inputElement = document.getElementById("message");
        inputElement.placeholder = "Enter a message";
        // alert("Subject can't be blank");
        return false;
    }
   else  if(address ==null || address =="")
    {
        var inputElement = document.getElementById("address");
        inputElement.placeholder = "Enter a address";
         return false;
    }
   
}
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx9yy4NZBMmWLC9WWqZYJSffdP-Sg6LnpsP-upZJ_LM-u-DS5edXumX2iN-tnjGtyUJUQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
