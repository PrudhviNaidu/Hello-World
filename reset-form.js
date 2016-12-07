function submitform(){
    alert("submit form is loading");
    var name =  document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    
    alert(name +' '+ lname+' '+ email + ' '+ contact);
}


function reset(){
    alert("reset form is loading");
}

