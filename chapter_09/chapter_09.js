const Dictionary = require('../chapter_07/chapter_07').Dictionary;
const Queue = require('../chapter_04/chapter_04').Queue;

/**
 * Graph
 * @constructor
 */
const Graph = function () {
    const vertices = [];
    const adjList = new Dictionary();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function () {
        vertices.forEach((vertex) => {
            const connects = adjList.get(vertex);
            const result = connects.reduce((a, b) => {
                return a + ' ' + b;
            }, '');
            console.log(vertex + ' -> ' + result);
        })
    }

    this.initColors = function () {
        const colors = [];
        for (let i = 0; i < vertices.length; i++) {
            colors[vertices[i]] = 'white';
        }
        return colors;
    }

    this.bfs = function (v, callback) {
        const colors = this.initColors();
        const queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            const u = queue.dequeue();
            colors[u] = 'grey';
            const neighbors = adjList.get(u);
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                if (colors[neighbor] === 'white') {
                    colors[neighbor] = 'grey';
                    queue.enqueue(neighbor);
                }
            }
            colors[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    this.bfsCal = function (v, callback) {
        const colors = this.initColors();
        const queue = new Queue();
        queue.enqueue(v);
        const d = [];
        const pred = [];

        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = undefined;
        }

        while (!queue.isEmpty()) {
            const u = queue.dequeue();
            const neighbors = adjList.get(u);
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                if (colors[neighbor] === 'white') {
                    pred[neighbor] = u;
                    d[neighbor] = d[u] + 1;
                    colors[neighbor] = 'grey';
                    queue.enqueue(neighbor);
                }
            }
            colors[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
        return {
            d, pred
        }
    }

    this.dfs = function () {
        const colors = this.initColors();
        for (let i = 0; i < vertices.length; i++) {
            if (colors[vertices[i]] === 'white') {
                visit(vertices[i], colors);
            }
        }
    }

    const visit = function (u, colors) {
        colors[u] = 'grey';
        console.log(u)
        const neighbors = adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (colors[w] === 'white') {
                visit(w, colors);
            }
        }
        colors[u] = 'black';
    }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


// graph.bfs('A', (v) => {console.log('탐색한 경로 : ' + v)});

const pathInfo = graph.bfsCal('A');
// console.log(pathInfo);

const preds = pathInfo.pred;
// console.log(preds);


const from = myVertices[0];
for (let i = 0; i < myVertices.length; i++) {
    let path = [];
    for (let to = myVertices[i]; to !== from; to = preds[to]) {
        path.push(to);
    }
    path.push(myVertices[0]);
    // console.log(path.reverse().join(' -> '));
}


graph.dfs();