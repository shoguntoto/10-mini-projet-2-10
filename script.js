const quizData = [
    
    {
        question: 'Quel est le langage de programmation le plus utilisé ?',
        a :"Java",
        b : 'C++',
        c: 'Python',
        d: 'JavaScript',
        e: 'C#',
        correct: 'c'
    },
    {
        question: 'Qui a racheté GitHub ? ',
        a:'Apple',
        b: 'Microsoft',
        c:'Google',
        d:'IBM',
        correct: 'b'
    },
    {
        question: 'Selon une enquête de mars 2018 sur les développeurs, quel est le motif principal qui pourrait leur faire changer de poste ?',
        a: 'L\'ambiance de travail',
        b:'Les projets',
        c:'Le salaire',
        d:'Les technos utilisées',
        correct: 'c'

    },
    {
        question:'Que permet l\'outil VisBug créé par Google ?',
        a: 'Permet de visualiser les différentes étapes d\'un algorithme',
        b:'Déployer une application sur PlayStore',
        c:'De tester des modifications HTML et CSS depuis chrome',
        d:'D\'améliorer le SEO',
        correct: 'c',
    },
    {
        question:'Comment s\'appelle la conférence annuelle que Google organise pour les développeurs ?',
        a:'Google devConf',
        b: 'Google Developer Summit',
        c:'Chrome Dev Summit',
        d: 'Google Developer Day',
        correct: 'c'
    }

]
const answerEls = document.querySelectorAll('.sec')

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];


    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

    



    
}

function getSelected(){
  
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){

            answer= answerEl.id;

        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked =false;
    });
}
submitBtn.addEventListener('click', ()=>{

    const answer = getSelected();
    console.log(answer)
    if (answer ){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        if( currentQuiz<quizData.length){
               loadQuiz();
       }else{
               quiz.innerHTML = `<h2>Vous avez un score de ${score}/${quizData.length} félicitation !</h2> <button onclick='location.reload()'>Reload</button>`
       }
   
       }
    }

   
   

    
)