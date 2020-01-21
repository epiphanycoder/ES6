class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0;
    }
    //insert at First
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size ++;
    }
    //insert at Last
    insertLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let cur = this.head;
            while(cur.next){
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++;
    }
    //insert at index
    insertAt(data, index){
        if(index > 0 && index > this.size) {
            return;
        }
        if(index == 0){
            this.insertFirst(data);
        }else {
            let prev, cur;
            const newNode = new Node(data);
            let count = 0;
            cur = this.head;

            while(count < index) {
                prev = cur;
                count++;
                cur = cur.next;
            }
            newNode.next = cur;
            prev.next = newNode;
            this.size++;
        }
    }
    //get at index
    getAt(index){
        let cur = this.head;
        let count = 0;

        while(cur){
            if(count === index){
                console.log('at index ', cur.data);
            }
            count++;
            cur = cur.next;
        }
        return;
    }
    //removeAt
    removeAt(index) {
        if(index > 0 && index > this.size){
            return;
        }
        let cur = this.head, prev;
        let count = 0;
        if(index == 0){
            this.head = cur.next;
        }else{
            while(count < index) {
                prev = cur;
                cur = cur.next;
                count++;
            }
            prev.next = cur.next;
        }
        this.size --;
    }
     //clearList
     clearList(){
        this.head = null;
        this.size = 0;
    }
    //printList
    printLinkedList(){
        if(!this.head){
            return;
        }
        let cur = this.head;

        while(cur){
            console.log(cur.data);
            cur =  cur.next;
        }
    }
}

const l1 = new LinkedList();
l1.insertFirst(100);
l1.insertFirst(200);
l1.insertLast(400);
l1.insertAt(390, 2);
l1.getAt(2);
l1.removeAt(2);
/////////////////////
l1.printLinkedList();
////////////////////