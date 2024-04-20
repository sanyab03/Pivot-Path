
let questions = [
	{
		prompt: `how old are you?`,
		options: [
			"15-18 years",
			"18-25 years",
			"above 25 years",	
		],
		answer: "18-25 years",
	},

	{
		prompt: `Select your field`,
		options: [
			"Engineering(cs)",
			"engineering(ec)",
			"engineering(mechanical))",
			"engineering(electrical))",
            
		],
		answer: "Engineering(cs)",
	},

	{
		prompt: `Which programming language is commonly used for server-side scripting in web development?`,
		options: [
			"HTML",
            "CSS",
            "JavaScript",
            "PHP",
			
		],
		answer: "PHP",
	},

	{
		prompt: `In JavaScript, which 
				of the following is 
				a logical operator?`,
		options: ["|", "&&", "%", "/"],
		answer: "&&",
	},

	{
		prompt: `A named element in a 
				JavaScript program that
				is used to store and 
				retrieve data is a _____.`,
		options: [
			"method",
			"assignment operator",
			"letiable",
			"string",
		],
		answer: "letiable",
	},
    {
		prompt: `Which memory management technique uses fixed-size blocks for memory allocation?`,
		options: [
			"Paging",
            "Segmentation",
            "Virtual memory",
            "Contiguous memory allocation",
			
		],
		answer: "Contiguous memory allocation",
	},
    {
		prompt: `What is the purpose of a VPN (Virtual Private Network)?`,
		options: [
			'Encrypts data transmitted over a network',
            'Blocks unauthorized access to a network',
            'Accelerates the performance of a network',
            'Divides a physical network into smaller segments',
			
		],
		answer: "Encrypts data transmitted over a network",
	},

];
let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

let currentQuestionIndex = 0;
let time = questions.length * 30;
let timerId;

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}


function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}


function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;


submitBtn.onclick = saveHighscore;


startBtn.onclick = quizStart;
