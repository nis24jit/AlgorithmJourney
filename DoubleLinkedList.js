function DoublyLinkedList() {
    var Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null; //NEW
    };
    var length = 0;
    var head = null;
    var tail = null; //NEW


    this.insert = function(position, element){

       var current = head,
            previous,
            index = 0;
        var node = new Node(element);
        if(position === 0){

            if(head ===null){
                head = node;
                tail = node;
            }else{

                node.next = current;
                current.prev = node;
                head = node;


            }

        }else if(position === length){

            current = tail;
            current.next = node;
            node.prev = current;
            tail = node;


        }else{

            while(index++ < position){

                previous = current;
                current = current.next;

            }

            node.next = current;
            previous.next = node;
            node.prev = previous;
            current.prev = node;

        }
        length++;
    }



    this.print = function(){

        var current = head;
        while(current.next!==null){
            console.log(current.element);
            current = current.next;
        }
        console.log(current.element);

    }


//methods here
}



var dd = new DoublyLinkedList();

dd.insert(0,10);
dd.insert(1,20);
dd.insert(2,30);
dd.insert(2,100);
dd.insert(3,40);
dd.print();
