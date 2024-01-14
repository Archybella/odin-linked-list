import Node from "./node.js";

// LinkedList.js
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) {
                return current;
            }

            count++;
            current = current.nextNode;
        }

        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = null;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        if (previous) {
            previous.nextNode = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        let count = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return count;
            }

            count++;
            current = current.nextNode;
        }

        return null;
    }

    toString() {
        let result = '';
        let current = this.head;

        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }

        result += 'null';
        return result;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            return false;
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
        } else {
            let count = 0;
            let current = this.head;
            let previous = null;

            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }

            newNode.nextNode = current;
            previous.nextNode = newNode;

            if (!current) {
                this.tail = newNode;
            }
        }

        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }

        if (previous) {
            previous.nextNode = current.nextNode;
            if (!previous.nextNode) {
                this.tail = previous;
            }
        } else {
            this.head = current.nextNode;
            if (!this.head) {
                this.tail = null;
            }
        }

        return current;
    }
}

