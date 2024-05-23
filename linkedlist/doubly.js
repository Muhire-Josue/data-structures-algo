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
        return this;
    }

    append(value){
        const newNode = new DoublyNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
console.log(myLinkedList);
// myLinkedList.prepend(1);
// myLinkedList.insert(99, 3);
// myLinkedList.remove(4);
