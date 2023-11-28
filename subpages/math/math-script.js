function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
}

let num1 = 0;
let num2 = 0;
let anwser = 0;
let sign = 0;
let currQuest = 0;

const addingQuest = document.getElementById("addingQuestionText"); 
const addingAnswer = document.getElementById("addingAnswerInput"); 
const addingSumbit = document.getElementById("addingSubmitButton");

const multiplyQuest = document.getElementById("multiplyQuestionText"); 
const multiplyAnswer = document.getElementById("multiplyAnswerInput"); 
const multiplySumbit = document.getElementById("submitButton2"); 

const sqrQuest = document.getElementById("sqrQuestionText");  
const sqrAnswer = document.getElementById("sqrAnswerInput"); 
const sqrSumbit = document.getElementById("sqrSubmitButton"); 

document.body.addEventListener("click", (e) => {
	if(e.target.classList.contains("randomButton")) {
		num1 = getRandomInt(100);
		num2 = getRandomInt(100);
		sign = getRandomInt(2);
	}
	if(e.target.id == "addingRandomButton") {
		if(sign==0) {
			anwser = num1+num2
			addingQuest.innerHTML=`${num1} + ${num2}`;
		} else {
			anwser = num1 - num2
			addingQuest.innerHTML=`${num1} - ${num2}`;
		}
		addingAnswer.value="";
	} else if(e.target.id == "multiplyRandomButton") {
		if(sign==0) {
			anwser = num1*num2
			multiplyQuest.innerHTML=`${num1} * ${num2}`;
		} else {
			anwser = num1 / num2
			multiplyQuest.innerHTML=`${num1} : ${num2}`;

		}
		multiplyAnswer.value="";
	} else if(e.target.id == "sqrRandomButton") {
		num1 = getRandomInt(100);
		num2 = getRandomInt(3);
		num3 = getRandomInt(300);

		if(sign==0) {
			anwser = num1^num2
			sqrQuest.innerHTML=`${num1} ^ ${num2}`;
		} else {
			anwser = num3
			sqrQuest.innerHTML=`√${num3}`;
		}
		sqrAnswer.value="";
	}  else if(e.target.id=="addingSubmitButton") {
		if (addingAnswerInput.value==anwser) { 
			addingAnswer.value="dobrze"; 
		} else {
			addingAnswer.value="źle"; 
		}
	} else if(e.target.id=="multiplySubmitButton") {
		if (multiplyAnswerInput.value==anwser) { 
			multiplyAnswer.value="dobrze"; 
		} else {
			multiplyAnswer.value="źle"; 
		}
	} else if(e.target.id=="sqrSubmitButton") {
		console.log("aa");
		if (sqrAnswerInput.value==anwser) { 
			sqrAnswer.value="dobrze"; 
		} else {
			sqrAnswer.value="źle"; 
		}
	}
})