var head = null;
var tail = null;
var length = 0;


function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DoublyLinkedList() {

    this.insert = function (position, item) {

        var node = new Node(item);
        var current = head;
        var previous;
        var index = 0;
        if (position === 0) {

            if (head === null) {
                head = node;
                tail = node;
            } else {

                node.next = current;
                current.previous = node;
                head = node;

            }

        } else if (position === length) {

            current = tail;
            current.next = node;
            node.previous = current;
            tail = node;

        } else {

            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = node;
            node.previous = previous;
            node.next = current;
            current.previous = node;


        }

        length++;

    }

    this.print = function () {

        var current = head;
        while (current.next) {
            console.log(current.element);
            current = current.next;
        }
        console.log(current.element)
    }


}

var ss = new DoublyLinkedList();
ss.insert(0, 10);
ss.insert(1, 20);
ss.insert(2, 30);
ss.insert(3, 40);
ss.insert(3, 100);
ss.print();