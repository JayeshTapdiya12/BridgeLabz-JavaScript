// 1st defineing a node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Linkedlist {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    insertAtTail(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode;
    }

    insertAtPosition(data, pos) {
        if (pos === 0) {
            this.insertAtHead(data);
        }
        let count = 0;
        let temp = this.head;
        while (count !== pos - 1) {
            temp = temp.next;
            count++;
        }
        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode
    }

    deleteHead() {
        if (this.head === null) {
            console.log("the list is empty")
            return;
        }
        this.head = this.head.next;

    }

    deleteAtPos(pos) {
        if (pos === 0) {
            this.deleteHead();
            return;
        }
        let temp = this.head;
        let prev = null;
        let count = 0;
        while (count !== pos - 1 && temp !== null) {
            temp = temp.next;
            count++;
        }
        temp.next = temp.next.next;
    }

    deleteByValu(value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        if (this.head.data === value) {
            this.deleteHead();
            return;
        }
        let temp = this.head;
        let prev = null;
        while (temp !== null && temp.data !== value) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next
        temp.next = null;

    }

    middleNode() {
        if (this.head === null) {
            console.log("the list is empty");
            return;
        }
        let fast = this.head;
        let prev = this.head;
        while (fast !== null && fast.next !== null) {
            prev = prev.next;
            fast = fast.next.next;
        }
        console.log(`the middle node is ${prev.data}`);
        return prev.data
    }

    reverseLL() {
        if (this.head === null) {
            console.log("the lsit is empty");
            return;
        }

        if (this.head.next === null) {
            return this.head.data;
        }

        let curr = this.head;
        let prev = null;
        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;

    }

    isLoop() {
        if (this.head === null) {
            console.log("no loop is there");
            return;
        }
        if (this.head.next === null) {
            console.log("no loop is present");
            return;
        }

        let fast = this.head;
        let slow = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next
            if (slow === fast) {
                console.log("the ll is looped");
                return false
            }
        }
        console.log("the ll is not looped");
        return true
    }

    removeLoop() {
        if (this.head === null) {
            console.log("no loop is there");
            return;
        }
        if (this.head.next === null) {
            console.log("no loop is present");
            return;
        }

        let fast = this.head;
        let slow = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next
            if (slow === fast) {
                break;
            }
        }
        if (slow !== fast) {
            return;
        }
        slow = this.head;

        while (fast.next !== slow.next) {
            fast = fast.next;
            slow = slow.next;
        }
        fast.next = null
    }

    removeDuplicates() {
        if (this.head === null) {
            console.log("the ll is empty");
            return
        }
        if (this.head.next === null) {
            console.log("no duplicated present")
            return;
        }

        let curr = this.head;
        let prev = null;
        let seen = new Set();
        while (curr !== null && curr.next !== null) {
            if (seen.has(curr.data)) {
                prev.next = curr.next
            } else {
                seen.add(curr.data);
                prev = curr;
            }
            curr = curr.next;
        }

    }


    printLinkedList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data)
            temp = temp.next;
        }
    }
    countNode() {
        let temp = this.head;
        let count = 0;
        while (temp !== null) {
            count++
            temp = temp.next;
        }
        console.log(count)
    }

    serachValue(val) {
        let bool = false;
        let temp = this.head
        while (temp !== null) {
            if (temp.data === val) {

                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    serachValueAndIndex(val) {
        let bool = false;
        let temp = this.head
        let count = 0;
        while (temp !== null) {
            if (temp.data === val) {

                return count;
            }
            count++;
            temp = temp.next;
        }
        return -1;
    }



    getHeadValue() {
        if (this.head !== null) {
            console.log(this.head.data);
        } else {
            console.log("Empty list");
        }
    }

    nthNodeFromLast(n) {

        let fast = this.head;
        let slow = this.head;

        for (let i = 0; i < n; i++) {
            if (fast === null) {
                console.log("the list is smaller");
                return null;
            }
            fast = fast.next;
        }
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow.data;
    }


    palindrone() {
        if (!this.head || !this.head.next) return true;

        let slow = this.head;
        let fast = this.head;
        while (!fast || !fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let first = this.head;
        let second = prev;
        while (second) {
            if (first.data !== second.data) return false;
            first = first.next;
            second = second.next;
        }
        return true;
    }

}

const ll = new Linkedlist();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.printLinkedList()
ll.countNode()
console.log(ll.serachValue(40));
ll.getHeadValue()
ll.insertAtTail(40);
ll.printLinkedList()
console.log("object")
ll.insertAtPosition(90, 2);
ll.printLinkedList()
console.log(ll.serachValueAndIndex(40));
ll.deleteHead();
ll.printLinkedList()
console.log("object")

ll.deleteAtPos(1)
ll.printLinkedList()

console.log("object")
ll.deleteByValu(40);
ll.printLinkedList()

ll.insertAtHead(10);
ll.insertAtHead(120);
ll.insertAtHead(30);
console.log("obejecct")
ll.printLinkedList()
console.log(ll.middleNode())

console.log("objecttttttttt");
ll.reverseLL();
ll.printLinkedList()


ll.isLoop()
console.log("objecttttttttt");

ll.removeDuplicates();
ll.printLinkedList()



console.log(ll.palindrone())


