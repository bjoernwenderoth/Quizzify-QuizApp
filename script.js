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
    }
]


let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        

        
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer1'];
        document.getElementById('answer_2').innerHTML = question['answer2'];
        document.getElementById('answer_3').innerHTML = question['answer3'];
        document.getElementById('answer_4').innerHTML = question['answer4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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
