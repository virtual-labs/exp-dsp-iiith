 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");
	answerContainers.forEach(e => e.style.color = "black");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Which of the following statement(s)is / are correct regarding Bellman-Ford shortest path algorithm?<br>P: Always finds a negative weighted cycle, if one exist s.<br>Q: Finds whether any negative weighted cycle is reachable from the source. ", ///// Write the question inside double quotes
            answers: {
                a: "P Only ", ///// Write the option 1 inside double quotes
                b: "Q Only", ///// Write the option 2 inside double quotes
                c: "Both P and Q", ///// Write the option 2 inside double quotes
                d: "All of the mentioned", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the time complexity of insertion at any point on an array?",  ///// Write the question inside double quotes
      answers: {
        a: "O(N)",                  ///// Write the option 1 inside double quotes
        b: "O(N^2) ",                  ///// Write the option 2 inside double quotes
	c: "O(NLogN)", ///// Write the option 3 inside double quotes
        d: "None of these ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What does it mean when we say that an algorithm X is asymptotically more efficient than Y?",  ///// Write the question inside double quotes
      answers: {
        a: "X will always be a better choice for small inputs ",                  ///// Write the option 1 inside double quotes
        b: "X will always be a better choice for large inputs",                  ///// Write the option 2 inside double quotes
	c: "Y will always be a better choice for small inputs", ///// Write the option 3 inside double quotes
        d: " X will always be a better choice for all inputs", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
{
      question: "4. In an unweighted, undirected connected graph, the shortest path from a node S to every other node is computed most efficiently, in terms of time complexity by______. ",  ///// Write the question inside double quotes
      answers: {
        a: "Dijkstra???s algorithm starting from S.",                  ///// Write the option 1 inside double quotes
        b: "Warshall???s algorithm ",                  ///// Write the option 2 inside double quotes
	c: "O(N + M) time, O(1) space ", ///// Write the option 3 inside double quotes
        d: "O(N * M) time, O(N + M) space ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
