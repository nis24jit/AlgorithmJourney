var head = null;
var length = 0;

function Node(element) {
    this.element = element;
    this.next = null;

}

function LinkedList() {

    this.insert = insert;
    this.removeAt = removeAt;
    this.removeAfterPosition = removeAfterPosition;
    this.removeItemByValue = removeItemByValue;
    this.insertItemAfterValue = insertItemAfterItemValue;
    this.insertAt = insertAt;
    this.print = print;
}

function insert(item) {

    var node = new Node(item);
    var current;
    if (head === null) {
        head = node;
    } else {
        current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    length++;
}


function removeAt(position) {

    if (position > -1 && position < length) {

        var current = head, previous;
        if (position === 0) {
            head = current.next;
        } else {

            for (var i = 0; i < position; i++) {

                previous = current;
                current = current.next;
            }
            previous.next = current.next;

        }


    } else {
        return null;
    }

    length--;
}


function removeAfterPosition(position) {

    var current = head;
    var realLength = length, previous;


    if (position === 0) {
        current.next = null;
    }

    for (var i = 0; i <= position; i++) {

        previous = current;
        current = current.next;
    }

    previous.next = null;

    length = realLength;


}

function insertAt(value, item) {


    var current = head, previous;
    var node = new Node(item);

    if (head.element === value) {

        node.next = current.next;
        head = node;

    } else {

        while (current.element !== value) {

            previous = current;
            current = current.next;
        }
        previous.next = node;
        node = current;

    }


}


function insertItemAfterItemValue(valueAtPos, item) {
    var current = head, after;
    var node = new Node(item);

    if (head.element === valueAtPos) {
        node.next = current.next;
        head.next = node;

    } else {

        while (current.element !== valueAtPos) {
            current = current.next;
        }
        after = current.next;
        current.next = node;
        node.next = after


    }


}


function removeItemByValue(itemValue) {


    var current = head, previous;


    if (head.element === itemValue) {
        head = current.next;
    } else {
        while (current.element !== itemValue) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next
    }


}


function print() {

    var current = head;
    while (current.next) {
        console.log(current.element);
        current = current.next;

    }
    console.log(current.element);
    console.log("length ", length);

}
var s = new LinkedList();
s.insert(10);
s.insert(20);
s.insert(30);
s.insert(50);
s.insertItemAfterValue(30, 40);
s.insertItemAfterValue(30, 40);
s.insertAt(50, 100);

s.print();