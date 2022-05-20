// emailjs copy-paste
const userID = "JNgg3-Ktxbod_bj9p"
const serviceID = "service_io7sks3"
const templateID = "template_2tw00fu" 

function startbtn(){
    event.preventDefault()
    document.getElementById('main').style.display = 'none';
    document.getElementById('main-footer').style.display = 'none';
    document.getElementById('secondary').style.display = 'block';
    document.getElementById('secondary-footer').style.display = 'block';
}


(function(){
    function buildQuiz(){
      // variabel som lagrer til HTML output
      const output = [];
  
      // for hvert spørgsmål
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variabel som lagrer listen af mulige svar
          const answers = [];
  
          // for hvert mulige answer
          for(letter in currentQuestion.answers){
  
            // tilføj button i HTML
            // `` formaterer som HTML 
            answers.push(
              ` 
                <input type="radio" id="${questionNumber}-${letter}" name="question${questionNumber}" value="${letter}">
                <label for="${questionNumber}-${letter}">${letter}:
                ${currentQuestion.answers[letter]}</label>
              `
            );
          }
  
          // Tilføj spørgsmål og dets svar til output
          output.push(
            `<div class="question js-label"> ${currentQuestion.question} </div>
            <div class="answers body-text js-label"> ${answers.join('')} </div>`
          );
        }
      );
  
      // Kombiner output listen til en HTML string og vis det på siden
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // Indsaml svarene
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // Hold styr på svarene
      let numCorrect = 0;
  
      // for hvert spørgsmål
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // Find det valgte svar
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // Hvis svaret er rigtigt
        if(userAnswer === currentQuestion.correctAnswer){
          // Tilføj til tallet af korrekte svar
          numCorrect++;
  
          // Farv svarene grønne
          answerContainers[questionNumber].style.color = '#000';
          answerContainers[questionNumber].classList.add("correct");
        }
        // Hvis svaret er forkert eller ikke blev udfyldt
        else{
          // Farv svarene røde
          answerContainers[questionNumber].style.color = 'red';
          answerContainers[questionNumber].classList.remove("correct");
        }
      });
  
      // Vis antallet af rigtige svar
      resultsContainer.innerHTML = `${numCorrect}/${myQuestions.length} rigtige svar`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    //liste af vores spørgsmål
    const myQuestions = [
      {
        question: "Hvilken af disse er ikke en udvidelsespakke til The Sims 4?",
        answers: {
          a: "Byliv",
          b: "Grønt er skønt",
          c: "Hunde og Katte",
          d: "Sommerdrøm"
        },
        correctAnswer: "d"
      },
      {
        question: "Hvilken snydekode giver dig 50.000 simoleoner?",
        answers: {
          a: "moneynow",
          b: "motherlode",
          c: "fillmotive motive_Fun",
          d: "simoleons",
        },
        correctAnswer: "b"
      },
      {
        question: "Kan man frit skifte mellem “spil” og “byg”?",
        answers: {
          a: "Ja",
          b: "Nej"
        },
        correctAnswer: "a"
      },
      {
        question: "Hvilket år udkom det første Sims spil?",
        answers: {
          a: "1999",
          b: "2000",
          c: "2001",
          d: "2002"
        },
        correctAnswer: "b"
      },
      {
        question: "Hvor mange udgaver er der af The Sims?",
        answers: {
          a: "3",
          b: "4",
          c: "5",
          d: "6"
        },
        correctAnswer: "b"
      },
      {
        question: "Hvilket firma ejer The Sims?",
        answers: {
          a: "EA",
          b: "Nintendo",
          c: "Sony",
          d: "Ubisoft"
        },
        correctAnswer: "a"
      },
      {
        question: "Hvor mange eksemplarer har The Sims 4 solgt (2020)?",
        answers: {
          a: "1 mio.",
          b: "5 mio.",
          c: "20 mio.",
          d: "50 mio."
        },
        correctAnswer: "c"
      },
      {
        question: "Hvad var det første objekt der blev lavet i The Sims?",
        answers: {
          a: "En dør",
          b: "En gynge",
          c: "En bil",
          d: "Et toilet"
        },
        correctAnswer: "d"
      }
    ];
  
    function tryAgain(){
      document.getElementById('submit').classList.add("submit-btn");
      document.getElementById('quiz').classList.add("inactive-quiz");
      document.getElementById('try-again').classList.add("try-again-active");
    }

    // Start quizzen
    buildQuiz();
  
    submitButton.addEventListener('click', () => {    
      showResults();
      tryAgain();    
 });
  })();





function contactForm(){
  event.preventDefault()
  const navn = document.getElementById('name').value
  const email = document.getElementById('email').value
  const besked = document.getElementById('message').value

  const emailData = {
    name: navn,
    email: email,
    message: besked
  }

  document.getElementById('email-btn').style.display = 'none';
  document.getElementById('thankyou').classList.add("thankyou");
  console.log(emailData)
  emailjs.send(serviceID, templateID, emailData, userID);
}