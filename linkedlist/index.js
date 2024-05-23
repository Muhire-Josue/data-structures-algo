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

class Node {
  constructor(value) {
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
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
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

  insert(value, index) {
    if (this.length <= index || this.length === 0) {
      console.log('YES')
      return this.append(value)
    }
    let newNode = new Node(value)
    let leader = this.traverseToIndex(index - 1);
    let targetNode = leader.next;
    leader.next = newNode;
    newNode.next = targetNode;
    this.length++;
    return this.printList();
  }
  remove(index){
    if (this.length < index) {
      console.log('INDEX OUT OF ORDER')
      return null;
    }
    if(index === 0) {
      let targetNode = this.head;
      let nxtNode = targetNode.next;
      this.head = nxtNode;
      this.length--;
      return this.printList();
    }
    if(index === this.length) {
      let prevNode = this.traverseToIndex(index - 1);
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      // console.log('===>>', prevNode)
      return this.printList();
    }
    let prevNode = this.traverseToIndex(index - 1);
    let targetNode = prevNode.next;
    let nxtNode = targetNode.next;
    prevNode.next = nxtNode;
    this.length--;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(99, 3);
myLinkedList.remove(2);
