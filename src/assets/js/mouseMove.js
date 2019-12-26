export default  function mouseMove() {

	let mouseY = 0,
		mouseX = 0;
	const root = document.documentElement;
	let viewPort = document.getElementById('pageWrapper') || window;
	let windowWidth = viewPort.offsetWidth;
	let windowHeight = viewPort.offsetHeight;
	// console.dir(viewPort);
	let mousePosE = 0.03;

	viewPort.addEventListener("mousemove", e => {
		mouseY = (e.clientY - windowHeight * 0.5) * mousePosE;
		mouseX = (e.clientX - windowWidth * 0.5) * mousePosE;
		floatingPointer(mouseX, mouseY);
	});
	viewPort.addEventListener("mouseleave", e => {
		floatingPointer(0, 0);
	})
}
function floatingPointer(mX, mY) {
	const root = document.documentElement.style;
	root.setProperty('--move-x', mX + "px");
	root.setProperty('--move-y', mY + "px");
	root.setProperty('--move-eye-x', mX * 2 + "px");
	root.setProperty('--move-eye-y', mY * 2 + "px");
}
