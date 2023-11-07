const Edge = require('./Edge.js');

// Vertex class constructor:
class Vertex {
    constructor(data) {
        // Holds any given data
        this.data = data;
        // keeps track of a list of edges
        this.edges = [];
    }
    // addEdge() method:
    // A method that expects a vertex parameter, which will represent the other end of the edge.
    // And a second parameter for weight 
    addEdge(vertex, weight) {
        // It must be an instanceof a Vertex
        if (vertex instanceof Vertex) {
            // Prevent duplicate edges between two vertices.
            const existingEdge = this.edges.find(edge => edge.end === vertex)
            if (!existingEdge) {
                // Creates an Edge instance to represent the connection from this vertex to the ending vertex.
                // an option for weights to be added to the edge when a new edge is created.
                // and adds the Edge instance to the vertex’s edges array.
                this.edges.push(new Edge(this, vertex, weight));
                // Throws Error if edge already exists
            } else {
                throw new Error('Edge already exisit')
            }
            // Otherwise throws an error. 
        } else {
            throw new Error('Edge start and end must both be Vertex');
        }
    }
    //.removeEdge() method:
    // Expects an ending vertex parameter. In order to remove the edge that leads to the given vertex
    removeEdge(vertex) {
        // Iterates through the list of edges and filters out the Edge whose end property is strictly equal to the ending vertex.
        this.edges = this.edges.filter(edge => edge.end !== vertex);
    }

    // .print() method
    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];

        const output = `\n${this.data} \n--> ${edgeList.join('\n--> ')}`;
        console.log(output);
    }
}

module.exports = Vertex;
