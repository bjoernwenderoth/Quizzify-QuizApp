let questions = [
    {
        "question": "Welche Sprache wird hauptsächlich für die Gestaltung und Formatierung von Webseiten verwendet?",
        "answer1": "JavaScript",
        "answer2": "HTML",
        "answer3": "Python",
        "answer4": "Ruby",
        "right_answer": 2
    },
    {
        "question": "Welches Element wird verwendet, um Überschriften in HTML-Dokumenten darzustellen?",
        "answer1": "&lt;header&gt;",
        "answer2": "&lt;title&gt;",
        "answer3": "&lt;h1&gt;",
        "answer4": "&lt;bold&gt;",
        "right_answer": 3
    },
    {
        "question": "Welches der folgenden wird verwendet, um Styles auf HTML-Elemente anzuwenden?",
        "answer1": "XML",
        "answer2": "JSON",
        "answer3": "CSS",
        "answer4": "SQL",
        "right_answer": 3
    },
    {
        "question": "Welches Framework wird oft für die Erstellung von interaktiven Benutzeroberflächen im Frontend verwendet und ist eine JavaScript-Bibliothek?",
        "answer1": "Bootstrap",
        "answer2": "jQuery",
        "answer3": "Django",
        "answer4": "React",
        "right_answer": 1
    },
    {
        "question": "Welche der folgenden Optionen wird verwendet, um die Schriftgröße in CSS anzupassen?",
        "answer1": "font-weight",
        "answer2": "text-align",
        "answer3": "font-size",
        "answer4": "line-height",
        "right_answer": 3
    },
    {
        "question": "Welches CSS-Attribut wird verwendet, um die Hintergrundfarbe eines Elements festzulegen?",
        "answer1": "background-color",
        "answer2": "color-background",
        "answer3": "background-style",
        "answer4": "color",
        "right_answer": 1
    },
    {
        "question": "Welche Dateiendung wird häufig für JavaScript-Dateien verwendet?",
        "answer1": ".css",
        "answer2": ".html",
        "answer3": ".php",
        "answer4": ".js",
        "right_answer": 4
    },
    {
        "question": "Wie wird eine Klasse in CSS ausgewählt?",
        "answer1": "#",
        "answer2": ".",
        "answer3": "/",
        "answer4": ":",
        "right_answer": 2
    },
    {
        "question": "Welche Funktion wird verwendet, um auf ein HTML-Element mit JavaScript zuzugreifen?",
        "answer1": "getElementById()",
        "answer2": "selectElement()",
        "answer3": "findElement()",
        "answer4": "accessElement()",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Element wird verwendet, um ein Bild einzufügen?",
        "answer1": "&lt;image&gt;",
        "answer2": "&lt;figure&gt;",
        "answer3": "&lt;picture&gt;",
        "answer4": "&lt;img&gt;",
        "right_answer": 4
    }
]

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_CORRECT = new Audio('audio/correct.mp3'); 
let AUDIO_FALSE = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
        progressbar();
    } else {
        UpdateToNextQuestion()
        progressbar()
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none'
    document.getElementById('allQuestionsEndScreen').innerHTML = questions.length;
    document.getElementById('rightAnswersEndScreen').innerHTML = rightQuestions;
}


function UpdateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}


function progressbar() {
    let percent =  currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressbar').innerHTML = `${percent} %`;
    document.getElementById('progressbar').style = `width: ${percent}%`
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        rightQuestions++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_CORRECT.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FALSE.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {

    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    rightQuestions = 0;
    currentQuestion = 0;
    init();

}
