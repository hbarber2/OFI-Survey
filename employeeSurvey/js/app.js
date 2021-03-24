const basicInfoNextBtn = document.querySelector(".basic-info-btn");
const questionTemplate = document.querySelector(".question");
let currentQ = 0;
let carAccessCounter= 0;

const questions = [
	[1, "Do you have access to a car?", "car_access"],
	[2, "What is your maximum commute time you would be willing to travel?", "max-commute"],
	[3, "Do you have access to public transportation?", "public-transit"],
	[4, "Will you be relying on OFI for transportation?", "ofi_transit"],
	[5, "Are you planning on communiting by foot or bicycle?", "foot_bike"],
	[6, "Do you enjoy talking to new people?", "people_skills"],
	[7, "Are you comfortable with small talk?", "people_skills"],
	[8, "Do you enjoy giving advice to others?", "people_skills"],
	[9, "Do you prefer to stand over sitting?", "physical"],
	[10, "Can you lift heavy objects?", "physical"],
	[11, "Do you enjoy being on your feet?", "physical"],
	[12, "Do you like working with others?", "teamwork"],
	[13, "Do you like sharing your opinion?", "teamwork"],
	[14, "Do you enjoy being with others?", "teamwork"],
	[15, "Do you like working with your hands?", "dexterity"],
	[16, "Are you comfortable working with small objects?", "dexterity"],
	[17, "Are you comfortable handling delicate objects?", "dexterity"],
	[18, "Are you comfortable touching different textures?", "tactile"],
	[19, "Are you comfortable getting your hands dirty?", "tactile"],
	[20, "Do you like cleaning?", "tactile"],
	[21, "Do you like to be busy?", "pace"],
	[22, "Are you comfortable following directions from multiple people?", "pace"],
	[23, "Are you comfortable switching tasks fast?", "pace"],
	[24, "Are you comfortable around loud sounds?", "auditory"],
	[25, "Do you enjoy background noise?", "auditory"],
	[26, "Are you comfortable in a noisy environment?", "auditory"],
	[27, "Do you enjoy smelling new or different things?", "olfactory"],
	[28, "Are you comfortable around stinky smells?", "olfactory"],
	[29, "Do you enjoy the scent of perfume?", "olfactory"],
	[30, "Do you enjoy trying new things?", "mental"],
	[31, "Do you like unstructured activities?", "mental"],
	[32, "Do you like having different tasks? ", "mental"],
	[33, "Are you interested in full time work?", "full_time"],
	[34, "Are you interested in part time work?", "part_time"],
	[35, "Tell us more about youself", 'statement']
];

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
	window.scroll(0, 0);
};



/***************************************************
***************** Web form survey *****************
***************************************************/


basicInfoNextBtn.addEventListener("click", () => {
	progress();
	// 1. Create new div to house quesiton
	const newEl = document.createElement("div");

	// 2. Make div visible
	questionTemplate.classList.add("question-appear");

	// 3. Add question
	newEl.innerHTML = `
			<h3 class="question-top">${questions[0][1]}</h3>
			<button type="button" class="q${questions[0][0]}-yes ${
		questions[0][2]
	} btn btn-primary">Yes</button>
			<button type="button" class="q${questions[0][0]}-no ${
		questions[0][2]
	} btn btn-primary">No</button>
		`;

	questionTemplate.appendChild(newEl);

	const q1YesBtn = document.querySelector(".q1-yes");
	const q1NoBtn = document.querySelector(".q1-no");

	q1YesBtn.addEventListener("click", () => {
		q1YesBtn.classList.add("disable");
		carAccessCounter++;
		currentQ++;
		inputQuestion();
		progress();
		scrollDown();
	});

	q1NoBtn.addEventListener("click", () => {
		q1NoBtn.classList.add("disable");
		currentQ += 2;
		nextQuestion();
		progress();
		scrollDown();
	});
});


/***************** Commute question *****************/

function inputQuestion() {
	// 1. Create new div to house quesiton
	const newEl = document.createElement("div");

	// 2. Make div visible
	questionTemplate.classList.add("question-appear");

	// 3. Add question
	newEl.innerHTML = `
			<h3 class="question-top">${questions[currentQ][1]}</h3>
			<input class="max-commute form-control" type="text" placeholder="ex. 25 minutes" aria-label="default input example">
			<button type="button" class="next-btn btn btn-primary">Next</button>
		`;

	//4. Append new el to question div
	questionTemplate.appendChild(newEl);
	
	
	//5. Make next button move to next question
	const nextBtn = document.querySelector(".next-btn");
	
	nextBtn.addEventListener("click", () => {
		nextBtn.classList.add("disable");
		currentQ++;
		nextQuestion();
		scrollDown();
	});

};




/***************** Dynamic progress bar *****************/

const progressBar = document.querySelector('.progress-bar');
let width = 0;


function progress() {
	if(currentQ < 36) {
		width++;
		progressBar.style.width = (width * 2.8) + '%';
		console.log(progressBar.style.width);
		progressBar.innerHTML = Math.round((width * 2.8)) + '%';
	}
};



/***************** Move on to next question fcn *****************/


let yesAuditoryScore = 0;
let yesPeopleSkillsScore = 0;
let yesPhysicalSkillsScore = 0;
let yesTeamworkSkillsScore = 0;
let yesDexteritySkillsScore = 0;
let yesTactileSkillsScore = 0;
let yesPaceSkillsScore = 0;
let yesOlfactorySkillsScore = 0;
let yesMentalSkillsScore = 0;
let noScore = 0;

function nextQuestion() {
	//
	if(questions[currentQ][0] < 35) {

		// 1. Create new div to house quesiton
		const newEl = document.createElement("div");

		// 2. Make div visible
		questionTemplate.classList.add("question-appear");

		// 3. Add question
		newEl.innerHTML = `
				<h3 class="question-top">${questions[currentQ][1]}</h3>
				<button type="button" class="q${questions[currentQ][0]}-yes ${
			questions[currentQ][2]
		} btn btn-primary">Yes</button>
				<button type="button" class="q${questions[currentQ][0]}-no ${
			questions[currentQ][2]
		} btn btn-primary">No</button>

			`;
		//4. Append new el to questions div
		questionTemplate.appendChild(newEl);

		const yesBtn = document.querySelector(".q" + questions[currentQ][0] + "-yes");
		const noBtn = document.querySelector(".q" + questions[currentQ][0] + "-no");

		//6. Categorize answers in form to help match cadidates to fit their needs
		yesBtn.addEventListener("click", () => {
			currentQ++;
			nextQuestion();
			yesBtn.classList.add("disable");

			if (questions[currentQ][2] === "auditory") {
					yesAuditoryScore++;
			} else if (questions[currentQ][2] === "people_skills") {
					yesPeopleSkillsScore++;
			} else if (questions[currentQ][2] === "physical") {
					yesPhysicalSkillsScore++;
			} else if (questions[currentQ][2] === "teamwork") {
					yesTeamworkSkillsScore++;
			} else if (questions[currentQ][2] === "dexterity") {
					yesDexteritySkillsScore++;
			} else if (questions[currentQ][2] === "tactile") {
					yesTactileSkillsScore++;
			} else if (questions[currentQ][2] === "pace") {
					yesPaceSkillsScore++;
			} else if (questions[currentQ][2] === "olfactory") {
					yesOlfactorySkillsScore++;
			} else if (questions[currentQ][2] === "mental") {
					yesMentalSkillsScore++;
			}
		});

		//7. Add up no answers
		noBtn.addEventListener("click", () => {
			currentQ++;
			nextQuestion();
			noBtn.classList.add("disable");
			noScore++;
		});
		
	//8. Call function for textarea question
	}else if(questions[currentQ][0] === 35) {
		statementQuesiton();
	};
	
	//9. Auto scroll down
	scrollDown();
	
	//10. Increase progress bar
	progress();
};



/****************** Tell us about yourself ************************/

function statementQuesiton() {
	// 1. Create new div to house quesiton
	const newEl = document.createElement("div");

	// 2. Make div visible
	questionTemplate.classList.add("question-appear");

	newEl.innerHTML = `
			<h3 class="question-top">${questions[currentQ][1]}</h3>
			<input class="statement form-control" type="text" placeholder="Tell us more..." aria-label="default input example">
			<button type="button" id="compose-form" class="btn btn-primary">Submit</button>
		`;

	questionTemplate.appendChild(newEl);

};

/*********************** Scroll feature **********************/

function scrollDown() {
	window.scrollTo({
	top: 1000000000,
  behavior: 'smooth'										
	}) 
};

basicInfoNextBtn.addEventListener('click', scrollDown);




/***************************************************
*****************Submit button *****************
***************************************************/

// This feature is no longer needed but kept for posterity



//const submitBtn = document.querySelector("#compose-form");
//
//submitBtn.onsubmit = () => {
//	const firstName = document.querySelector(".name_first").value;
//	const lastName = document.querySelector(".name_last").value;
//	const userEmail = document.querySelector(".email").value;
//	const userAddressNum = document.querySelector(".address_num").value;
//	const userAddressStreet = document.querySelector(".address_street").value;
//	const userAddressCity = document.querySelector(".address_line2").value;
//	const userAddressZip = document.querySelector(".address_zip").value;
//	const carAccess = carAccessCounter;
//	const distance = document.querySelector('.max-commute').value;
//	const publicTransit = document.querySelector('.public-transit').value
//	
//	
//	console.log(distance);
//
//
//	fetch("/newuser", {
//		method: "POST",
//		body: JSON.stringify({
//			firstname: firstName,
//			lastname: lastName,
//			useremail: userEmail,
//			useraddnum: userAddressNum,
//			useraddst: userAddressStreet,
//			useraddcity: userAddressCity,
//			useraddzip: userAddressZip,
//			caraccess: carAccess,
//			distance: distance,
//			
//		})
//	})
//		.then(response => response.json())
//		.then(result => {
//			// Print result
//			console.log(result);
//		});
//	event.preventDefault();
//};


/*****************Initalize the page to clear values *****************/

init();
