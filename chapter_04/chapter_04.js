/**
 * Queue
 * @constructor
 */
module.exports.Queue = function () {
    let items = [];

    this.dequeue = function () {
        return items.shift();
    };
    this.enqueue = function (item) {
        items.push(item);
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
    this.size = function () {
        return items.length;
    };
    this.print = () => {
        console.log(items.toString());
    };
};

/**
 * priorityQueue
 * : 넣을때 우선순위를 비교해 정렬한다.
 */
const PriorityQueue = function () {
    let items = [];

    const Item = function (value, priority) {
        this.value = value;
        this.priority = priority;
    };

    this.enqueue = function (value, priority) {
        const item = new Item(value, priority);

        if (this.isEmpty()) {
            items.push(item);
        } else {
            let isAdded = false;

            for (let i = 0; i < items.length; i++) {
                if (items[i].priority < item.priority) {
                    items.push(item);
                    isAdded = true;
                    return;
                } else {
                    /** 우선순위가 낮거나 같으면 pass */
                }
            }

            if (!isAdded) { /** items의 제일 후순위 객체와 우선순위가 같을 경우 */
                items.push(item);
            }
        }
    };

    // 이하 Queue와 동일
    this.dequeue = function () {
        return items.shift();
    };
    this.enqueue = function (item) {
        items.push(item);
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
    this.size = function () {
        return items.length;
    };
    this.print = () => {
        console.log(items.toString());
    };
};

let priorityQueue = new PriorityQueue();

// priorityQueue.enqueue('Jhon', 2);
// priorityQueue.enqueue('Jack', 1);
// priorityQueue.enqueue('Camila', 1);
// priorityQueue.print();

/**
 * Linear Queue
 * @param names
 * @param num
 * @returns {Queue}
 */
// const hotPotato = function (names, num) {
//     let queue = new Queue();
//     for (let i = 0; i < names.length; i++) {
//         queue.enqueue(names[i]);
//     }
//     while (queue.size() > 1) {
//         let loser = '';
//         for (let i = 0; i < num; i++) {
//             queue.enqueue(queue.dequeue());
//         }
//         loser = queue.dequeue();
//         console.log('this loser :: ', loser);
//     }
//     return queue.dequeue();
// };

const names = ['Jhon', 'Jack', 'Camilia', 'Ingrid', 'Carl'];
// const winner = hotPotato(names, 7);
// console.log('[winner] :: ', winner);
