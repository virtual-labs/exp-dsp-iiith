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
		["I", 40, 240]
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
		["", "H", "I", 92]
	];
	var edges2 = [
		["", "A", "B", 76],
		["", "A", "C", 128],
		["", "A", "D", 74],
		["", "B", "D", 57],
		["", "B", "E", 73],
		["", "C", "F", 83],
		["", "D", "E", 26],
		["", "F", "G", 128]
	];
	var nodes2 = [
		["A", 440, 140],
		["B", 360, 40],
		["C", 360, 320],
		["D", 300, 140],
		["E", 240, 80],
		["F", 240, 240],
		["G", 120, 320]
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
		["K", 350, 270]
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
		["", "I", "J", 102]
	];
	var ques_nodes = [nodes, nodes2, nodes3];
	var ques_edges = [edges, edges2, edges3];
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let rndm = getRandomInt(0, 2);
	let nod = ques_nodes[rndm];
	let ed = ques_edges[rndm];
	var canvas = document.getElementById('dijkstra');
	var dijkstra = new Dijkstra(canvas, myfont, isdigraph, nod, ed, false);
	function lettersonly(input){
		var regex = /[^A-Z]/gi;
		input.value = input.value.replace(regex,"");
	}
	function empty() {
		var x;
		x = document.getElementById("input").value;
		if (x == "") {
			alert("Invalid Entry");
			return false;
		};
	}
	function reset() {
		location.reload()
	}
	function disable() {
		var element = document.getElementById('sta');
		element.parentNode.removeChild(element);
	}
	let check_arr = ['D','B','E','C','F','H','G','I'];
	let check_arr2 = ['D','B','E','C','F','G'];
	let check_arr3 = ['D','B','E','K','C','F','J','H','G','I'];
	let check_arr4 = ['D','B','E','C','F','H','G'];
	let check_arr5 = ['D','B','E','C','F','H'];
	let check_arr_list = [check_arr,check_arr2,check_arr3,check_arr4,check_arr5];
	var subButton = function(){
		let check_list = check_arr_list[level];
		let input = document.getElementById('input');

		if (input.value == check_list[0]){
			let p = document.getElementById('msg');
			p.innerText='Correct!';
			check_list.splice(0,1);
			dijkstra.start();
			dijkstra.start();
			return true;
		}
		else{
			let p = document.getElementById('msg');
			p.innerText='Wrong Answer!  Check the values on top of the nodes and try again ' ;
			return false;
		}
	}
