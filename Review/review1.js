// data = [
//     {
//         name: "Jay",
//         address: {
//             city: "bhopal",
//             state: "mp",
//         },
//         age: "23"
//     },
//     {
//         name: "Sara",
//         address: {
//             city: "indore",
//             state: "mp",

//         },
//         age: "22"
//     }
// ]

// let pincodeIndore = 42001;
// let pincodeBhopal = 42002;

// let check = data[0].address.city === "bhopal" ? data[0].address.pincode = pincodeBhopal : console.log("the city is not bhopal");
// let check2 = data[1].address.city === "indore" ? data[1].address.pincode = pincodeIndore : console.log("the city is not indore");


// console.log(data[0].address.pincode)
// console.log(data[1].address.pincode)

// console.log(data);



// create a ll
// find a val by index

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
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

    searchValueByIndex(pos) {
        let temp = this.head;
        let count = 0;

        while (count !== pos) {
            count++
            temp = temp.next;
        }
        return temp.data;
    }

}


let ll = new Linkedlist();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30)
ll.insertAtHead(40)

console.log(ll.searchValueByIndex(2))