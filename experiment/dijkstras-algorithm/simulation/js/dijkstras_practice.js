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
var ques_nodes = [nodes, nodes2, nodes3];
var ques_edges = [edges, edges2, edges3];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Use localStorage to persist selected example
let rndm = 0;
if (
  typeof localStorage !== "undefined" &&
  localStorage.getItem("dijkstraPracticeExample") !== null
) {
  rndm = parseInt(localStorage.getItem("dijkstraPracticeExample"), 10);
  if (isNaN(rndm) || rndm < 0 || rndm > 2) rndm = 0;
} else {
  rndm = getRandomInt(0, 2);
}
window.rndm = rndm;
let nod = ques_nodes[rndm];
let ed = ques_edges[rndm];

function createDijkstra() {
  var canvas = document.getElementById("dijkstra");
  window.dijkstra = new Dijkstra(canvas, myfont, isdigraph, nod, ed, false);
}
createDijkstra();

function lettersonly(input) {
  var regex = /[^A-Z]/gi;
  input.value = input.value.replace(regex, "");
}
function empty() {
  var x;
  x = document.getElementById("input").value;
  if (x == "") {
    alert("Invalid Entry");
    return false;
  }
}

function reset() {
  location.reload();
}

// Update the graph in-place when a new example is selected
window.setExample = function (val) {
  // Store selected example in localStorage
  localStorage.setItem("dijkstraPracticeExample", val);
  // Update global variables
  rndm = parseInt(val, 10);
  if (isNaN(rndm) || rndm < 0 || rndm > 2) rndm = 0;
  window.rndm = rndm;
  nod = ques_nodes[rndm];
  ed = ques_edges[rndm];
  // Clear the canvas before drawing new graph
  var canvas = document.getElementById("dijkstra");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  // Re-create Dijkstra object and draw
  createDijkstra();
  if (window.dijkstra && typeof window.dijkstra.start === "function") {
    window.dijkstra.start();
  }
  // Reset practice state
  current_check_list = check_arr_list[rndm].slice();
  practice_step = 0;
  // Reset input and feedback
  var input = document.getElementById("input");
  if (input) {
    input.value = "";
    input.disabled = false;
  }
  var submitBtn = document.getElementById("submit");
  if (submitBtn) submitBtn.disabled = false;
  var p = document.getElementById("msg");
  if (p)
    p.innerText =
      "Press Start, then enter the next node visited by Dijkstra's algorithm.";
  // Re-enable Start button if needed
  var sta = document.getElementById("sta");
  if (!sta) {
    // If Start button was removed, reload to restore it
    location.reload();
  }
};
function disable() {
  var element = document.getElementById("sta");
  element.parentNode.removeChild(element);
}

let check_arr = ["D", "B", "E", "C", "F", "H", "G", "I"];
let check_arr2 = ["D", "B", "E", "C", "F", "G"];
let check_arr3 = ["D", "B", "E", "K", "C", "F", "J", "H", "G", "I"];
let check_arr_list = [check_arr, check_arr2, check_arr3];

// Create a global mutable copy for the current session
let current_check_list = null;
let practice_step = 0;
let practice_comments_list = [
  "Start by selecting the node with the smallest tentative distance from the start node.",
  "Continue by selecting the next closest unvisited node.",
  "Keep following Dijkstra's Algorithm to select the next node.",
  "Proceed to the next node as per the shortest path.",
  "Continue until all nodes are visited in order.",
  "You are almost done!",
  "Final steps!",
];

function updatePracticeComment() {
  let p = document.getElementById("msg");
  if (practice_step < practice_comments_list.length) {
    p.innerText = "Correct! " + practice_comments_list[practice_step];
  } else {
    p.innerText = "Correct!";
  }
}

// Initialize current_check_list and step when the user clicks Start
function initPractice() {
  current_check_list = check_arr_list[rndm].slice(); // fresh copy
  practice_step = 0;
  let p = document.getElementById("msg");
  p.innerText = "Enter the next node visited by Dijkstra's algorithm.";
}

var subButton = function () {
  if (!current_check_list) {
    // If not initialized, initialize now (fallback)
    current_check_list = check_arr_list[rndm].slice();
    practice_step = 0;
  }
  let input = document.getElementById("input");
  let p = document.getElementById("msg");
  if (input.value === current_check_list[0]) {
    current_check_list.splice(0, 1);
    dijkstra.start();
    practice_step++;
    if (current_check_list.length === 0) {
      // Show the correct path
      let correctPath = ["A"].concat(check_arr_list[rndm]).join(" → ");
      p.innerHTML =
        "<b>Congratulations!</b> You have completed the practice.<br>" +
        "<b>Correct Path:</b> " +
        correctPath;
      // Disable input and submit button
      document.getElementById("input").disabled = true;
      document.getElementById("submit").disabled = true;
    } else {
      updatePracticeComment();
    }
    input.value = "";
    return true;
  } else {
    p.innerText =
      "Wrong Answer!  Check the values on top of the nodes and try again ";
    return false;
  }
};
