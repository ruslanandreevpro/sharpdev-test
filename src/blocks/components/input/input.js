window.addEventListener("resize", () => {
	const screenWidth = window.innerWidth;

	if (screenWidth < 768) {
		document.getElementById("searchID").style.width = "100%";
		document.getElementById("search").style.width = "calc(100% - 45px)";
	} else {
		document.getElementById("searchID").style.width = "208px";
		document.getElementById("search").style.width = "208px";
	}
});