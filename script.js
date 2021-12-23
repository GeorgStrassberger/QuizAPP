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
        "right-answer": 3
    },
    {
        "question": "Wofür ist HTML zuständig?",
        "answer-1": "Formatierung",
        "answer-2": "Inhalt des Dokumentes",
        "answer-3": "Design",
        "answer-4": "Logik",
        "right-answer": 3
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

let currentQuestion = 0;

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

function answer(selection) {
    let answer = questions[currentQuestion];
    let rightAnswer = answer['right-answer'];
    let selectedAnswer = selection.slice(-1);
    if (rightAnswer == selectedAnswer) {
        document.getElementById(selection).parentNode.classList.add('right-answer');
        console.log('Richtige Antwort');
    } else {
        document.getElementById(selection).parentNode.classList.add('wrong-answer');
        console.log('Falsche Antwort');
    }
}