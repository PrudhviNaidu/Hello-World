function addElement(){
    console.log("This is calling");
    var harryPotter = document.createElement("button");
    
    console.log(harryPotter);
    
    harryPotter.innerHTML="CreatedOnTheFly";
    
    console.log(harryPotter);
    
    harryPotter.onclick =harrypotterFlying;
    harryPotter.setAttribute("id", "removeHarry");

    document.body.appendChild(harryPotter);
    
    
    
    
    
    
    
    
    
}


function harrypotterFlying(){
   alert("yes... i am flying");
}


function removeElement(){
    console.log("remove element is calling");
    var voldomart = document.getElementById("removeHarry");
    console.log(voldomart);
    
    document.body.removeChild(voldomart);
}





function userEnteringValue(){
    alert("this is calling");
    
}

function scroll(){
    console.log("scrolling");
}

function unloading(){
    alert("we are redirecting to google");
}

function callAfunction(){
    var ele = document.getElementById("textbox");
    var a = ele.value;

    console.log("onchange: "+a);

    /*
    http.post("https://www.facebook.com/register", data)
        .respose(console.log("data is submotted"))
        .error()
    */
}





function welocomeAlert(){
    alert("Welcome to careerzoom. Page loading completed.");
}





(function(){
    alert("this is calling");
}());


    
    function add(a ,b){
        a();
    }

    add(function(){
        console.log("call back funtion is calling")
    }, 10);




setTimeout(function(){
    alert("set time out is calling")
}, 10000);







