function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  this.append = function (element) {
    // 새로운 노드 추가
    var node = new Node(element),
      current;
    // head가 없으면 즉 아무것도 없는 상태
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 처음부터 시작해서 마지막 까지 검색
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    length++;
  };

  this.removeAt = function (position) {

    // position이 유효한 위치인지 확인
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      // 첫번째 원소 삭제
      if (position === 0) {
        head = current.next;
      } else {
        // 해당 position을 찾을때까지 검색
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // previoues - current - next 에서 previous - next로 변경
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      // 조건 충족하지 않으면 null 반환
      return null;
    }
  }

  this.insert = function (position, element) {
    // 유효범위체크
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      // 첫 번째로 추가
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        // 해당 position에 추가
        while (index++ < position) {
          previous = current;
          current = current.next
        }

        // 가운데(previous, current 사이) node, node.next가 삽입
        node.next = current
        previous.next = node;
      }
      length++;

      return true;
    } else {
      return false;
    }
  }

  this.toString = function () {
    var current = head,
      string = '';

    // 마지막 null이 될때까지
    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }

  this.indexOf = function (element) {
    var current = head,
      index = 0; // question 0이어야 되지 않나?

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.getHead = function () {
    return head
  }
}

var list = new LinkedList();
console.log(list.append(10));
console.log(list.append(15));
console.log(list.isEmpty());
console.log(list.indexOf(10));
console.log(list.toString());

function DoubleLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }


  var length = 0;
  var head = null;
  var tail = null;

  this.append = function (element) {
    // 새로운 노드 추가
    var node = new Node(element),
      current;
    // head가 없으면 즉 아무것도 없는 상태
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 처음부터 시작해서 마지막 까지 검색
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    length++;
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      // 첫번째 원소 삭제
      if (position === 0) {
        head = current.next;
        // 원소가 1개라면 head, tail 모두 null
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        // 마지막 원소일때
        current = tail; // 마지막
        tail = current.prev; // 마지막을 마지막 prev대입
        tail.next = null; // tail next는 null
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      null;
    }
  }

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;


      if (position === 0) {
        // 맨처음에 삽입하는데 리스트의 아무것도 없을때
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        // 맨 마지막에 삽입할때
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        // 이제 중간 어디든
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // previous - node - current 순서로 맞추기
        node.next = current; // node.next 는 current
        previous.next = node
        current.prev = node;
        node.prev = previous
      }
      length++;
      return true;
    } else {
      return false;
    }
  }

  this.toString = function () {
    var current = head,
      string = '';

    // 마지막 null이 될때까지
    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }

  this.indexOf = function (element) {
    var current = head,
      index = 0; // question 0이어야 되지 않나?

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.getHead = function () {
    return head
  }
}

module.exports = LinkedList