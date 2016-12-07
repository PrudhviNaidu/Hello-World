	
/* calling function book_info to initialize book information and counting page numbers */

function Info_of_book(title, author, publisher) {
		this.pagenumber = 0;
		this.title = title;
		this.author = author;
		this.publisher = publisher;
		this.uppage = pageforward;
		this.backpage = pagebackward;
		
		/*-- Counting Page Numbers forward */
		
		function pageforward() {
			this.pagenumber++;
			return this.pagenumber;
		}

		/*-- Counting page numbers backward --*/
		
		function pagebackward() {
			this.pagenumber--;
			return this.pagenumber;
		}
	}
