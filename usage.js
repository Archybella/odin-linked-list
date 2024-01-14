import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(2);
linkedList.prepend(1);
linkedList.append(13);
linkedList.append(8);
linkedList.append(5);
linkedList.append(0);
linkedList.prepend(1);

console.log(linkedList.toString()); // Output: (1) -> (1) -> (3) -> (2) -> (13) -> (8) -> (5) -> (0) -> null

console.log(linkedList.size()); // Output: 8

console.log(linkedList.head()); // Output: Node { value: 1, nextNode: Node { value: 1, nextNode: [Object] } }

console.log(linkedList.tail()); // Output: Node { value: 0, nextNode: null }

console.log(linkedList.at(3)); // Output: Node { value: 2, nextNode: Node { value: 13, nextNode: [Object] } }

console.log(linkedList.pop()); // Output: Node { value: 0, nextNode: null }

console.log(linkedList.toString()); // Output: (1) -> (1) -> (3) -> (2) -> (13) -> (8) -> (5) -> null

console.log(linkedList.contains(5)); // Output: true

console.log(linkedList.find(13)); // Output: 4

linkedList.insertAt(10, 2);
console.log(linkedList.toString()); // Output: (1) -> (1) -> (10) -> (3) -> (2) -> (13) -> (8) -> (5) -> null

console.log(linkedList.removeAt(4)); // Output: Node { value: 2, nextNode: Node { value: 13, nextNode: [Object] } }

console.log(linkedList.toString()); // Output: (1) -> (1) -> (10) -> (3) -> (13) -> (8) -> (5) -> null
