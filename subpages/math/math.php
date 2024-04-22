<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 

    <link rel="stylesheet" href="./math-style.css">
    <link rel="stylesheet" href="../../src/fontello/css/fontello.css"> 
</head> 
<body> 
    <div class="container"> 
        <div class="header"> 
            <div class="logo"><a href="../../index.php"><span class="logospan">Quizify</span></a></div> 
            <div class="premium"><i class="icon-diamond"></i></div> 
            <a href="../../subpages/user-log/user-log.php"> <!-- podpięcie podstorny z logowaniem -->
                <div class="user"><i class="icon-user"></i></div>
            </a>
        </div>
        <div class="content"> 
            <div class="questions"> 
				<h2>Dodawanie/Odejmowanie</h2> <!-- quiz na dodawanie i odejmowanie -->
                <br> 
                <div id="addingQuestionText">Pytanie</div> <!-- napis "pytanie" pod który podstawimy wylosowane działanie -->
                <br><br> 
                <button class="randomButton" id="addingRandomButton">Losuj</button> 
                <input type="text" id="addingAnswerInput"> <!-- miejsce w które użytkownik wstawia odpowiedź-->
                <button id="addingSubmitButton">Sprawdź</button> 
            </div>
			<div class="questions"> 
				<h2>Mnożenie/Dzielenie</h2> <!-- quzi na mnożenie i dzielenie -->
                <br> 
                <div id="multiplyQuestionText">Pytanie</div> <!-- napis "pytanie" pod który podstawimy wylosowane działanie -->
                <br><br> 
                <button class="randomButton" id="multiplyRandomButton">Losuj</button> 
                <input type="text" id="multiplyAnswerInput"> <!-- miejsce w które użytkownik wstawia odpowiedź-->
                <button id="multiplySubmitButton">Sprawdź</button> 
            </div>
			<div class="questions"> 
				<h2>Potęgi/Pierwiastki</h2> 
                <br> 
                <div id="sqrQuestionText">Pytanie</div> 
                <br><br> 
                <button class="randomButton" id="sqrRandomButton">Losuj</button> 
                <input type="text" id="sqrAnswerInput"> 
                <button id="sqrSubmitButton">Sprawdź</button> 
            </div>
        </div>
    </div>
    <script src="./math-script.js"></script>
</body> 
</html> 