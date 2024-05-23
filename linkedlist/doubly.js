class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length++;
        return this.printList();
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
          array.push(currentNode.value)
          currentNode = currentNode.next
        }
        console.log(array);
      }

    append(value) {
        const newNode = new DoublyNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new DoublyNode(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(value, index) {
        let newNode = new DoublyNode(value);
        let leader = this.traverseToIndex(index - 1);
        let follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        return this.printList();

    }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(99, 2);
// myLinkedList.remove(4);
// console.log(myLinkedList);
