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
question: "1. Which of the following statements is/are TRUE for an undirected graph?<br>P: Number of odd degree vertices is even<br>Q: Sum of degrees of all vertices is even?", ///// Write the question inside double quotes
answers: {
a: "P Only", ///// Write the option 1 inside double quotes
b: "Q Only ", ///// Write the option 2 inside double quotes
c: "Both P and Q ", ///// Write the option 2 inside double quotes
d: "Neither P nor Q", ///// Write the option 2 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. Which of the following data structure is useful in traversing a given graph by breadth first search?",  ///// Write the question inside double quotes
answers: {
a: "Stack",                  ///// Write the option 1 inside double quotes
b: "List ",                  ///// Write the option 2 inside double quotes
c: "Queue ", ///// Write the option 3 inside double quotes
d: "None of these", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "3. What does it mean when we say that an algorithm X is asymptotically more efficient than Y?",  ///// Write the question inside double quotes
answers: {
a: "X will always be a better choice for small inputs",                  ///// Write the option 1 inside double quotes
b: "X will always be a better choice for large inputs ",                  ///// Write the option 2 inside double quotes
c: "Y will always be a better choice for small inputs ", ///// Write the option 3 inside double quotes
d: "X will always be a better choice for all inputs ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},
{
question: "4. What is the time and space complexity for the given code? int a = 0, b = 0; <br>for (i = 0; i< N; i++) {<br>  a = a + rand(); }<br>for (j = 0; j< M; j++) {<br>  b = b + rand(); <br>}",  ///// Write the question inside double quotes
answers: {
a: "O(N * M) time, O(1) space ",                  ///// Write the option 1 inside double quotes
b: "O(N + M) time, O(N + M) space ",                  ///// Write the option 2 inside double quotes
c: " O(N + M) time, O(1) space ", ///// Write the option 3 inside double quotes
d: "O(N * M) time, O(N + M) space ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},
{
question: "5. For a given graph G having v vertices and e edges which is connected and has no cycles, which of the following statements is true?",  ///// Write the question inside double quotes
answers: {
a: "v=e ",                  ///// Write the option 1 inside double quotes
b: "v = e+1  ",                  ///// Write the option 2 inside double quotes
c: "  v + 1 = e  ", ///// Write the option 3 inside double quotes
d: "v = e-1  ", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
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
