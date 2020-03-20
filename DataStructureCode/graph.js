class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertice(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }

  addEdge(v, w) {
    this.adjList[v].push(w);
    this.adjList[w].push(v);
  }

  toString() {
    let s = "";

    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + " -> ";

      let neighbours = this.adjList[this.vertices[i]];

      for (let v of neighbours) {
        s += " " + v;
      }
      s += "\n";
    }
    return s;
  }

  initializeColor() {
    let color = {};

    for (v of this.vertices) {
      color[v] = "white";
    }
    return color;
  }

  bfs(v, callback) {
    let color = this.initializeColor();
    let queue = [];
    queue.push(v);

    while (queue.length > 0) {
      let u = queue.shift();
      let neighbours = this.adjList[u];

      color[u] = "grey";

      for (let n of neighbours) {
        if (color[n] === "white") {
          color[n] = "grey";
          queue.push(n);
        }
      }


      if (callback) {
        callback(u);
      }
      color[u] = "black";
    }
  }

  improvedBfs(v,callback){
    let color = this.initializeColor();
    let queue = [];
    queue.push(v);

    while (queue.length > 0) {
      let u = queue.shift();
      let neighbours = this.adjList[u];

      color[u] = "grey";

      for (let n of neighbours) {
        if (color[n] === "white") {
          color[n] = "grey";
          queue.push(n);
        }
      }


      if (callback) {
        callback(u);
      }
      color[u] = "black";
    }
      
  }
}
function printNode(value) {
  console.log("Visted vertex:" + value);
}

var graph = new Graph();

var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (v of myVertices) {
  graph.addVertice(v);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

graph.bfs(myVertices[0], printNode);
