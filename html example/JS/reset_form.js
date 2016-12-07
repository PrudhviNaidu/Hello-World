function submitForm(){
    var name = document.getElementById("myform"); 
    console.log(name);
    var fname2 = document.getElementById("fname")
    console.log(fname2);
    var fname = document.getElementById("fname").value;
    console.log(fname);
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    alert("First name:"+fname+' Last name '+lname+'<br>Email '+email+'<br/> contact'+contact);

}


function resetform() {
    var name = document.getElementById("myform").reset(); 

}


