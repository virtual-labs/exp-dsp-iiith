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
            question: "1. Let G be a directed graph whose vertex set is the set of numbers from 1 to 100. There is an edge from a vertex i to a vertex j iff either j = i + 1 or j = 3i. The minimum number of edges in a path in G from vertex 1 to vertex 100 is _____.", ///// Write the question inside double quotes
            answers: {
                a: "4", ///// Write the option 1 inside double quotes
                b: "7", ///// Write the option 2 inside double quotes
 		c: "23", ///// Write the option 3 inside double quotes
                d: "99", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2.Let G = (V, E) be a simple undirected graph, and s be a particular vertex in it called the source. For x ∈ V, let d(x) denote the shortest distance in G from s to x. A breadth first search (BFS) is performed starting at s. Let T be the resultant BFS tree. If (u, v) is an edge of G that is not in T, then which one of the following CANNOT be the value of d(u) – d(v)?",  ///// Write the question inside double quotes
      answers: {
        a: "-1",                  ///// Write the option 1 inside double quotes
        b: "0",                  ///// Write the option 2 inside double quotes
	c: "1", ///// Write the option 3 inside double quotes
        d: "2", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Consider a weighted undirected graph with positive edge weights and let uv be an edge in the graph. It is known that the shortest path from the source vertex s to u has weight 53 and the shortest path from s to v has weight 65. Which one of the following statements is always true?",  ///// Write the question inside double quotes
      answers: {
        a: "weight (u, v) < 12 ",                  ///// Write the option 1 inside double quotes
        b: "weight (u, v) ⩽ 12 ",                  ///// Write the option 2 inside double quotes
	c: "weight (u, v) > 12", ///// Write the option 3 inside double quotes
        d: "weight (u, v) ⩾ 12", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "4. What is the time complexity of Dijikstra’s algorithm? ",  ///// Write the question inside double quotes
      answers: {
        a: "O(N) ",                  ///// Write the option 1 inside double quotes
        b: "O(N3) ",                  ///// Write the option 2 inside double quotes
	c: "O(N2)", ///// Write the option 3 inside double quotes
        d: "O(logN)", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "5. Given a directed graph where weight of every edge is same, we can efficiently find shortest path from a given source to destination using _______. ",  ///// Write the question inside double quotes
      answers: {
        a: "Breadth First Traversal ",                  ///// Write the option 1 inside double quotes
        b: "Dijkstra's Shortest Path Algorithm ",                  ///// Write the option 2 inside double quotes
	c: "Neither Breadth First Traversal nor Dijkstra's algorithm can be used ", ///// Write the option 3 inside double quotes
        d: "Depth First Search", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
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
