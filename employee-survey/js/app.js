const basicInfoNextBtn = document.querySelector('.basic-info-btn');
const questionTemplate = document.querySelector('.question');
let currentQ = 0;

const questions = [
	[1, 'Do you have access to a car?', 'car_access'],
	[2, 'What is your maximum commute time you would be willing to travel via car?', 'max-commute'],
	[3, 'Do you have access to public transportation?', 'public-transit'],
	[4, 'What is your maximum commute time you would be willing to travel via public transportation?', 'max-commute'],
	[5, 'Will you be relying on OFI for transportation?', 'ofi_transit'],
	[6, 'Are you planning on communiting by foot or bicycle?', 'foot_bike'],
	[7, 'Do you enjoy talking to new people?', 'people_skills'],
	[8, 'Are you comfortable with small talk?', 'people_skills'],
	[9, 'Do you enjoy giving advice to others?', 'people_skills'],
	[10, 'Do you prefer to stand over sitting?', 'pyshical'],
	[11, 'Can you lift heavy objects?', 'pyshical'],
	[12, 'Do you enjoy being on your feet?', 'pyshical'],
	[13, 'Do you like working with others?', 'teamwork'],
	[14, 'Do you like sharing your opinion?', 'teamwork'],
	[15, 'Do you enjoy being with others?', 'teamwork'],
	[16, 'Do you like working with your hands?', 'dexterity'],
	[17, 'Are you comfortable working with small objects?', 'dexterity'],
	[18, 'Are you comfortable handling delicate objects?', 'dexterity'],
	[19, 'Are you comfortable touching different textures?', 'tactile'],
	[20, 'Are you comfortable getting your hands dirty?', 'tactile'],
	[21, 'Do you like cleaning?', 'tactile'],
	[22, 'Do you like to be busy?', 'pace'],
	[23, 'Are you comfortable following directions from multiple people?', 'pace'],
	[24, 'Are you comfortable switching tasks fast?', 'pace'],
	[25, 'Are you comfortable around loud sounds?', 'auditory'],
	[26, 'Do you enjoy background noise?', 'auditory'],
	[27, 'Are you comfortable in a noisy environment?', 'auditory'],
	[28, 'Do you enjoy smelling new or different things?', 'olfactory'],
	[29, 'Are you comfortable around stinky smells?', 'olfactory'],
	[30, 'Do you enjoy the scent of perfume?', 'olfactory'],
	[31, 'Do you enjoy trying new things?', 'mental'],
	[32, 'Do you like unstructured activities?', 'mental'],
	[33, 'Do you like having different tasks? ', 'mental'],
	[34, 'Are you interested in full time work?', 'full_time'],
	[35, 'Are you interested in part time work?', 'part_time'],
];




basicInfoNextBtn.addEventListener('click', () => {
	// 1. Create new div to house quesiton
	const newEl = document.createElement('div');
	
	// 2. Make div visible
	questionTemplate.classList.add('question-appear');
	
	// 3. Add question 
	newEl.innerHTML =
		`
			<h2>${questions[0][1]}</h2>
			<button type="button" class="q${questions[0][0]}-yes ${questions[0][2]} btn btn-primary">Yes</button>
			<button type="button" class="q${questions[0][0]}-no ${questions[0][2]} btn btn-primary">No</button>
		`

	questionTemplate.appendChild(newEl);
	
	
const q1YesBtn = document.querySelector('.q1-yes');
const q1NoBtn = document.querySelector('.q1-no');
	
	q1YesBtn.addEventListener('click', () => {
		currentQ++;
		inputQuestion();
		const nextBtn = document.querySelector('.next-btn');
	
			nextBtn.addEventListener('click', () => {
				currentQ++;
				nextQuestion();
			});
		
	});


	q1NoBtn.addEventListener('click', () => {
		currentQ += 2;
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
			<h2>${questions[currentQ][1]}</h2>
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
			<h2>${questions[currentQ][1]}</h2>
			<button type="button" class="q${questions[currentQ][0]}-yes ${questions[currentQ][2]} btn btn-primary">Yes</button>
			<button type="button" class="q${questions[currentQ][0]}-no ${questions[currentQ][2]} btn btn-primary">No</button>
			<button type="button" class="next-btn btn btn-primary">Next</button>

		`;

	questionTemplate.appendChild(newEl);
	
			const nextBtn = document.querySelector('.next-btn');
	
			nextBtn.addEventListener('click', () => {
				currentQ++;
				nextQuestion();
			});
	
//		const yesBtn = document.querySelector('.questions[currentQ][0]-yes');
//	
//	yesBtn.addEventListener('click', () => {
//				currentQ++;
//				nextQuestion();
//	})

};





























/************ Question 1 **************/


//const q1YesBtn = document.querySelector('.q1-yes');
//const q1NoBtn = document.querySelector('.q1-no');
//
//
//q1YesBtn.addEventListener('click', () => {
//	q2.classList.add('question-appear');
//});
//
//q1NoBtn.addEventListener('click', () => {
//	q2.classList.add('question-appear');
//});
//
///************ Question 2 **************/
//
//const q2YesBtn = document.querySelector('.q2-yes');
//const q2NoBtn = document.querySelector('.q2-no');
//
//
//q2YesBtn.addEventListener('click', () => {
//	q3.classList.add('question-appear');
//});
//
//q2NoBtn.addEventListener('click', () => {
//	q4.classList.add('question-appear');
//});
//
///************ Question 3 **************/
//
//const q3YesBtn = document.querySelector('.q3-yes');
//const q3NoBtn = document.querySelector('.q3-no');
//
//
//q3YesBtn.addEventListener('click', () => {
//	q4.classList.add('question-appear');
//});
//
//q3NoBtn.addEventListener('click', () => {
//	q5.classList.add('question-appear');
//});
//
///************ Question 4 **************/
//
//const q4YesBtn = document.querySelector('.q4-yes');
//const q4NoBtn = document.querySelector('.q4-no');
//
//
//q4YesBtn.addEventListener('click', () => {
//	q5.classList.add('question-appear');
//});
//
//q4NoBtn.addEventListener('click', () => {
//	q6.classList.add('question-appear');
//});
//
///************ Question 5 **************/
//
//const q5YesBtn = document.querySelector('.q5-yes');
//const q5NoBtn = document.querySelector('.q5-no');
//
//
//q5YesBtn.addEventListener('click', () => {
//	q6.classList.add('question-appear');
//});
//
//q5NoBtn.addEventListener('click', () => {
//	q6.classList.add('question-appear');
//});
//
///************ Question 6 **************/
//
//const q6YesBtn = document.querySelector('.q6-yes');
//const q6NoBtn = document.querySelector('.q6-no');
//const skillsDiv = document.querySelector('.skills');
//
//
//q6YesBtn.addEventListener('click', () => {
//	skillsDiv.classList.add('skills-appear');
//});
//
//q6NoBtn.addEventListener('click', () => {
//	skillsDiv.classList.add('skills-appear');
//});
//
//
///************ Skills Section **************/
//
//const skillsBtn = document.querySelector('.skills-btn');
//const jobInterestDiv = document.querySelector('.job-interest');
//
//skillsBtn.addEventListener('click', () => {
//	jobInterestDiv.classList.add('job-interest-appear');
//});
//
//
///************ Job Interests **************/
//
//const jobInterestBtn = document.querySelector('.job-interest-btn');
//const aboutDiv = document.querySelector('.about');
//
//jobInterestBtn.addEventListener('click', () => {
//	aboutDiv.classList.add('about-appear');
//});
//
//
//
///************ More Info Section **************/
//
//const submitBtn = document.querySelector('.submit-btn');
//
//submitBtn.addEventListener('click', () => {
//	
//});
//
//
//
//






















