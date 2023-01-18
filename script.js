let quiz = [
    {
        'question': 'Wie heißt kein deutscher Stadtstaat?', 
        'answer_1': 'Berlin',
        'answer_2': 'Saarland', //
        'answer_3': 'Hamburg', 
        'answer_4': 'Bremen',
        'right': 2
        
    },
    {   'question': 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?', 
        'answer_1': '26',
        'answer_2': '30',
        'answer_3': '32', //
        'answer_4': '36',
        'right': 3
    },
    {   'question': 'Wie heißt die Hauptstadt der Slowakei?', 
        'answer_1': 'Sofia',
        'answer_2': 'Prag',
        'answer_3': 'Bratislava', //
        'answer_4': 'Ljubljan',
        'right': 3
    },
    {   'question': 'Welcher Fluss fließt durch die Hauptstadt Ungarns?', 
        'answer_1': 'Buda',
        'answer_2': 'Donau', //
        'answer_3': 'Oder', 
        'answer_4': 'Moldau',
        'right': 2
    },
    {   'question': 'Zu welchem Sternbild gehört der Polarstern?', 
        'answer_1': 'Krebs',
        'answer_2': 'Kleiner Bär', //
        'answer_3': 'Stier', 
        'answer_4': 'Kreuz des Südens',
        'right': 2
    },
    {   'question': 'Wie heisst der grösste Planet unseres Sonnensystems?', 
        'answer_1': 'Jupiter', //
        'answer_2': 'Merkur',
        'answer_3': 'Venus', 
        'answer_4': 'Mars',
        'right': 1
    },
    {   'question': 'Wer ging von 1987 bis 1989 auf die Bad World Tour?', 
        'answer_1': 'Queen',
        'answer_2': 'Michael Jackson', //
        'answer_3': 'The Rolling Stones', 
        'answer_4': 'Pink Floyd',
        'right': 2
    },
    {   'question': 'Von wem ist der 80er Jahre-Song "Maria Magdalena"?', 
        'answer_1': 'Sandra',//
        'answer_2': 'Samantha Fox',
        'answer_3': 'Sabrina', 
        'answer_4': 'Kim Wilde',
        'right': 1
    },
    {   'question': 'Was ist ein klassisches Trainingsgerät für Boxer?', 
        'answer_1': 'der Barren',
        'answer_2': 'der Punchingball', //
        'answer_3': 'der Korb', 
        'answer_4': 'das Reck',
        'right': 2
    },
    {   'question': 'In welchem Land ist der Fußballclub Real Madrid beheimatet?', 
        'answer_1': 'Deutschland',
        'answer_2': 'Spanien', //
        'answer_3': 'Italien', 
        'answer_4': 'Frankreich',
        'right': 2
    }
];

let currentquestion = 0;
let clicked = true;
let rightQuestions = 0;
let audio_correct = new Audio('sound/win.mp3');
let audio_false = new Audio('sound/false.mp3');

function startQuiz() {
    if (currentquestion >= quiz.length) { 
        endQuiz();
    }
    let questions = quiz[currentquestion];
   
    document.getElementById('initialPage').style.display = 'none';
    document.getElementById('questionPage').style.display = '';
    document.getElementById('question').innerHTML = questions['question'];
    document.getElementById('answer_1').innerHTML = questions['answer_1'];
    document.getElementById('answer_2').innerHTML = questions['answer_2'];
    document.getElementById('answer_3').innerHTML = questions['answer_3'];
    document.getElementById('answer_4').innerHTML = questions['answer_4'];

    requestTopic();
}

function selectAnswer(answer) {
    let rightAnswer =  quiz[currentquestion]['right'];
   
    if(clicked) { 
        if(answer == rightAnswer) {
            document.getElementById(answer).classList.add('green');
            document.getElementById('foward').style.opacity = '1';
            rightQuestions++;
            audio_correct.play();
        } else {
            document.getElementById(answer).classList.add('red');
            document.getElementById(rightAnswer).classList.add('green');
            audio_false.play();
        }
    }
    clicked = false;
    noHover();
    document.getElementById('foward').style.opacity = '1';
}

function noHover() {
    let allAnswers = document.querySelectorAll('.quiz-section .answer-section');
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add('pointerEvents');
    }
}

function nextQuestion() {
    currentquestion++;
    clicked = true;

    document.getElementById('pre').style.opacity = '1';
    document.getElementById('foward').style.opacity = '0.2';

    let allAnswers = document.querySelectorAll('.quiz-section .answer-section');

    for (let i = 0; i < allAnswers.length; i++) {
       allAnswers[i].classList.remove('green');
       allAnswers[i].classList.remove('red');
       allAnswers[i].classList.remove('pointerEvents');
    }
    requestTopic();
    startQuiz();
}

function preQuestion() {
    currentquestion--;
    clicked = true;
}
function requestTopic() {
    if (currentquestion == 0) {
        document.getElementById('general').classList.remove('hidden');
        document.getElementById('sport').classList.add('hidden');
    }
    if (currentquestion == 4) {
        document.getElementById('general').classList.add('hidden');
        document.getElementById('astro').classList.remove('hidden');
    }
    if (currentquestion == 6) {
        document.getElementById('astro').classList.add('hidden');
        document.getElementById('music').classList.remove('hidden');
    }
    if (currentquestion == 8) {
        document.getElementById('music').classList.add('hidden');
        document.getElementById('sport').classList.remove('hidden');
    }
}
function endQuiz() {
    document.getElementById('endPage').style.display = '';
    document.getElementById('questionPage').style.display = 'none';
    document.getElementById('endScore').innerHTML = `<b>${rightQuestions} / ${quiz.length}</b>`;
}

function replay() {
    document.getElementById('endPage').style.display = 'none';
    document.getElementById('questionPage').style.display = '';
    currentquestion = 0;
    rightQuestions = 0;
    startQuiz();
}
