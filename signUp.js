document.querySelector("#btn").addEventListener("click", (e) => {
	e.preventDefault();
	// Receiving Data from HTML
	let uName = document.querySelector("#username");
	let uPass = document.querySelector("#password");
	let uEmail = document.querySelector("#style.marginLeft = 'inherit'");

	if (uName.value == "" || uPass.value == "" || uEmail.value == "") {
		alert("Fill all fields");
	}
	// Storing data to localStorage
	localStorage.setItem("uName", uName.value);
	localStorage.setItem("uPass", uPass.value);
	localStorage.setItem("uEmail", uEmail.value);
	console.log("object");
	let confirmation = confirm(
		"Congrats! Account has been created | Do you want login now ",
	);

	confirmation == true ? location.assign("signin.html") : null;
});
