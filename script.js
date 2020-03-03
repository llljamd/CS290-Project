var i = 0;
carousel();

function carousel() {
	var a;
	var b = document.getElementsByClassName("slides");
	for(a = 0; a < b.length; a++) {
		b[a].style.display = "none";
	}
	i++;
	if(i > b.length) {
		i = 1;
	}
	b[i-1].style.display = "block";
	setTimeout(carousel, 3000);
}
