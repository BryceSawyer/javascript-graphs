// GRAPHS: JAVASCRIPT
// Introduction to Graphs

// This Grafh is an object-oriented implementation of the graph data structure in JavaScript. 
// With three classes, Edge, Vertex, and Graph
// implements a variety of graphs that satisfy the requirements of many algorithms.
// Graph consists of vertices and their corresponding edges.
// flexible to support directed, undirected, weighted, and unweighted graphs.

// An Edge class that connects two vertices, along with the weight of the connection (to support weighted graphs).
// A Vertex class that maintains a list of connections to other vertices, represented by a list of Edge instances.
const Vertex = require('./Vertex.js');
// Vertex can store any data.
// Vertex can add and remove edges going to another Vertex.

// The Graph stores all of its vertices, represented by a list of Vertex instances.
// And knows if it is directed or undirected, and if it is weighted or unweighted.
// The Graph can add and remove its own vertices, and can add and remove edges between stored vertices.

// Graph class constructor():
class Graph {
    // 'isDirected' boolean parameter in the constructor for the user to designate that the graph is directed.
    // 'isWeighted' boolean parameter in the constructor for the user to designate that the graph is weighted.
    // Default for 'isWeighted' and 'isDirected' is false if no argument is given.
    constructor(isDirected = false, isWeighted = false) {
        // keeps track of a list of vertices
        this.vertices = [];
        // isDirected and isWeighted are optional properties
        this.isDirected = isDirected;
        this.isWeighted = isWeighted;
    }
    // .addVertex() method:
    // Adds a Vertex instance into the Graph’s list of vertices to populate the graph.
    addVertex(data) {
        // Creates a Vertex instance 
        const newVertex = new Vertex(data);
        // Adds the new Vertex instance to the graph/vertices array
        this.vertices.push(newVertex);
        // return the newly created Vertex to signal to the method caller that a vertex was successfully created and added to the list.
        return newVertex;
    }
    // .removeVertex() method:
    removeVertex(vertex) {
        // Iterates through the list of vertices and removes the vertex that is strictly equal to the vertex given in the parameter.
        this.vertices = this.vertices.filter(vertices => vertices !== vertex);
    }
    // .addEdge() method:
    // Creates edges between the parameters, vertexOne and vertexTwo.
    // and a third parameter for a weight option
    addEdge(vertexOne, vertexTwo, weight) {
        // Variable edgeWeight, to set the weight argument if the graph 'isWeighted', otherwise is set it to null.
        const edgeWeight = this.isWeighted ? weight : null;
        // If the parameters are both an instanceof a Vertex, 
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            // Using the Vertex.addEdge() method to create an edge between two given vertices.
            // and a edgeWeight argument for a weight option
            vertexOne.addEdge(vertexTwo, edgeWeight);
            // Create the edge from vertexTwo to vertexOne 'Only' if the 'isDirected' property is 'false'.
            if (!this.isDirected) {
                vertexTwo.addEdge(vertexOne, edgeWeight);
            }
        } else {
            // To avoid creating edges when both vertices are not Vertex instances
            throw new Error('Expected Vertex arguments.');
        }
    }
    // .removeEdge() method:
    // Removes edges between the parameters, vertexOne and vertexTwo
    removeEdge(vertexOne, vertexTwo) {
        // If the parameters are both an instanceof a Vertex, 
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            // Using the Vertex.removeEdge() method to remove the edge between two given vertices.
            vertexOne.removeEdge(vertexTwo)
            // Remove the edge from vertexTwo to vertexOne 'Only' if the 'isDirected' property is 'false'.
            if (!this.isDirected) {
                vertexTwo.removeEdge(vertexOne)
            }
            // To avoid removeing edges when both vertices are not Vertex instances
        } else {
            throw new Error('Expected Vertex arguments.')
        }
    }
    // .print() method
    // Prints out the state of the graph structure.
    print() {
        this.vertices.forEach(vertex => vertex.print());
    }
}

module.exports = Graph;


