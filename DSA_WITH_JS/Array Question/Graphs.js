// it is a non linear data strucuter which  store the data in form of nodes and edges
// graphs use : socail netwroking sites, maps, routing,

// graph compoments:
// 1vertex: this are the nodes in the graphs
// 2 edges: this connect the nods in the graph
// 3.weight:a number respresting a cost / time / diatance on the edges
// 4. degree: numbers of edges connected to the vertex
// 5.path:     sequnece of vertoces you follow through the edges
// 6.  cycle: a path that start and ends on the same vertices:
// 7 adjancent node: nodes that are direclty connected
// 8.connected graph: there is a path  between every pair of the nodes4
// 9.  compoments: a subgraph where any node is  reacheable from any node

// types of graphs:
// 1.directed graph: edge have one direction.
// 2.undirected graph: the edge have both the direction:
// 3.weighted: edges ahve the value like cost / distance
// 4.unweighted: all the edge are equal
// 5.cyclic: contains a loop in graph
// 6.acyclic: does not contain a loop
// 7.connected graph:all the nodes are reachable
// 8.disconnected:some nodes are isolated




// Bfs - Breath first Search - it explores the graph level by level and it visit all the neighours before visiting the next level neighbours
// key concepts: uses a queue to explaore all the nodes;
// keep the track of the node while exploring to avoid the repetation

// step by step process
// create an queue and map for the visisted nodes;
// adding the nodes to the queue to mark it visited



// dfs - depth first search - it explores the as far as possible in the graph and the tree.
// if the dead end comes then we return back and try again
// it can be aachive by recurssion only
// it follows one path

// when to use the dfs:
// findd path betwwen two nodes
// detect cycle
// explore connected compoments


// step by step proccess:




class Graph {
    constructor() {
        this.adjency = new Map();
    }

    addVertex(vertex) {
        if (!this.adjency.has(vertex)) {
            this.adjency.set(vertex, []);
        } else {
            console.log(`vertex: ${vertex} already present `)
        }
    }
    addEdges(v1, v2) {
        if (!this.adjency.has(v1)) {
            this.addVertex(v1);
        }
        if (!this.adjency.has(v2)) {
            this.addVertex(v2);
        }
        this.adjency.get(v1).push(v2);
        this.adjency.get(v2).push(v1);
    }

    bfs(v) {

        const queue = [];
        const visited = new Set();

        queue.push(v);
        visited.add(v)

        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr);

            for (let elem of this.adjency.get(curr)) {
                if (!visited.has(elem)) {
                    visited.add(elem);
                    queue.push(elem)
                }
            }
        }
    }
    cycleDetectionBFS(start) {
        const queue = [];
        const visisted = new Set();
        const parent = new Map();

        queue.push(start);
        visisted.add(start);
        parent.set(start, null);

        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr);
            for (let neighbour of this.adjency.get(curr)) {
                if (!visisted.has(neighbour)) {
                    visisted.add(neighbour);
                    parent.set(neighbour, curr)
                    queue.push(neighbour);
                } else if (parent.get(curr) !== neighbour) {
                    console.log("the cycle is present ");
                    return;
                }
            }
        }
        console.log("cycle not presnet")
    }

    shortesPathBFS(src, dest) {
        const visisted = new Set();
        const queue = [];
        const parent = new Map();

        visisted.add(src);
        queue.push(src);
        parent.set(src, null);

        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr === dest) break;
            for (let neighbour of this.adjency.get(curr)) {
                if (!visisted.has(neighbour)) {
                    queue.push(neighbour);
                    parent.set(neighbour, curr);
                    visisted.add(neighbour)
                }
            }
        }
        if (!visisted.has(dest)) {
            console.log(`no path existed between ${src} and ${dest}`);
            return
        }
        const path = [];
        let curr = dest
        while (curr !== null) {
            path.push(curr);
            curr = parent.get(curr);
        }
        path.reverse();

        console.log(`the path betwen ${src} and ${dest} is : ${path.join('->')}`)

        console.log(`the lenght is ${path.length - 1}`)
    }

    // bfsRecuur(v) {
    //     const queue = [];
    //     const visited = new Set();
    //     queue.push(v);
    //     visited.add(v);

    //     const helper = () => {
    //         if (queue.length === 0) {
    //             return;
    //         }
    //         const curr = queue.shift();
    //         console.log(curr);

    //         for (let elem of this.adjency.get(curr)) {
    //             if (!visited.has(elem)) {
    //                 visited.add(elem);
    //                 queue.push(elem)
    //             }
    //         }
    //         helper();
    //     };
    //     helper();

    // }

    dfs(start) {
        const visited = new Set();
        const stack = [start];
        while (stack.length > 0) {
            const curr = stack.pop();
            if (!visited.has(curr)) {
                console.log(curr)
                visited.add(curr);
                for (let neighbours of [...this.adjency.get(curr)].reverse()) {
                    if (!visited.has(neighbours)) {
                        stack.push(neighbours);
                    }
                }
            }
        }
    }

    connectComponemts(start) {
        const visited = new Set();
        let compomentCount = 0;

        const dfs = (vertex, compoments) => {
            visited.add(vertex);
            compoments.push(vertex);

            for (let neighbour of this.adjency.get(vertex)) {
                if (!visited.has(neighbour)) {
                    dfs(neighbour, compoments)
                }
            }
        }

        for (let vertex of this.adjency.keys()) {
            if (!visited.has(vertex)) {
                const compoments = []
                compomentCount++;
                dfs(vertex, compoments);
                console.log(`componemts ${compomentCount} : ${compoments.join(', ')}`)
            }
        }

        console.log("\n", compomentCount);
    }

    cycleDetectionDFS(start) {
        const visisted = new Set();
        const stack = [];
        const parent = new Map();

        stack.push(start);
        parent.set(start, null);
        visisted.add(start)

        while (stack.length > 0) {
            const curr = stack.pop();
            for (let neighbour of [...this.adjency.get(curr)].reverse()) {
                if (!visisted.has(neighbour)) {
                    stack.push(neighbour);
                    parent.set(neighbour, curr);
                    visisted.add(neighbour)
                } else if (parent.get(curr) !== neighbour) {
                    console.log("the cycle is dected")
                    return
                }
            }
        }
        console.log("cycle not found")
    }


    dfsRecurr(start) {
        const visited = new Set();
        const helper = (vertex) => {
            if (!vertex || visited.has(vertex)) return;
            console.log(vertex);
            visited.add(vertex);
            for (let neighbour of this.adjency.get(vertex)) {
                if (!visited.has(neighbour)) {
                    helper(neighbour);
                }
            }
        }
        helper(start)
    }



    print() {
        for (let [vertex, edges] of this.adjency) {
            console.log(`${vertex} -> ${edges.join(',')}`)
        }
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdges('A', "B");
g.addEdges('A', 'C');
g.addEdges('B', 'D');
g.addEdges('C', 'D');

g.print();
g.bfs("C")
console.log("\n");
g.dfs("C")
console.log("\n")
g.dfsRecurr("C")

console.log("the cycle detechton :                \n")
g.cycleDetectionBFS("A")

console.log("the connecte componemts    \n");
g.connectComponemts()


console.log("the shorthest path   \n")
g.shortesPathBFS("A", "D")

class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
        this.vertices = [];
    }

    addvertex(name) {
        if (this.vertices.length < this.size) {
            this.vertices.push(name);
        } else {
            console.log("the matrix is full")
        }
    }

    addEdges(from, to) {
        const i = this.vertices.indexOf(from);
        const j = this.vertices.indexOf(to);

        if (i !== -1 && j !== -1) {
            this.matrix[i][j] = 1;
            this.matrix[j][i] = 1;
        } else {
            console.log("in valid matrix")
        }
    }

    bfs(start) {
        const startIndex = this.vertices.indexOf(start);
        if (startIndex === -1) {
            console.log("the vertices is invalid ");
            return;
        }
        const visited = new Array(this.size).fill(false);
        const queue = [];
        queue.push(startIndex); // we are pushing the index of the vertices
        visited[startIndex] = true;
        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(this.vertices[curr]);
            for (let i = 0; i < this.size; i++) {
                if (this.matrix[curr][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    dfs(start) {
        const startIndex = this.vertices.indexOf(start);
        if (startIndex === -1) {
            console.log("the vertices is invalid");
            return;
        }
        const visited = new Array(this.size).fill(false);;
        const queue = [];
        queue.push(startIndex);
        visited[startIndex] = true;

        while (queue.length > 0) {
            const curr = queue.pop();

            console.log(this.vertices[curr]);
            for (let i = 0; i < this.size; i++) {
                if (this.matrix[curr][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            let row = this.vertices[i] + ' | ';
            for (let j = 0; j < this.size; j++) {
                row += this.matrix[i][j] + " "
            }
            console.log(row)
        }
    }
}


const g2 = new GraphMatrix(4);
g2.addvertex("A");
g2.addvertex("B");
g2.addvertex("C");
g2.addvertex("D");

g2.addEdges("A", "B");
g2.addEdges("A", "C");
g2.addEdges("C", "D");
g2.addEdges("D", "B");

g2.print()

g2.bfs("B")

console.log("\n")
g2.dfs("B")



