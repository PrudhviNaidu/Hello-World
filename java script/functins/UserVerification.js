

function userChecking(info){
    console.log("working "+ info);
	if(info.namestring.value=="" || info.namestring.value == null){
		alert("Please type in your name");
		return(false);
	} 
	else{
		return(true);
	}
}
