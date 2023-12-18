/**
 * Create stack using array implementation
 * use npx http-server to run file
 */
// let stack = [];
// stack.push('Google');
// stack.push('Twitter');
// stack.push('YouTube');
// stack.pop();

// stack.unshift("Toji");
// stack.shift("Gojo");
// Notice how the LIFO Last In First Out is being implemented here. So array is basically a stack!

/**
 * Create Stack from Scratch using Linked List
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.size++
        return this
    }

    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this
    }

    deQueue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}