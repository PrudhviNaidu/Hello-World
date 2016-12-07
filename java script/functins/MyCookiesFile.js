function makeCookies(form) {
	var when = new Date();
	when.setTime(when.getTime() + 24 * 60 * 60 * 1000);
	when.setFullYear(when.getFullYear() + 1);
	yname = form.yourname.value;
	favcolor = form.yourcolor.calue;
	document.cookie = escape("visitor") + "=" + escape(yname) + ";expires="+ when.toGMTString();
	document.cookie = escape("color") + "=" + escape(favcolor) + ";expires="+ when.toGMTString();
	alert(document.cookie);
}

function welcome(myForm) {
	you = myForm.yourname.value;
	var position = document.cookie.indexOf("name=");
	if (position != -1) {
		var begin = position + 5;
		var end = document.cookie.indexOf(";", begin);
		if (end = -1) {
			end = document.cookie.length;
		}
		you = unescape(document.cookie.substring(begin, end));
		alert("welcome" + you);
	} else {
		alert("No cookies today");
	}

}
