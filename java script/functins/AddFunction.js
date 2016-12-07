	/**
	 * 
	 */
	
	function add(a, b) {
		var s = "Function variable";
		var c = a + b;
		return c;
	}

    var anonymAdd = function(){
        var sum= null;
        for(var i=0; i<10; i++){
            sum += i;
        }
        return sum;
    };
    
    //IIEF
    (function (name) {
      console.log("page loading completed successfully. Welcome to "+name);
    } ("careerzoom"));

    //Call back functions  
    function callBackAdd(a, b) {
		var c = a + b;
		return c;
	}
    
    