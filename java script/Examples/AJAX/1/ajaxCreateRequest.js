function CreateRequestObject(){
	var ajaxRequest;
}
try{
	ajaxRequest = new XMLHttpRequest();
}
catch(e)
{
	try{
		ajaxRequest = new ActiveXObject("Msxm12.XMLHTTP");
	}
	catch(e){
		try{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			return false;
		}
	}
	}