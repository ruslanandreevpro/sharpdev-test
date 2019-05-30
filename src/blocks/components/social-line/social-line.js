window.addEventListener("resize", () => {
	const screenWidth = window.innerWidth;
	const socialIcons = document.getElementsByClassName("social-icon");

	if (screenWidth < 768) {
		for (let i = 0; i < socialIcons.length; i++) {
			socialIcons[i].style.height = "25px";
		}
	} else {
		for (let i = 0; i < socialIcons.length; i++) {
			socialIcons[i].style.height = "40px";
		}
	}
});