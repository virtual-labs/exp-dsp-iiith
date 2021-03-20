### The Problem

- In many applications one wants to obtain the shortest path from a to b.
- Depending on the context, the length of the path does not necessarily have to be the length in meter:
- One can as well look at the cost of a path – both if we have to pay for using it – or if we receive some. In general we speak of cost.Therefore one assigns cost to each part of the path – also called "edge".
- Dijkstra's Algorithm computes shortest – or cheapest paths, if all cost are positive numbers.
- However, if one allows negative numbers, the algorithm will fail.

### Other single source shortest path algorithms

Let's take note of other single source shortest path algorithms and their Applications:

   - **Bellman–Ford algorithm:** The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.
    
Like Dijkstra's algorithm, Bellman–Ford proceeds by relaxation, in which approximations to the correct distance are replaced by better ones until they eventually reach the solution.
   - **BFS algorithm:** If the graph is unweighted, we can solve this problem in O(V + E) time. The idea is to use a modified version of Breadth-first search in which we keep storing the predecessor of a given vertex while doing the breadth first search. This algorithm will work even when negative weight cycles are present in the graph.

 

### Why and where Dijkstra’s Algorithm is used?

Dijkstra’s algorithm is used when the graph has positive weights only. It is faster than the above other single source shortest path algorithms.

