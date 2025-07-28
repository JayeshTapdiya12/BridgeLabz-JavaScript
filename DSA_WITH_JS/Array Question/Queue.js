//  queue is a linera data structure .
// fifo
//  real world eg: ticket counter
//                 request in web server

// quesue operation:
// enqueue: it add the elemnet in last  (array . push)
// dequeue : it remvoe and return element fromt the front (array . shift )
// front : view the fisrt element (arr[0]);
// isEmpty : if the quesue is empty
// size : show the size of the queue

// queue implementation by array

// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(ele) {
//         this.items.push(ele)
//     }
//     dequeue() {
//         if (this.isEmpty()) return "the queue is empty";
//         return this.items.shift();
//     }
//     front() {
//         if (this.isEmpty()) return "the queue is empty";
//         return this.items[0];
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items.join(" <- "))
//     }
// }
// const q = new Queue();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.print();

// console.log(q.dequeue());
// q.print();

// console.log(q.front());



// otpmized queue

class OptimizedQueue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.items[this.rear] = value;
        rear++;
    }
    dequeue() {
        if (this.isEmpty()) return null;
        let item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item
    }
    frontValue() {
        if (this.isEmpty()) return null;
        return this.items[this.front];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.join(" <- "));
    }
}



class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }
    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("the queue is full");;
            return
        }
        if (this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("the queue is empty");
            return;
        }

        const removed = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return removed;
    }

    front() {

    }

    isEmpty() {

    }
    size() {

    }

    print() {
        if (this.front === -1) {
            console.log("the queue is empty ")
        }
        let result = [];
        let i = this.front;

        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size
        }
        console.log("the quesus is ", result.join("<-"));
    }
}
const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.print();

cq.dequeue();
cq.dequeue();
cq.enqueue(6);
cq.enqueue(7);
cq.print();



// binary number from 1 to n by queue;

function BinaryQueue(N) {
    let result = [];
    let queue = [];


    queue.push("1");
    for (let i = 0; i < N; i++) {
        let current = queue.shift();
        result.push(current);
        queue.push(current + "0");
        queue.push(current + "1");
    }
    return result;
}

console.log(BinaryQueue(5))




// implementing the stack with 2 stack

class StackQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(vale) {
        this.stack1.push(vale);
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("the queue is empty")
            return null
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    front() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
    print() {
        const result = [...this.stack2].reverse().concat(this.stack1);
        console.log("Queue:", result.join(" <- "));
    }
}
const q = new StackQueue()
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();

console.log(q.dequeue());
q.print();  