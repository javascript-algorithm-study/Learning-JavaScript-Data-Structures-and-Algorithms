/**
 * LinkedList
 * @constructor
 */
const LinkedList = function () {
    const Node = function (element) {
        this.element = element;
        this.next = null;
    };

    /**
     * private 멤버
     * (외부에서 건드릴수 없게 해야 한다.)
     */
    let length = 0;
    let head = null;

    this.append = function (element) {
        const node = new Node(element);
        let current;
        if (!head) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            length++;
        }
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.insert = function (position, element) {
        const node = new Node(element);
        let current = head;
        let previous;
        let index = 0;
        if (position > -1 || position < length) {
            return true;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
            }
            return true;
        } else {
            return false;
        }
    };

    this.toString = function () {
        let current = head;
        let string = '';
        while (current.next) {
            string += current.element;
            current = current.next;
        }
        return string;
    };

    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current.next) {
            if (current.element !== element) {
                current = current.next;
                index++;
            } else {
                return index;
            }
        }
        return -1;
    };

    this.remove = function (element) {
        let position = this.indexOf(element);
        return this.removeAt(position);
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return Object.assign({}, head);
    };
};

/**
 * Double LinkedList
 * @constructor
 */
const DoubleLinkedList = function () {
    const Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;
};
