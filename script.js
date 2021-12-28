let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer-1": "Robbie Williams",
        "answer-2": "Lady Gaga",
        "answer-3": "Tim Berners-Lee",
        "answer-4": "Justin Bieber",
        "right-answer": 3
    },
    {
        "question": "Wie müssen HTML-Tags immer aussehen?",
        "answer-1": "( )..(/ )",
        "answer-2": "< >..< / >",
        "answer-3": "{ }..{/ }",
        "answer-4": "[ ]..[/ ]",
        "right-answer": 2
    },
    {
        "question": "Was braucht man um HTML zu arbeiten?",
        "answer-1": "Editor",
        "answer-2": "Microsoft Word",
        "answer-3": "Microsoft Exel",
        "answer-4": "Paint",
        "right-answer": 1
    },
    {
        "question": "Welche Endungen können HTML-Dateien haben?",
        "answer-1": "*.txt *.doc",
        "answer-2": "*.www",
        "answer-3": "*.png *.gif",
        "answer-4": "*.html *.htm",
        "right-answer": 4
    },
    {
        "question": "Wofür ist HTML zuständig?",
        "answer-1": "Formatierung",
        "answer-2": "Inhalt des Dokumentes",
        "answer-3": "Design",
        "answer-4": "Logik",
        "right-answer": 2
    },
    {
        "question": "Mit welchem HTML-Element wird ein Text kursiv geschrieben?",
        "answer-1": "< i >..< / i >",
        "answer-2": "< k >..< / k >",
        "answer-3": "< b >..< / b >",
        "answer-4": "< u >..< / u >",
        "right-answer": 1
    },
    {
        "question": "Wie greife ich auf eine class in CSS zu?",
        "answer-1": " .class",
        "answer-2": " class",
        "answer-3": " #class",
        "answer-4": " !class",
        "right-answer": 1
    },
    {
        "question": "Wofür steht HTML?",
        "answer-1": "Firmenname",
        "answer-2": "garnichts",
        "answer-3": "Höchster Mühl",
        "answer-4": "Hypertext Markup Language",
        "right-answer": 4
    },
];
let percentRightQuestions = 0;
let currentQuestion = 0;
let numberOfRightAnswers = 0;
let progress = 0;
let neinSound = new Audio('audio/Homer NEIN!.mp3');
let woohooSound = new Audio('audio/Homer Simpson Woohoo.mp3');

// führt alle fuctionen aus beim laden der Seite
function init() {
    showQuestion();
    currentQuestionNr();
    maxQuestionsNr();
}

// Zeigt die Anzahl der Seiten/Fragen an // show max questions
function maxQuestionsNr() {
    document.getElementById('maxQuestionsNr').innerHTML = questions.length;
    document.getElementById('maxQuestionsNr2').innerHTML = questions.length;
    document.getElementById('maxQuestionsNr3').innerHTML = questions.length;
}

// Zeigt mir die Aktuelle Seite/Frage an
function currentQuestionNr() {
    let question = currentQuestion + 1;
    if (question <= questions.length) {
        document.getElementById('currentQuestionNr').innerHTML = question;
    }
}
// Zeigt mir die Frage an
function showQuestion() {
    let question = questions[currentQuestion];
    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('end-screen').style.display = ''; // Der wert wird leer geschrieben und dadurch nimmt er die auto einstellung.
        document.getElementById('game-screen').style.display = `none`; // Fügt dem anderen conteiner display: none; hinzu und dadurch wird es ausgeblendet.
        showRightAnswers();

    } else { // Show Question
        progress = Math.round(((currentQuestion + 1) / questions.length) * 100); // progress wird der WERT zugewisen von der gerundeten Rechnung ((0+1) / 7) * 100 . 
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-bar').innerHTML = `${progress}%`;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer-1'];
        document.getElementById('answer-2').innerHTML = question['answer-2'];
        document.getElementById('answer-3').innerHTML = question['answer-3'];
        document.getElementById('answer-4').innerHTML = question['answer-4'];
    }
}

function answer(selection) { // funktion ANSWER erstellt und mit STRING parameter übergeben. 
    let answer = questions[currentQuestion]; // las answer ZUWEISEN vom Array questions inhalte an postition 0 sein.
    let rightAnswer = answer['right-answer']; // las rightAnswer ZUWEISEN aus (JOSN-Array pos 0) Fach 'right-Answer'.
    let selectedAnswer = selection.slice(-1); //las selectedAnswer ZUWEISEN nur die letzte position von meinem STRING parameter sein (1 - 4).

    if (rightAnswer == selectedAnswer) { // WENN rightAnswer ISTGLEICH selectedAnswer.
        document.getElementById(selection).parentNode.classList.add('right-answer'); // weise dem übergeordneten TAG (Eltern) die classe 'right-answer' zu.
        woohooSound.play();
        numberOfRightAnswers++;
    } else { //SONST 
        document.getElementById(selection).parentNode.classList.add('wrong-answer'); // weise dem übergeordneten TAG (Eltern) die classe 'wrong-answer' zu.
        document.getElementById(`answer-${rightAnswer}`).parentNode.classList.add('right-answer'); // und zeige die Richtige Antwort an, durch die ID mit der richtigen nummer aus dem JSON-Array
        neinSound.play();
    }

    document.getElementById('next-btn').disabled = false; // das Element mit der ID 'next-button' wird der Befehl disable(deaktiviert) ZUGEWIESEN false(falsch), und clickbar.
}

// Button Nächste Frage
function nextQuestion() {
    currentQuestion++; // die aktuelle position im JOSN ARRAY wir erhöht
    document.getElementById('next-btn').disabled = true; // der NEXT-BTN wird wieder deaktieviert

    resetAnswers() // Function um die antworten zu reseten
    showQuestion() // Function neu aufrufen mit der neuen Position
    currentQuestionNr() // Function neu aufrufen mit der neuen Position
    maxQuestionsNr(); // Function neu aufrufen mit der neuen Position

}

function resetAnswers() {
    document.getElementById('answer-1').parentNode.classList.remove('right-answer', 'wrong-answer'); // allen Antworten werden die Classen wieder entfernt.
    document.getElementById('answer-2').parentNode.classList.remove('right-answer', 'wrong-answer'); // allen Antworten werden die Classen wieder entfernt.
    document.getElementById('answer-3').parentNode.classList.remove('right-answer', 'wrong-answer'); // allen Antworten werden die Classen wieder entfernt.
    document.getElementById('answer-4').parentNode.classList.remove('right-answer', 'wrong-answer'); // allen Antworten werden die Classen wieder entfernt.
}

function showRightAnswers() {
    document.getElementById('rightanswers').innerHTML = numberOfRightAnswers; // Anzahl der Richtig beantworteten Fragen.
    percentRightQuestions = Math.round((numberOfRightAnswers / questions.length) * 100); // Richtige fragen in % umrechnen und auf Ganze Zahl runden.

    let halfPercent = ((questions.length / questions.length) / 2) * 100; // definiere mir eine neue Variable und rechne mir die hälfte aus. 

    if (percentRightQuestions > halfPercent) { // WENN mehr als die Hälfte der Fragen richtig sind.
        document.getElementById('right-percent').innerHTML = `SUPER das sind ${percentRightQuestions} % `;
        document.getElementById('right-percent').style.color = 'green';
    } else { // SONST sind weniger als die hälfte richtig 
        document.getElementById('right-percent').innerHTML = `Das sind NUR ${percentRightQuestions} %`;
        document.getElementById('right-percent').style.color = 'red';
    }
}
// Startet die Seite neu 
function restart() {
    location.reload();
}
// Aktueller TAP / FENSTER wird geschlossen
function closeWindow() {
    window.close();
}

function start() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = ``;
}