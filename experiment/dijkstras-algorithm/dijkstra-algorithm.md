### Dijkstra's Algorithm
<iframe src="https://www.youtube.com/embed/cbPHkqTP2KM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
### Dijkstra's Algorithm

   - Set the distance to the source to 0 and the distance to the remaining vertices to infinity.
   - Set the current vertex to the source.
   - Flag the current vertex as visited.
   - For all vertices adjacent to the current vertex, set the distance from the source to the adjacent vertex equal to the minimum of its present distance and the sum of the weight of the edge from the current vertex to the adjacent vertex and the distance from the source to the current vertex.
   - From the set of unvisited vertices, arbitrarily set one as the new current vertex, provided that there exists an edge to it such that it is the minimum of all edges from a vertex in the set of visited vertices to a vertex in the set of unvisited vertices. To reiterate: The new current vertex must be unvisited and have a minimum weight edges from a visited vertex to it. This can be done trivially by looping through all visited vertices and all adjacent unvisited vertices to those visited vertices, keeping the vertex with the minimum weight edge connecting it.
   - Repeat steps 3-5 until all vertices are flagged as visited.

### Pseudocode

function Dijkstra(Graph, source):<br>
dist[source] ← 0                           // Initialization<br>
create vertex set Q<br>
for each vertex v in Graph:           <br>
if v ≠ source<br>
dist[v] ← INFINITY                 // Unknown distance from source to v<br>
prev[v] ← UNDEFINED                    // Predecessor of v<br>
Q.add_with_priority(v, dist[v])<br>
			
while Q is not empty:                      // The main loop<br>
u ← Q.extract_min()                    // Remove and return best vertex<br>
for each neighbor v of u:       // only v that are still in Q<br>
alt ← dist[u] + length(u, v) <br>
if alt < dist[v]<br>
dist[v] ← alt<br>
prev[v] ← u<br>
Q.decrease_priority(v, alt)<br>
return dist, prev<br>
							
