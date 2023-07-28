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

	var nodes4 = [["A",440,140],
		["B",360,40],
		["C",360,320],
		["D",300,140],
		["E",240,80],
		["F",240,240],
		["G",120,320],
		["H",100,120]];

	var edges4 =  [["","A","B",76],
		["","A","C",128],
		["","A","D",74],
		["","B","D",57],
		["","B","E",73],
		["","C","F",83],
		["","D","E",26],
		["","D","F",82],
		["","E","F",87],
		["","E","H",95],
		["","F","G",128],
		["","F","H",127]];

	var nodes5 = [["A",440,140],
		["B",360,40],
		["C",360,320],
		["D",300,140],
		["E",240,80],
		["F",240,240],
		["H",100,120]];

	var edges5 = [["","A","B",76],
		["","A","C",128],
		["","A","D",74],
		["","B","D",57],
		["","B","E",73],
		["","C","F",83],
		["","D","E",26],
		["","D","F",82],
		["","E","F",87],
		["","E","H",95],
		["","F","H",127]];
	var ques_nodes = [nodes,nodes2,nodes3,nodes4,nodes5];
	var ques_edges = [edges,edges2,edges3,edges4,edges5];
	let level = 1;
	level = Number(sessionStorage.getItem("level"));
	var nodq = ques_nodes[level];
	var edq = ques_edges[level];
	
	var set_level = function(value){
		sessionStorage.setItem("level" , value);
	}
	var canvas = document.getElementById('dijkstra');
	var dijkstra = new Dijkstra(canvas, myfont, isdigraph, nodq, edq, false);
	function lettersonly(input){
		var regex = /[^A-Z]/gi;
		input.value = input.value.replace(regex,"");
	}
	function empty() {
		var x;
		x = document.getElementById("input").value;
		if (x === "") {
			alert("Invalid Entry");
			return false;
		};
	}
	var emp = [];
	let ansButton = function() {
		var check_list = check_arr_list[level];
		let input = document.getElementById('input');
		if (emp.length>0){
			if (emp[emp.length-1] !== input.value){
				emp.push(input.value);
			}
			else {
				alert("Repeated Input")
			}
		}
		else {
			emp.push(input.value)
		}
	let p = document.getElementById('msg');
	p.innerText = 'Your answer : ' + ' ' + emp.toString();

	if (emp.length === check_list.length) {
		if (emp.toString() === check_list.toString()) {

			let z = document.getElementById('con');
			z.innerText = 'Correct';
		} else {
			let z = document.getElementById('con');
			z.innerText = 'Wrong, the correct answer is: ' + check_list.toString();
		}
	}
	}
	var undoButton = function(){
		emp.pop()
		let p = document.getElementById('msg');
		p.innerText = emp.toString()
		let  z = document.getElementById('con');
		z.innerText = ''
	}
