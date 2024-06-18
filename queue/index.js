class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    peek() {
        return this.head;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    dequeue() {
        const newNode = new Node();
        if (this.head === this.tail) {
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.length--;
            return this;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

