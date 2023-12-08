// Setting up our Classes
// The Node -- will have a next and prev value
// The Doubly linked list -- will have head tail length
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value)
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if(this.length == 0) return undefined
        let currentTail = this.tail;
        if(this.length == 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = currentTail.prev
            this.tail.next = null;
            currentTail.prev = null
        }
        this.length--
        return currentTail
    }

    shift() {
        if(this.length == 0) return undefined
        let oldHead = this.head;
        if(this.length == 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(value) {
        let node = new Node(value);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined
        }
        if(index <= this.length/2) {
            console.log("WORKING FROM START")
            let count = 0;
            let current = this.head
            while (count != index) {
                current = current.next
                count++
            }
            return current
        }
        else {
            console.log("WORKING FROM END")
            let count = this.length - 1;
            let current = this.tail
            while (count != index) {
                current = current.prev
                count--
            }
            return current
        }
    }

    set(index, val) {
        let found = this.get(index)
        if(!found) {
            found.val = val;
            return true
        }
        return false
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index == 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let before = this.get(index - 1)
        let after = before.next;
        before.next = newNode, newNode.prev = before
        newNode.next = after, after.prev = newNode
        this.length++
        return true   
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false
        if(index == 0) return this.shift()
        if(index === this.length) this.pop();
        let remove = this.get(index)
        remove.prev.next = remove.next
        remove.next.prev = remove.prev
        remove.next = null;
        remove.prev = null;
        this.length--
        return remove
    }
}

let first = new DoublyLinkedList()
first.push(99)
first.push(100)
first.push(101)
first.push(102)
first.push(103)
first.push(104)
first.insert(1, 112)
console.log(first)
