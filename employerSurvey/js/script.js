function init() {
	const firstName = document.querySelector(".name_first");
	const lastName = document.querySelector(".name_last");
	const userEmail = document.querySelector(".email");
	const userAddressNum = document.querySelector(".address_num");
	const userAddressStreet = document.querySelector(".address_street");
	const userAddressCity = document.querySelector(".address_line2");
	const userAddressZip = document.querySelector(".address_zip");
	firstName.value = "";
	lastName.value = "";
	userEmail.value = "";
	userAddressNum.value = "";
	userAddressStreet.value = "";
	userAddressCity.value = "";
	userAddressZip.value = "";
}

const submitBtn = document.querySelector("#compose-form");

submitBtn.onsubmit = () => {
	const firstName = document.querySelector(".name_first").value;
	const lastName = document.querySelector(".name_last").value;
	const userEmail = document.querySelector(".email").value;
	const userAddressNum = document.querySelector(".address_num").value;
	const userAddressStreet = document.querySelector(".address_street").value;
	const userAddressCity = document.querySelector(".address_line2").value;
	const userAddressZip = document.querySelector(".address_zip").value;
	const carAccess = carAccessCounter;
	const distance = document.querySelector('.max-commute').value;
	const phone = document.querySelector('.phone').value;


	fetch("/newuser", {
		method: "POST",
		body: JSON.stringify({
			firstname: firstName,
			lastname: lastName,
			useremail: userEmail,
			useraddnum: userAddressNum,
			useraddst: userAddressStreet,
			useraddcity: userAddressCity,
			useraddzip: userAddressZip,
			
		})
	})
		.then(response => response.json())
		.then(result => {
			// Print result
			console.log(result);
		});
	event.preventDefault();
};


init();