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
                while (index++ < position) {
                    previous = current;
                    current = current.next;
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
 * Dictionary
 * @constructor
 */
module.exports.Dictionary = function () {
    let items = {};

    this.set = function (key, value) {
        items[key] = value;
    };
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function (key) {
        return key in items;
        // return items.hasOwnProperty(key);
    };
    this.get = function (key) {
        return items[key];
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        let length = 0;
        this.keys().forEach((key) => {
            length++;
        });
        return length;
    };
    this.keys = function () {
        return Object.keys(items);
    };
    this.values = function () {
        let values = [];
        this.keys().forEach((key) => {
            values.push(this.get(key));
        });
        return values;
    };
    this.getItems = function () {
        return [...items];
    };
};

/**
 * HashTableSeparateChaining
 * @constructor
 */
const HashTableSeparateChaining = function () {
    const loseLoseHashCode = function (key) {
        let hash = ''
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash += char;
        }
        return hash % 37;
    };

    const ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[ ' + this.key + ' - ' + this.value + ' ]';
        };
    };

    let table = [];

    this.put = function (key, value) {
        const position = loseLoseHashCode(key);
        if (!this.get(key)) {
            table[position] = new LinkedList();
        }
        const valuePair = new ValuePair(key, value);
        console.log('position::', position, '-', valuePair.toString())
        table[position].append(valuePair);
    };
    this.remove = function (key) {
        const position = loseLoseHashCode(key);
        if (table[position]) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };
    this.get = function (key) {
        const position = loseLoseHashCode(key);
        if (table[position]) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };
};

const hashTableSeparateChaining = new HashTableSeparateChaining();

// hashTableSeparateChaining.put('Gandalf', 'gandalf@email.com');
// hashTableSeparateChaining.put('John', 'johnsnow@email.com');
// hashTableSeparateChaining.put('Tyrion', 'tyrion@email.com');
// hashTableSeparateChaining.put('Aaron', 'aaron@email.com111');
// hashTableSeparateChaining.put('Donnie', 'donnie@email.com');
// hashTableSeparateChaining.put('Ana', 'ana@email.com');
// hashTableSeparateChaining.put('Jonathan', 'jonathan@email.com');
// hashTableSeparateChaining.put('Jamie', 'jamie@email.com');
// hashTableSeparateChaining.put('Sue', 'sue@email.com');
// hashTableSeparateChaining.put('Mindy', 'mindy@email.com');
// hashTableSeparateChaining.put('Paul', 'paul@email.com');
// hashTableSeparateChaining.put('Nathan', 'nathan@email.com');


// console.log(hashTableSeparateChaining.get('Aaron'))
//
//
// console.log(hashTableSeparateChaining.remove('Sue'));
// console.log(hashTableSeparateChaining.get('Sue'));
//
// console.log(hashTableSeparateChaining.remove('Sue'));
//
// console.log(hashTableSeparateChaining.remove('Jamie'));
//
// console.log(hashTableSeparateChaining.remove('Donnie'));



