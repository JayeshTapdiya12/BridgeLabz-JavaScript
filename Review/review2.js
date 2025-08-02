// review  2 - 02/07/2025




// let arr = [3, 18, 23, 25, 32, 34, 48, 76, 79];

// let even = [];
// let odd = [];

// for (let num of arr) {
//     if (num % 2 === 0) {
//         even.push(num * 5);
//     }
//     if (num % 3 === 0) {
//         odd.push(num);
//     }
// }

// console.log(even);
// console.log(odd)



// let search = 25;

// function binarySearch(arr, target) {

//     let s = 0
//     let e = arr.length;
//     let mid = Math.floor((s + e) / 2)

//     while (s < e) {
//         if (arr[mid] === target) {
//             console.log("the elemnt is found")
//             return;
//         }
//         if (arr[mid] < target) {
//             s = mid + 1;
//         } else {
//             e = mid;
//         }
//         mid = Math.floor((s + e) / 2);
//     }
//     console.log("the element not found");

// }

// binarySearch(arr, 80);



class Graph {

    constructor() {
        this.adjency = new Map();
    }

    addVertex(v) {
        if (!this.adjency.has(v)) {
            this.adjency.set(v, []);
        } else {
            console.log("the vertex is already present");
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

    connnectedComponemts() {
        let visited = new Set();

        let count = 0;




        const dfs = (node, compoment) => {
            visited.add(node);
            compoment.push(node);
            for (let neighours of this.adjency.get(node)) {
                if (!visited.has(neighours)) {
                    dfs(neighours, compoment);
                }
            }
            // }
        }

        for (let neighours of this.adjency.keys()) {
            if (!visited.has(neighours)) {
                count++;
                let compoment = [];
                dfs(neighours, compoment);
                console.log(`copoment {compoment}  :  ${compoment.join('->')}`)
            }
        }
        // }
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");


g.addEdges("A", "B");
g.addEdges("C", "D");

g.connnectedComponemts()