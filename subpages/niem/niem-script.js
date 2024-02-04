function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
  }

let questions= [
    ["Auge", "Oko"],
    ["Głowa", "Kopf"],
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
	["Panda", "Panda"],
	["Łosoś", "Lachs"],
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
    ["Smażone ziemniaki", "Bratkartoffeln"],
    ["Fisch", "Ryba"],
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