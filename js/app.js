const basicInfoNextBtn = document.querySelector('.basic-info-btn');

/************ Questions **************/

const q1 = document.querySelector('.question-1');
const q2 = document.querySelector('.question-2');
const q3 = document.querySelector('.question-3');
const q4 = document.querySelector('.question-4');
const q5 = document.querySelector('.question-5');
const q6 = document.querySelector('.question-6');

basicInfoNextBtn.addEventListener('click', () => {
	q1.classList.add('question-appear');
});

/************ Question 1 **************/


const q1YesBtn = document.querySelector('.q1-yes');
const q1NoBtn = document.querySelector('.q1-no');


q1YesBtn.addEventListener('click', () => {
	q2.classList.add('question-appear');
});

q1NoBtn.addEventListener('click', () => {
	q3.classList.add('question-appear');
});

/************ Question 2 **************/

const q2YesBtn = document.querySelector('.q2-yes');
const q2NoBtn = document.querySelector('.q2-no');


q2YesBtn.addEventListener('click', () => {
	q3.classList.add('question-appear');
});

q2NoBtn.addEventListener('click', () => {
	q4.classList.add('question-appear');
});

/************ Question 3 **************/

const q3YesBtn = document.querySelector('.q3-yes');
const q3NoBtn = document.querySelector('.q3-no');


q3YesBtn.addEventListener('click', () => {
	q4.classList.add('question-appear');
});

q3NoBtn.addEventListener('click', () => {
	q5.classList.add('question-appear');
});

/************ Question 4 **************/

const q4YesBtn = document.querySelector('.q4-yes');
const q4NoBtn = document.querySelector('.q4-no');


q4YesBtn.addEventListener('click', () => {
	q5.classList.add('question-appear');
});

q4NoBtn.addEventListener('click', () => {
	q6.classList.add('question-appear');
});

/************ Question 5 **************/

const q5YesBtn = document.querySelector('.q5-yes');
const q5NoBtn = document.querySelector('.q5-no');


q5YesBtn.addEventListener('click', () => {
	q6.classList.add('question-appear');
});

q5NoBtn.addEventListener('click', () => {
	q6.classList.add('question-appear');
});

/************ Question 6 **************/

const q6YesBtn = document.querySelector('.q6-yes');
const q6NoBtn = document.querySelector('.q6-no');
const skillsDiv = document.querySelector('.skills');


q6YesBtn.addEventListener('click', () => {
	skillsDiv.classList.add('skills-appear');
});

q6NoBtn.addEventListener('click', () => {
	skillsDiv.classList.add('skills-appear');
});


/************ Skills Section **************/

const skillsBtn = document.querySelector('.skills-btn');
const jobInterestDiv = document.querySelector('.job-interest');

skillsBtn.addEventListener('click', () => {
	jobInterestDiv.classList.add('job-interest-appear');
});


/************ Job Interests **************/

const jobInterestBtn = document.querySelector('.job-interest-btn');
const aboutDiv = document.querySelector('.about');

jobInterestBtn.addEventListener('click', () => {
	aboutDiv.classList.add('about-appear');
});



/************ More Info Section **************/

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
	
});


























