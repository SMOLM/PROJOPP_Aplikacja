function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
  }
// funkcja generuje losową liczbe całkowitą

let questions= [
    ["Ile to 2 + 2?", 4],
    ["Oblicz: 30 - 16,5?", 13.5],
    ["13 - 14.5?", "-1.5"],
	["99 + 110", 209],
	["300 - x = -7", 307],
	["-80 + 176 =", 96],
	["67 + 43 =", 110],
	["32 + 13 =", 45],
	["90 - 89 =", 1],
	["100 - 100 =", 0],
];
// tworzymy tablice która zawiera pytania i odpowiedzi do tych pytań
const quest1 = document.getElementById("questionText1"); //pobiera element po id w HTML
const draw1 = document.getElementById("randomButton1"); //pobiera element po id w HTML
const answer1 = document.getElementById("answerInput1"); //pobiera element po id w HTML
const sumbit1 = document.getElementById("submitButton1"); //pobiera element po id w HTML
let currQuest = 0;

draw1.addEventListener("click", () => { //słucha czy przycisk "losuj" został naciśnięty
	currQuest=getRandomInt(questions.length) //losuje pytanie z tablicy
	quest1.innerHTML=questions[currQuest][0] //podmienia napis "pytanie" w HTML na wylosowane pytanie
	answer1.value=""; // po kliknieciu losuj pole na odpowiedz zawsze bedzie czyszczone
});
sumbit1.addEventListener("click", () => { //słucha czy przycisk "potwierdz" został naciśniety
	if (answer1.value==questions[currQuest][1]) { //sprawdza czy odpowiedz jest zgodna z odpowiedzia przypisana do wylosowanego pytania
		answer1.value="DOBRZE"; //jezeli tak to wyświetla "dobrze" zamiast odpowiedzi
	} else {
		answer1.value="ŹLE"; //jeżeli żle to wyświetla "źle" zamiast odpowiedzi
	};
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// funkcja generuje losową liczbe całkowitą

let questions2= [
	["2 * 2 =", 4],
	["132 * 4 =", 520],
	["1080 : 54 =", 20],
    ["8 * 8 =", 64],
    ["5 * 7 =", 35],
	["25 * 0,4 =", 10],
	["100 : 5 =", 20],
	["6 * 10 = ", 60],
	["138 : 2 =", 69],
	["35 : 7 =", 5],
];
// tworzymy tablice która zawiera pytania i odpowiedzi do tych pytań
const quest2 = document.getElementById("questionText2"); //pobiera element po id w HTML
const draw2 = document.getElementById("randomButton2"); //pobiera element po id w HTML
const answer2 = document.getElementById("answerInput2"); //pobiera element po id w HTML
const sumbit2 = document.getElementById("submitButton2"); //pobiera element po id w HTML

draw2.addEventListener("click", () => { //słucha czy przycisk "losuj" został naciśnięty
	currQuest=getRandomInt(questions2.length) //losuje pytanie z tablicy
	quest2.innerHTML=questions2[currQuest][0] //podmienia napis "pytanie" w HTML na wylosowane pytanie
	answer2.value=""; // po kliknieciu losuj pole na odpowiedz zawsze bedzie czyszczone
});
sumbit2.addEventListener("click", () => { //słucha czy przycisk "potwierdz" został naciśniety
	if (answer2.value==questions2[currQuest][1]) { //sprawdza czy odpowiedz jest zgodna z odpowiedzia przypisana do wylosowanego pytania
		answer2.value="dobrze"; //jezeli tak to wyświetla "dobrze" zamiast odpowiedzi
	} else {
		answer2.value="źle"; //jeżeli żle to wyświetla "źle" zamiast odpowiedzi
	}; 
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// funkcja generuje losową liczbe całkowitą

let questions3= [
    ["Pierwiastek z 16?", 4],
    ["Pierwiastek z 64 to", 8],
    ["3 do potęgi 3 ile to?", 27]
];
// tworzymy tablice która zawiera pytania i odpowiedzi do tych pytań

const quest3 = document.getElementById("questionText3"); //pobiera element po id w HTML
const draw3 = document.getElementById("randomButton3"); //pobiera element po id w HTML 
const answer3 = document.getElementById("answerInput3"); //pobiera element po id w HTML
const sumbit3 = document.getElementById("submitButton3"); //pobiera element po id w HTML

draw3.addEventListener("click", () => { //słucha czy przycisk "losuj" został naciśnięty
	currQuest=getRandomInt(questions3.length) //losuje pytanie z tablicy
	quest3.innerHTML=questions3[currQuest][0] //podmienia napis "pytanie" w HTML na wylosowane pytanie
	answer3.value=""; // po kliknieciu losuj pole na odpowiedz zawsze bedzie czyszczone
});
sumbit3.addEventListener("click", () => { //słucha czy przycisk "potwierdz" został naciśniety
	if (answer3.value==questions3[currQuest][1]) { //sprawdza czy odpowiedz jest zgodna z odpowiedzia przypisana do wylosowanego pytania
		answer3.value="dobrze"; //jezeli tak to wyświetla "dobrze" zamiast odpowiedzi
	} else {
		answer3.value="źle"; //jeżeli żle to wyświetla "źle" zamiast odpowiedzi
	}; 
});