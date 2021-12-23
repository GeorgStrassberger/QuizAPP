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
        "answer-2": "< >..</ >",
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
        "answer-1": "<i></i>",
        "answer-2": "<k></k>",
        "answer-3": "<b></b>",
        "answer-4": "<r></r>",
        "right-answer": 1
    },
];

let currentQuestion = 4;

// führt alle fuctionen aus beim laden der Seite
function init() {
    showQuestion()
    showAnswer()
    currentQuestionNr()
    maxQuestionsNr();
}

// Zeigt die Anzahl der Fragen an // show max questions
function maxQuestionsNr() {
    document.getElementById('maxQuestionsNr').innerHTML = questions.length;
}

// Zeigt die Aktuelle Frage an //show curren question
function currentQuestionNr() {
    let question = currentQuestion + 1;
    document.getElementById('currentQuestionNr').innerHTML = question;
}

function showQuestion() {
    let showquestion = questions[currentQuestion];
    document.getElementById('question').innerHTML = showquestion['question'];
}

function showAnswer() {
    let showAnswer = questions[currentQuestion]
    document.getElementById('answer-1').innerHTML = showAnswer['answer-1'];
    document.getElementById('answer-2').innerHTML = showAnswer['answer-2'];
    document.getElementById('answer-3').innerHTML = showAnswer['answer-3'];
    document.getElementById('answer-4').innerHTML = showAnswer['answer-4'];
}

function answer(selection) { // funktion ANSWER erstellt und mit STRING parameter übergeben. 
    let answer = questions[currentQuestion]; // las answer ZUWEISEN vom Array questions inhalte an postition 0 sein.
    let rightAnswer = answer['right-answer']; // las rightAnswer ZUWEISEN aus (JOSN-Array pos 0) Fach 'right-Answer'.
    let selectedAnswer = selection.slice(-1); //las selectedAnswer ZUWEISEN nur die letzte position von meinem STRING parameter sein (1 - 4).
    if (rightAnswer == selectedAnswer) { // WENN rightAnswer ISTGLEICH selectedAnswer.
        document.getElementById(selection).parentNode.classList.add('right-answer'); // weise dem übergeordneten TAG (Eltern) die classe 'right-answer' zu.
        console.log('Richtige Antwort');
    } else { //SONST 
        document.getElementById(selection).parentNode.classList.add('wrong-answer'); // weise dem übergeordneten TAG (Eltern) die classe 'wrong-answer' zu.
        document.getElementById(`answer-${rightAnswer}`).parentNode.classList.add('right-answer'); // und zeige die Richtige Antwort an, durch die ID mit der richtigen nummer aus dem JSON-Array
        console.log('Falsche Antwort');
    }
    document.getElementById('next-btn').disabled = false; // das Element mit der ID 'next-button' wird der Befehl disable(deaktiviert) ZUGEWIESEN false(falsch), und clickbar.
    console.log('RightAnswer is: ' + rightAnswer);
}