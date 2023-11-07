// Edge class constructor() 
// Connects two vertices, along with the weight of the connection (to support weighted graphs).
// The 'start' and 'end' properties mark the vertices that the edge connects. 
// If the graph 'isdirected', we can indicate the direction the edge points (towards the end vertex).
class Edge {
    constructor(start, end, weight = null) {
      this.start = start;
      this.end = end;
      this.weight = weight;
    }
  }
  
  module.exports = Edge;