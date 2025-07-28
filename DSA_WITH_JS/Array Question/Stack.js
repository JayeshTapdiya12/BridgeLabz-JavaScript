// // stack has 5  basic operation:
// // 1 push:add new elemennt in stack
// // 2.pop:  remove the element from stack
// // 3. peek: return the tops element
// // 4.is Empty: checks   if the stack is  Empty
// // 5.size :the number of elements in stack

// //  stack using array

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(ele) {

//         this.items.push(ele);
//     }
//     pop() {
//         if (this.isEmpty()) return "the stack is empty";
//         return this.items.pop();
//     }
//     peek() {
//         if (this.isEmpty()) return "the stack is empty";
//         return this.items[this.items.length - 1];
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     print() {
//         console.log(this.items.join(" -> "))
//     }
// }

// // using  linklist

// class Node {
//     constructor(data) {
//         this.data = this.data;
//         this.next = null;
//     }
// }
// class StackLL {

//     constructor() {
//         this.top = null;
//     }
//     push(data) {
//         const newNode = new Node(data);
//         newNode.next = this.top;
//         this.top = newNode;
//     }

//     pop() {
//         if (isEmpty()) {
//             console.log("Stack underFlow");
//             return null;
//         }
//         const pooped = this.top.data;
//         this.top = this.top.next;
//         return pooped;
//     }


//     isEmpty() {
//         return this.top === null;
//     }

//     peek() {
//         if (this.isEmpty) {
//             console.log("the stack is empty");
//             return null;
//         }
//     }

//     print() {
//         let curr = this.top;
//         let output = ""
//         while (curr) {
//             output += curr.data + " -> ";
//             curr = curr.next
//         }
//         return output;
//     }

// }






// function reverseStack(str) {
//     let stack = new Stack();
//     for (let i of str) {
//         stack.push(i);
//     }
//     let reverseStr = "";
//     while (!stack.isEmpty()) {
//         reverseStr += stack.pop();
//     }
//     return reverseStr
// }



// let st = new Stack();
// st.push(10);
// st.print();
// console.log(st.isEmpty());
// console.log(st.peek());


// console.log(reverseStack("Jayesh"))



// // valid paranthese question

// function validParanthese(s) {
//     let stack = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }

//     for (let char of s) {
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char)
//         } else {
//             if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return stack.length === 0;

// }

// console.log(validParanthese("()[]{}"))




// // get min() using o(1)time s

// class StackMin {
//     constructor() {
//         this.mainStack = [];
//         this.minStack = [];
//     }

//     push(ele) {
//         this.mainStack.push(ele);

//         if (this.minStack.length === 0 || ele <= this.getMin()) {
//             this.minStack.push(ele)
//         } else {
//             this.minStack.push(this.getMin())

//         }

//     }

//     pop() {
//         if (this.mainStack.length === 0) return null;
//         this.minStack.pop();
//         return this.mainStack.pop();
//     }

//     peek() {
//         if (this.mainStack.length === 0) return null;
//         return this.mainStack[this.mainStack.length - 1];
//     }


//     getMin() {
//         return this.minStack[this.minStack.length - 1];
//     }
//     getres() {
//         return this.minStack;
//     }

// }

// let minst = new StackMin();
// minst.push(5)
// minst.push(3)
// minst.push(9)
// minst.push(2)
// minst.push(5)
// minst.push(12)
// console.log(minst.getMin())



function portfixvalue(exp) {
    const stack = [];
    const tokens = exp.split(" ")

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.floor(a / b)); break;
            }

        }
    }

    return stack.pop();


}


console.log(portfixvalue("3 2 1 6 5 + * + -"))



// prefix

function prefix(exp) {
    const stack = [];
    const tokens = exp.trim().split(" ");

    for (let i = tokens.length - 1; i >= 0; i--) {
        let token = tokens[i]
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.floor(a / b)); break;
            }
        }
    }
    return stack.pop();

}

console.log(prefix("+ 3 * 4 5"))











// infix to postfix==>

function infixPostfix(exp) {

    const stack = [];
    let result = '';

    const precedenxe = {
        1: '+',
        1: '-',
        2: '*',
        2: '/',
        3: '^'
    };

    const isRightAsscociate = (op) => op === '^';

    for (let char of exp.replace(/ \s+/g, '')) {
        if (/[ a-zA-Z0-9]/.test(char)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop()
            }
            stack.pop();
        } else {
            while (stack.length && stack[stack.length - 1] !== '(' && (
                precedenxe[stack[stack.length - 1]] > precedenxe[char] ||
                (precedenxe[stack[stack.length - 1]] === precedenxe[char] && !isRightAsscociate(char))
            )) {
                result += stack.pop()
            }
            stack.push(char);
        }
    }
    while (stack.length) {
        result += stack.pop();
    }

    return result;

}

console.log(infixPostfix("(A + B) * (C - D)")); 