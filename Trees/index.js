class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if(this.root == null) {
            this.root = node;
            return this;
        }
        else {
            let currentRoot = this.root;
            while(true) {
                if(value == currentRoot.value) return null;
                if(value < currentRoot.value) {
                    if(currentRoot.left == null) {
                        currentRoot.left = node;
                        return this;
                    }
                    else {
                        currentRoot = currentRoot.left; // current root updated
                    }
                }
                else if(value > currentRoot.value) {
                    if(currentRoot.right == null) {
                        currentRoot.right = node;
                        return this;
                    }
                    else {
                        currentRoot = currentRoot.right; // current root updated
                    }
                }
            }
        }
        
    }

    find(value) {
        if(this.root == null) return null;
        let currentRoot = this.root,
            found = false;
        while(currentRoot && !found) {
            if(value < currentRoot.value) {
                currentRoot = currentRoot.left;
            }
            else if(value > currentRoot.value) {
                currentRoot = currentRoot.right;
            }
            else {
                found = true;
            }
        }
        return currentRoot;
    }
}

// This method to insert is a pain in the ass!
// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(9);
// tree.root.right = new Node(11);

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.insert(8);
tree.insert(12);
tree.insert(7);
tree.insert(10);
console.log(tree)
console.log(tree.find(17))