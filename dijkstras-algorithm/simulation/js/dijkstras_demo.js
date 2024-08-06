	var myfont = "18px 'Courier'";
	var isdigraph = false;
	var interval;
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
	var canvas = document.getElementById('dijkstra');
	var dijkstra = new Dijkstra(canvas, myfont, isdigraph, nodes, edges, false);
	function reset() {
		location.reload()
	}
	function first_click() {
		x = document.getElementById('start');
		x.innerText = "Next";
		interval = setInterval(
		function(){
			dijkstra.start();  
			next_click();
			}, 2000);
	}
	comments_list = [
	'Starting node A is selected',
	'Nodes directly connected to A are B ,D ,C',
	'D has the least distance from A, so it is selected',
	'Nodes directly connected to D are E and F',
	'B has the second least distance from A, so it is selected',
	'Next possible nodes to select are C, E and F',
	' 74+26 = 100 , E is selected',
	'Node directly connected to E is H',
	'C has the least distance among other choices, hence C is selected',
	'74+82 = 156',
	'Node F is selected',
	'I and G are the nodes directly connected to F, check out the updated distance on top of these nodes',
	'Distance of H from A is 195 ',
	'I is directly connected to H , the distance is updated ',
	'G, having 284 units the shortest possible distance from G is selected',
	'I is farthest from A','I is selected',
	"End"
	];
	let count = -1;
	function next_click() {
		if (count === 16){
			document.getElementById('start').disabled = true ;
			if(id){
				clearInterval(id);
			}
		}
		count = count + 1;
		e_id = document.getElementById('ins');
		e_id.innerText = comments_list[count]			
	}
	let interval_count = 0;
	function temp(){
		dijkstra.start();
		next_click();
		interval_count+=1;
		if (interval_count===17){
			clearInterval(inter);
		}
	}
	var inter;
	function auto(){
		let x = document.getElementById('slider');
		let val = x.value;
		inter = setInterval(temp,val);
	}
