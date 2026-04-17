var myfont = "18px 'Courier'";
var isdigraph = false;
var nodes = [
  ["A", 440, 140],
  ["B", 360, 40],
  ["C", 360, 320],
  ["D", 300, 140],
  ["E", 240, 80],
  ["F", 240, 240],
  ["G", 120, 320],
  ["H", 100, 120],
  ["I", 40, 240],
];
var edges = [
  ["", "A", "B", 76],
  ["", "A", "C", 128],
  ["", "A", "D", 74],
  ["", "B", "D", 57],
  ["", "B", "E", 73],
  ["", "C", "F", 83],
  ["", "D", "E", 26],
  ["", "D", "F", 82],
  ["", "E", "F", 87],
  ["", "E", "H", 95],
  ["", "F", "G", 128],
  ["", "F", "H", 127],
  ["", "F", "I", 148],
  ["", "G", "I", 87],
  ["", "H", "I", 92],
];
var edges2 = [
  ["", "A", "B", 76],
  ["", "A", "C", 128],
  ["", "A", "D", 74],
  ["", "B", "D", 57],
  ["", "B", "E", 73],
  ["", "C", "F", 83],
  ["", "D", "E", 26],
  ["", "F", "G", 128],
];
var nodes2 = [
  ["A", 440, 140],
  ["B", 360, 40],
  ["C", 360, 320],
  ["D", 300, 140],
  ["E", 240, 80],
  ["F", 240, 240],
  ["G", 120, 320],
];

var nodes3 = [
  ["A", 440, 140],
  ["B", 360, 40],
  ["C", 360, 320],
  ["D", 300, 140],
  ["E", 240, 80],
  ["F", 240, 240],
  ["G", 120, 320],
  ["H", 100, 120],
  ["I", 40, 240],
  ["J", 80, 30],
  ["K", 350, 270],
];
var edges3 = [
  ["", "A", "B", 76],
  ["", "A", "C", 128],
  ["", "A", "D", 74],
  ["", "B", "D", 57],
  ["", "B", "E", 73],
  ["", "C", "F", 83],
  ["", "D", "E", 26],
  ["", "D", "F", 82],
  ["", "E", "F", 87],
  ["", "E", "H", 95],
  ["", "F", "G", 128],
  ["", "F", "H", 127],
  ["", "F", "I", 148],
  ["", "G", "I", 87],
  ["", "H", "I", 92],
  ["", "E", "J", 92],
  ["", "D", "K", 192],
  ["", "A", "K", 102],
  ["", "I", "J", 102],
];

var nodes4 = [
  ["A", 440, 140],
  ["B", 360, 40],
  ["C", 360, 320],
  ["D", 300, 140],
  ["E", 240, 80],
  ["F", 240, 240],
  ["G", 120, 320],
  ["H", 100, 120],
];

var edges4 = [
  ["", "A", "B", 76],
  ["", "A", "C", 128],
  ["", "A", "D", 74],
  ["", "B", "D", 57],
  ["", "B", "E", 73],
  ["", "C", "F", 83],
  ["", "D", "E", 26],
  ["", "D", "F", 82],
  ["", "E", "F", 87],
  ["", "E", "H", 95],
  ["", "F", "G", 128],
  ["", "F", "H", 127],
];

var nodes5 = [
  ["A", 440, 140],
  ["B", 360, 40],
  ["C", 360, 320],
  ["D", 300, 140],
  ["E", 240, 80],
  ["F", 240, 240],
  ["H", 100, 120],
];

var edges5 = [
  ["", "A", "B", 76],
  ["", "A", "C", 128],
  ["", "A", "D", 74],
  ["", "B", "D", 57],
  ["", "B", "E", 73],
  ["", "C", "F", 83],
  ["", "D", "E", 26],
  ["", "D", "F", 82],
  ["", "E", "F", 87],
  ["", "E", "H", 95],
  ["", "F", "H", 127],
];
var ques_nodes = [nodes, nodes2, nodes3, nodes4, nodes5];
var ques_edges = [edges, edges2, edges3, edges4, edges5];

// Sample correct answers for each question (node order as per Dijkstra's algorithm)
var check_arr_list = [
  // Question 2 (index 0) - corrected to only include nodes in the graph: A, B, C, D, E, F, G
  ["A", "D", "B", "E", "C", "F", "H", "G", "I"],
  // Question 1 (index 1)
  ["A", "D", "B", "E", "C", "F", "G"],
  // Question 3 (index 2)
  ["A", "D", "B", "E", "C", "F", "K", "H", "G", "I", "J"],
  // Question 4 (index 3)
  ["A", "D", "B", "E", "C", "F", "H", "G"],
  // Question 5 (index 4)
  ["A", "D", "B", "E", "C", "F", "H"],
];
let level = 0;
if (sessionStorage.getItem("level") !== null) {
  level = Number(sessionStorage.getItem("level"));
}
var nodq = ques_nodes[level];
var edq = ques_edges[level];

var set_level = function (value) {
  sessionStorage.setItem("level", value);
  level = Number(value); // Update global level variable
  emp = [];
  let p = document.getElementById("msg");
  let startNode = check_arr_list[level][0];
  p.innerText = "Your answer : " + startNode;
  let z = document.getElementById("con");
  z.innerText = "";
  let promptText = document.getElementById("promptText");
  promptText.innerText = "Enter the next node";
  let inputBox = document.getElementById("input");
  if (inputBox) {
    inputBox.value = "";
    inputBox.focus();
  }
};
var canvas = document.getElementById("dijkstra");
var dijkstra = new Dijkstra(canvas, myfont, isdigraph, nodq, edq, false);
function lettersonly(input) {
  var regex = /[^A-Z]/gi;
  input.value = input.value.replace(regex, "");
}
function empty() {
  var x;
  x = document.getElementById("input").value;
  if (x === "") {
    alert("Invalid Entry");
    return false;
  }
}
var emp = [];
let ansButton = function () {
  let input = document.getElementById("input");
  let promptText = document.getElementById("promptText");
  let val = input.value.toUpperCase();
  if (val === "") {
    alert("Invalid Entry");
    return;
  }
  input.value = "";
  const startNode = check_arr_list[level][0];
  // Prevent entering the starting node
  if (val === startNode) {
    alert(
      "Do not enter the starting node. Begin with the next node after " +
        startNode +
        ".",
    );
    return;
  }
  // Only allow valid nodes for this question, except the starting node
  const validNodes = check_arr_list[level].slice(1); // skip starting node
  if (!validNodes.includes(val)) {
    alert("Invalid node for this question.");
    return;
  }
  // Prevent repeated input and extra entries
  if (emp.length >= validNodes.length) {
    promptText.innerText = "All nodes entered. Click Check.";
    return;
  }
  if (emp.includes(val)) {
    alert("Repeated Input");
    return;
  }
  emp.push(val);
  let p = document.getElementById("msg");
  p.innerText = "Your answer : " + [startNode].concat(emp).join(", ");
  // Update prompt for next node
  promptText.innerText =
    emp.length < validNodes.length
      ? "Enter the next node"
      : "All nodes entered. Click Check.";
};

function checkAnswer() {
  var check_list = check_arr_list[level];
  let z = document.getElementById("con");
  if (emp.length !== check_list.length - 1) {
    let left = check_list.length - 1 - emp.length;
    z.innerText = `Please enter all nodes before checking. ${left} node(s) left.`;
    return;
  }
  // Compare user input (emp) to correct answer (excluding starting node)
  if (emp.join(",") === check_list.slice(1).join(",")) {
    z.innerText = "Correct";
  } else {
    z.innerText = "Wrong, the correct answer is: " + check_list.join(", ");
  }
}
function resetButton() {
  emp = [];
  let p = document.getElementById("msg");
  let startNode = check_arr_list[level][0];
  // Only show the starting node, emp is empty
  p.innerText = "Your answer : " + startNode;
  let z = document.getElementById("con");
  z.innerText = "";
  let promptText = document.getElementById("promptText");
  promptText.innerText = "Enter the next node";
  let inputBox = document.getElementById("input");
  inputBox.value = "";
  inputBox.focus();
}
