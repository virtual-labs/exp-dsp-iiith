var myfont = "18px 'Courier'";
var isdigraph = false;
var interval = null;
var playing = false;
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
var canvas = document.getElementById("dijkstra");
var dijkstra = new Dijkstra(canvas, myfont, isdigraph, nodes, edges, false);
function reset() {
  if (interval) clearInterval(interval);
  playing = false;
  count = -1;
  interval_count = 0;
  document.getElementById("ins").innerText = "Click on Play or Step to start";
  document.getElementById("current-step").innerText = "0";
  document.getElementById("total-steps").innerText = comments_list.length - 1;
  document.getElementById("play-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;
  document.getElementById("step-btn").disabled = false;
  setTimeout(function () {
    document.getElementById("step-btn").disabled = false;
  }, 100);
  // Visually reset the graph
  if (typeof dijkstra.reset === "function") {
    dijkstra.reset();
  } else if (typeof dijkstra.draw === "function") {
    dijkstra.draw();
  }
}
// Remove first_click, replaced by playDemo/stepDemo
comments_list = [
  "Starting node A is selected",
  "Nodes directly connected to A are B ,D ,C",
  "D has the least distance from A, so it is selected",
  "Nodes directly connected to D are E and F",
  "B has the second least distance from A, so it is selected",
  "Next possible nodes to select are C, E and F",
  " 74+26 = 100 , E is selected",
  "Node directly connected to E is H",
  "C has the least distance among other choices, hence C is selected",
  "74+82 = 156",
  "Node F is selected",
  "I and G are the nodes directly connected to F, check out the updated distance on top of these nodes",
  "Distance of H from A is 195 ",
  "I is directly connected to H , the distance is updated ",
  "G, having 284 units the shortest possible distance from G is selected",
  "I is farthest from A",
  "I is selected",
  "End",
];

function updateStepIndicator() {
  var total = comments_list.length - 1;
  var current = count;
  // Clamp current to [0, total]
  if (current < 0) current = 0;
  if (current > total) current = total;
  document.getElementById("current-step").innerText = current + 1;
  document.getElementById("total-steps").innerText = total + 1;
}

function next_click() {
  count = count + 1;
  var e_id = document.getElementById("ins");
  // If this is the last step ("End"), show the completion message and disable buttons
  if (count === comments_list.length - 1) {
    e_id.innerText = "The traversal is complete. All the nodes are traversed.";
    if (interval) clearInterval(interval);
    playing = false;
    document.getElementById("play-btn").disabled = true;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("step-btn").disabled = true;
    updateStepIndicator();
    return;
  }
  // If we somehow go past the last step, do nothing
  if (count >= comments_list.length) {
    return;
  }
  e_id.innerText = comments_list[count];
  updateStepIndicator();
}

function playDemo() {
  if (playing) return;
  playing = true;
  document.getElementById("play-btn").disabled = true;
  document.getElementById("pause-btn").disabled = false;
  document.getElementById("step-btn").disabled = true;
  interval = setInterval(function () {
    dijkstra.start();
    next_click();
    // If we just finished the last step, stop auto mode
    if (count >= comments_list.length - 1) {
      if (interval) clearInterval(interval);
      playing = false;
    }
  }, 2000);
}

function pauseDemo() {
  if (interval) clearInterval(interval);
  playing = false;
  document.getElementById("play-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;
  document.getElementById("step-btn").disabled = false;
}

function stepDemo() {
  if (playing) return;
  dijkstra.start();
  next_click();
  // Disable step button if we just finished
  if (count >= comments_list.length - 1) {
    document.getElementById("step-btn").disabled = true;
  }
}

// Initialize on load
window.onload = function () {
  reset();
};
