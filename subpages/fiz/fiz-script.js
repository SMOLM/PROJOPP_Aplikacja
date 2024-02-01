function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
  }

let questions= [
    ["Auto przejechało 15km w 12 minut. Z jaką prętkością jechało? (odpowiedź z jednostką bez odstępu od numeru)", "75km/h"],
    ["Sportowiec biegnie 10km/h. W ile przebigenie 3km? (odpowiedz podaj z jednistką bez odstępu od numeru)", "18min"],
];

const quest1 = document.getElementById("questionText1"); 
const draw1 = document.getElementById("randomButton1"); 
const answer1 = document.getElementById("answerInput1"); 
const sumbit1 = document.getElementById("submitButton1"); 
let currQuest = 0;

draw1.addEventListener("click", () => {
	currQuest=getRandomInt(questions.length) 
	quest1.innerHTML=questions[currQuest][0] 
	answer1.value=""; 
});
sumbit1.addEventListener("click", () => { 
	if (answer1.value==questions[currQuest][1]) { 
		answer1.value="DOBRZE"; 
	} else {
		answer1.value="ŹLE"; 
	};
});

let questions2= [
	["Masz urządzenie elektryczne o napięciu U równym 230 V i prądzie I wynoszącym 5 A. Oblicz moc elektryczną P.", "1150W"],
	["Masz obwód elektryczny z napięciem U równym 12 V i mocą P równą 48 W. Oblicz opór elektryczny R", "3ohmy"],
];

const quest2 = document.getElementById("questionText2"); 
const draw2 = document.getElementById("randomButton2"); 
const answer2 = document.getElementById("answerInput2"); 
const sumbit2 = document.getElementById("submitButton2"); 

draw2.addEventListener("click", () => { 
	currQuest=getRandomInt(questions2.length) 
	quest2.innerHTML=questions2[currQuest][0] 
	answer2.value=""; 
});
sumbit2.addEventListener("click", () => { 
	if (answer2.value==questions2[currQuest][1]) { 
		answer2.value="dobrze";
	} else {
		answer2.value="źle"; 
	}; 
});

let questions3= [
    ["Oblicz przyspieszenie na powierzchni planety o masie 5.97 * 10^24kg i promieniu 6.371 * 10^6m.", "9.81m/s^2"],
    ["Oblicz energię potencjalną obiektu o masie 100kg na 5km nad powierzchnią planety. (Odpowiedź podaj w przybliżeniu)", "4.905 * 10^6J"],
];


const quest3 = document.getElementById("questionText3"); 
const draw3 = document.getElementById("randomButton3");
const answer3 = document.getElementById("answerInput3"); 
const sumbit3 = document.getElementById("submitButton3"); 

draw3.addEventListener("click", () => { 
	currQuest=getRandomInt(questions3.length) 
	quest3.innerHTML=questions3[currQuest][0]
	answer3.value=""; 
});
sumbit3.addEventListener("click", () => { 
	if (answer3.value==questions3[currQuest][1]) { 
		answer3.value="dobrze"; 
	} else {
		answer3.value="źle"; 
	}; 
});