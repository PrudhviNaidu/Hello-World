	var imagesArray = new Array(
			"CZ1.png",
			"CZ2.jpg",
			"CZ3.png",
			"CZ4.jpg",
			"CZ5.jpg");
	
	position = 0;
	
	function nextImage() {
		position++;
	
		if (position < imagesArray.length) {
			document.images[0].src = imagesArray[position];
		} else {
			position = 0;
			document.images[0].src = imagesArray[position];
		}
	}
	
	function prevImage() {
		position--;
		if (position >= 0) {
			document.images[0].src = imagesArray[position];
		} else {
			position = imagesArray.length - 1;
			document.images[0].src = imagesArray[position];
		}
	}