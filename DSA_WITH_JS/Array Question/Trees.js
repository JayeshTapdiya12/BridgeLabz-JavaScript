// trees : it is a hierachical data stucturemade up of nodes
// top node is root node
// tree termnology:
// root:topmost element
// child: mode direclty connected to another node
//  parent: node direclty connect to given above node
// leaf : node which has no child
// sibling:  node sharing the same parent
// height : max depth from root to any leaf
// depth: levels from root  to particular node
// subtree : a tree within a lager tree


// Types of Trees
// Binary Tree: Max 2 children per node

// Binary Search Tree (BST): Left < root < right

// Balanced Tree (AVL/Red-Black)

// Heap Tree (Max-Heap, Min-Heap)

// Trie (Prefix Tree)

// N-ary Tree: Node can have N children


// Tree Traversals (core operations)

// In-order (Left → Root → Right) done

// Pre-order (Root → Left → Right)

// Post-order (Left → Right → Root)

// Level-order (BFS using a Queue)



// tree
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// let tree = new TreeNode(10);
// tree.left = new TreeNode(10);
// tree.right = new TreeNode(10);
// tree.left.left = new TreeNode(9);
// tree.left.right = new TreeNode(9);


// console.log(tree)

class BinaryTree {

    constructor() {
        this.root = null
    }

    // insert  delete and search in the treeee

    // insert the value()
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let curr = this.root;
        while (true) {
            if (curr.data > newNode.data) {
                if (!curr.left) {
                    curr.left = newNode
                    return;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    return
                }
                curr = curr.right;
            }
        }
    }

    search(value) {
        let curr = this.root;
        while (curr) {
            if (curr === value) {
                return true;
            }
            if (curr > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }

    deletenode(root, value) {
        if (!root) return null;
        if (value < root.data) {
            root.left = this.deletenode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deletenode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            let minNode = this.getMin(root.right)
            root.data = minNode.data
            root.right = this.deletenode(root.right, minNode.data);
        }
        return root;
    }

    delete(value) {
        this.root = this.deletenode(this.root, value);
    }
    getMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // left root right
    inorder(node) {
        if (node === null) {
            return;
        }
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }

    inorderStack(node) {
        let stack = [];
        let curr = node;

        while (curr !== null || stack.length > 0) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left
            }
            curr = stack.pop();
            console.log(curr.data);
            curr = curr.right;
        }
    }


    // (Root -> Left → Right
    preorder(node) {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }


    // (Left → Right → Root
    postorder(node) {
        if (node === null) {
            return
        }
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data)
    }
}


const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(8);

console.log("In-order traversal:");
bst.inorder(bst.root);

console.log("Search 8:", bst.search(8));
console.log("Search 100:", bst.search(100));

bst.delete(5);
console.log("After deleting 5:");

console.log("In-order traversal:");
bst.inorder(bst.root);

const tree = new BinaryTree();
tree.root = new TreeNode(10);
tree.root.left = new TreeNode(9);
tree.root.right = new TreeNode(8);
tree.root.left.left = new TreeNode(7);
tree.root.left.right = new TreeNode(6);
tree.root.right.left = new TreeNode(5);
tree.root.right.right = new TreeNode(4)

console.log("\n")
tree.inorderStack(tree.root)
console.log("\n")
tree.preorder(tree.root)

console.log("\n")

// Check if In-order Traversal of a Binary Tree is Sorted
// (Helps check if a tree is a BST)


function inorderSortedd(node) {
    // left root right
    let prev = null;
    let valid = true;

    function inordersoort(curr) {
        if (!curr || !valid) return;

        inordersoort(curr.left);

        if (prev !== null && curr.data <= prev) {
            valid = false;
            return;
        }

        prev = curr.data;
        inordersoort(curr.right);
    }

    inordersoort(node);
    return valid;
}

console.log(inorderSortedd(tree.root));




// the k node in the inorder travesal


function knode(node, k) {
    let count = 0;
    let ele = null;

    function inorder(node) {
        if (!node || ele !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            ele = node.data;
            return
        }
        console.log(node.data);

        inorder(node.right)

    }

    inorder(node);
    console.log(`helllllllllllllllllllllo ${ele}`)
    return ele;
}
console.log("\n")
console.log(knode(tree.root, 2))


console.log("\n")



// In-order Traversal of Binary Tree Stored as Array

function inorderToArray(node) {
    let arr = [];

    function inorder(curr) {
        if (curr === null) {
            return;
        }
        inorder(curr.left);
        arr.push(curr.data);
        inorder(curr.right);
    }

    inorder(node)
    return arr;
}

console.log(inorderToArray(tree.root))



// maxi. depth / hieght

console.log("\n");

// 1 + max (left, right)

function depth(curr) {
    if (curr === null) {
        return 0;
    }
    let lh = depth(curr.left);
    let rh = depth(curr.right)

    return 1 + Math.max(lh, rh);
}


console.log(depth(tree.root))


console.log("\n")

// printing all the leaf node:

function leafnode(node) {
    if (node === null) {
        return;
    }
    if (node.left === null && node.right === null) {
        console.log(node.data);
        return
    }
    leafnode(node.left);
    leafnode(node.right)
}

console.log(leafnode(tree.root))

console.log("\n")

// counting the nodes in the tree
function nodeCount(curr) {
    if (curr === null) {
        return 0;
    }
    return 1 + nodeCount(curr.left) + nodeCount(curr.right);

}
console.log(nodeCount(tree.root));



// Check if a binary tree is a valid BST.


function isBts(node, min, max) {
    if (node === null) return true;
    if (node.data >= max || node.data <= min) return false;
    return isBts(node.left, min, node.data) && isBts(node.right, node.data, max);
}

console.log(isBts(tree.root, Number.min, Number.max))






