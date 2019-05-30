import tippy from "tippy.js";

const template = document.getElementById("tooltip");
tippy("#tooltip-5", {
	animation: "scale",
	duration: 0,
	arrow: true,
	delay: [1000, 200],
	content: template.innerHTML,
	maxWidth: 248,
	showOnInit: true,
	theme: "sharpdev"
});