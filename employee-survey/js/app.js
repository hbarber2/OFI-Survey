const basicInfoNextBtn = document.querySelector('.basic-info-btn');
const questionTemplate = document.querySelector('.question');
let currentQ = 0;

const questions = [
	[1, 'Do you have access to a car?', 'car_access'],
	[2, 'What is your maximum commute time you would be willing to travel via car?', 'max-commute'],
	[3, 'Do you have access to public transportation?', 'public-transit'],
	[4, 'Will you be relying on OFI for transportation?', 'ofi_transit'],
	[5, 'Are you planning on communiting by foot or bicycle?', 'foot_bike'],
	[6, 'Do you enjoy talking to new people?', 'people_skills'],
	[7, 'Are you comfortable with small talk?', 'people_skills'],
	[8, 'Do you enjoy giving advice to others?', 'people_skills'],
	[9, 'Do you prefer to stand over sitting?', 'pyshical'],
	[10, 'Can you lift heavy objects?', 'pyshical'],
	[11, 'Do you enjoy being on your feet?', 'pyshical'],
	[12, 'Do you like working with others?', 'teamwork'],
	[13, 'Do you like sharing your opinion?', 'teamwork'],
	[14, 'Do you enjoy being with others?', 'teamwork'],
	[15, 'Do you like working with your hands?', 'dexterity'],
	[16, 'Are you comfortable working with small objects?', 'dexterity'],
	[17, 'Are you comfortable handling delicate objects?', 'dexterity'],
	[18, 'Are you comfortable touching different textures?', 'tactile'],
	[19, 'Are you comfortable getting your hands dirty?', 'tactile'],
	[20, 'Do you like cleaning?', 'tactile'],
	[21, 'Do you like to be busy?', 'pace'],
	[22, 'Are you comfortable following directions from multiple people?', 'pace'],
	[23, 'Are you comfortable switching tasks fast?', 'pace'],
	[24, 'Are you comfortable around loud sounds?', 'auditory'],
	[25, 'Do you enjoy background noise?', 'auditory'],
	[26, 'Are you comfortable in a noisy environment?', 'auditory'],
	[27, 'Do you enjoy smelling new or different things?', 'olfactory'],
	[28, 'Are you comfortable around stinky smells?', 'olfactory'],
	[29, 'Do you enjoy the scent of perfume?', 'olfactory'],
	[30, 'Do you enjoy trying new things?', 'mental'],
	[31, 'Do you like unstructured activities?', 'mental'],
	[32, 'Do you like having different tasks? ', 'mental'],
	[33, 'Are you interested in full time work?', 'full_time'],
	[34, 'Are you interested in part time work?', 'part_time'],
];



function init() {
	const firstName = document.querySelector('.name_first');
		const lastName = document.querySelector('.name_last');
		const userEmail = document.querySelector('.email');
		const userAddressNum = document.querySelector('.address_num');
			const userAddressStreet = document.querySelector('.address_street');
			const userAddressCity = document.querySelector('.address_line2');
			const userAddressZip = document.querySelector('.address_zip');
	firstName.value = '';
		lastName.value = '';
		userEmail.value = '';
		userAddressNum.value = '';
		userAddressStreet.value = '';
		userAddressCity.value = '';
		userAddressZip.value = '';
	
}




basicInfoNextBtn.addEventListener('click', () => {
	// 1. Create new div to house quesiton
	const newEl = document.createElement('div');
	
	// 2. Make div visible
	questionTemplate.classList.add('question-appear');
	
	// 3. Add question 
	newEl.innerHTML =
		`
			<h3>${questions[0][1]}</h3>
			<button type="button" class="q${questions[0][0]}-yes ${questions[0][2]} btn btn-primary">Yes</button>
			<button type="button" class="q${questions[0][0]}-no ${questions[0][2]} btn btn-primary">No</button>
		`

	questionTemplate.appendChild(newEl);
	
	
const q1YesBtn = document.querySelector('.q1-yes');
const q1NoBtn = document.querySelector('.q1-no');
	
	q1YesBtn.addEventListener('click', () => {
		q1YesBtn.classList.add('disable');
		currentQ++;
		inputQuestion();
		const nextBtn = document.querySelector('.next-btn');
	
			nextBtn.addEventListener('click', () => {
				nextBtn.classList.add('disable');
				currentQ++;
				nextQuestion();
			});
		
	});


	q1NoBtn.addEventListener('click', () => {
		q1NoBtn.classList.add('disable');
		currentQ +=2;
		nextQuestion();

	
	});	
	});







function inputQuestion() {

		// 1. Create new div to house quesiton
	const newEl = document.createElement('div');
	
	// 2. Make div visible
	questionTemplate.classList.add('question-appear');
	
	// 3. Add question 
	newEl.innerHTML =
		`
			<h3>${questions[currentQ][1]}</h3>
			<input class="form-control" type="text" placeholder="ex. 25 minutes" aria-label="default input example">
			<button type="button" class="next-btn btn btn-primary">Next</button>
		`;


	questionTemplate.appendChild(newEl);
	

};





function nextQuestion() { 	
	
	// 1. Create new div to house quesiton
	const newEl = document.createElement('div');
	
	// 2. Make div visible
	questionTemplate.classList.add('question-appear');
	
	// 3. Add question 
	newEl.innerHTML =
		`
			<h3>${questions[currentQ][1]}</h3>
			<button type="button" class="q${questions[currentQ][0]}-yes ${questions[currentQ][2]} btn btn-primary">Yes</button>
			<button type="button" class="q${questions[currentQ][0]}-no ${questions[currentQ][2]} btn btn-primary">No</button>

		`;

	questionTemplate.appendChild(newEl);
	
	
		const yesBtn = document.querySelector('.q' + questions[currentQ][0] + '-yes');
		const noBtn = document.querySelector('.q' + questions[currentQ][0] + '-no');
	
		yesBtn.addEventListener('click', () => {
				currentQ++;
				nextQuestion();
				yesBtn.classList.add('disable');
	});
	
		noBtn.addEventListener('click', () => {
				currentQ++;
				nextQuestion();
				noBtn.classList.add('disable')
	});

};


const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
	
});





init();


















