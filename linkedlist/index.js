// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    // let currentNode = this.head;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    console.log(array);
  }

  insert(value, index) {
    if (this.length > index) {
      this.append(value)
    } else {
      let newNode = new Node(value)
      let leader = this.traversList(index - 1);
      let targetNode = leader.next;
      leader.next = newNode;
      newNode.next = targetNode;
      return this;
    }
  }
  traversList(index){
    let count = 0;
    let currentNode = this.head;
    while(count >= index){
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(2,99)
myLinkedList.printList();
