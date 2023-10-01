function login() {
	// Receiving Data from HTML
	let usernameInput = document.querySelector("#username");
	let passwordInput = document.querySelector("#password");
	let body = document.body;

	// Retrieving Data from localStorage
	let userName = localStorage.getItem("uName");
	let userPassword = localStorage.getItem("uPass");

	if (
		userName == usernameInput.value &&
		userPassword == passwordInput.value
	) {
		alert("Login Successfully");
		body.innerHTML = `<img src="https://i.stack.imgur.com/gqKFh.png" alt="">`;
	} else {
		alert("Incorrect Details ");
	}
}
