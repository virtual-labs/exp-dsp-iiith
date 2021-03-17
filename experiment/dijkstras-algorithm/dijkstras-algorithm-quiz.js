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
            question: "1. Dijkstra’s algorithm cannot be applied on ____.", ///// Write the question inside double quotes
            answers: {
                a: "Directed and weighted graphs ", ///// Write the option 1 inside double quotes
                b: "Container of objects of similar types  ", ///// Write the option 2 inside double quotes
                c: "Container of objects of mixed types ", ///// Write the option 2 inside double quotes
                d: "All of the mentioned ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Dijkstra’s Algorithm is the prime example for ________.",  ///// Write the question inside double quotes
      answers: {
        a: "Greedy algorithm",                  ///// Write the option 1 inside double quotes
        b: "Branch and bound  ",                  ///// Write the option 2 inside double quotes
	c: "Back tracking", ///// Write the option 3 inside double quotes
        d: "Dynamic programming ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Given a directed graph where weight of every edge is same, we can efficiently find shortest path from a given source to destination using _______. ",  ///// Write the question inside double quotes
      answers: {
        a: "Dijkstra’s Shortest Path Algorithm ",                  ///// Write the option 1 inside double quotes
        b: "Neither Breadth First Traversal nor Dijkstra’s algorithm can be used",                  ///// Write the option 2 inside double quotes
	c: "Depth First Search ", ///// Write the option 3 inside double quotes
        d: "Breadth First Traversal ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
{
      question: "4. In an unweighted, undirected connected graph, the shortest path from a node S to every other node is computed most efficiently, in terms of time complexity by ________.",  ///// Write the question inside double quotes
      answers: {
        a: "Dijkstra’s algorithm starting from S.  ",                  ///// Write the option 1 inside double quotes
        b: "Warshall’s algorithm ",                  ///// Write the option 2 inside double quotes
	c: " Performing a DFS starting from S.  ", ///// Write the option 3 inside double quotes
        d: "Performing a BFS starting from S.  ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "5. Which of the following algorithm can be used to efficiently calculate single source shortest paths in a Directed Acyclic Graph? ",  ///// Write the question inside double quotes
      answers: {
        a: "Dijkstra ",                  ///// Write the option 1 inside double quotes
        b: "Bellman-Ford  ",                  ///// Write the option 2 inside double quotes
	c: "Topological Sort   ", ///// Write the option 3 inside double quotes
        d: "Strongly Connected Component ", ///// Write the option 4 inside double quotes
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
