// stack has 5  basic operation:
// 1 push:add new elemennt in stack
// 2.pop:  remove the element from stack
// 3. peek: return the tops element
// 4.is Empty: checks   if the stack is  Empty
// 5.size :the number of elements in stack

//  stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    push(ele) {

        this.items.push(ele);
    }
    pop() {
        if (this.isEmpty()) return "the stack is empty";
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) return "the stack is empty";
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items.join(" -> "))
    }
}

// using  linklist

class Node {
    constructor(data) {
        this.data = this.data;
        this.next = null;
    }
}
class StackLL {

    constructor() {
        this.top = null;
    }
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (isEmpty()) {
            console.log("Stack underFlow");
            return null;
        }
        const pooped = this.top.data;
        this.top = this.top.next;
        return pooped;
    }


    isEmpty() {
        return this.top === null;
    }

    peek() {
        if (this.isEmpty) {
            console.log("the stack is empty");
            return null;
        }
    }

    print() {
        let curr = this.top;
        let output = ""
        while (curr) {
            output += curr.data + " -> ";
            curr = curr.next
        }
        return output;
    }

}






function reverseStack(str) {
    let stack = new Stack();
    for (let i of str) {
        stack.push(i);
    }
    let reverseStr = "";
    while (!stack.isEmpty()) {
        reverseStr += stack.pop();
    }
    return reverseStr
}



let st = new Stack();
st.push(10);
st.print();
console.log(st.isEmpty());
console.log(st.peek());


console.log(reverseStack("Jayesh"))



// valid paranthese question

function validParanthese(s) {
    let stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;

}

console.log(validParanthese("()[]{}"))




// get min will 