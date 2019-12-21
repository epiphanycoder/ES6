class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0
    }

    insertAtBegining(data) {
        const node = {
            data: data,
            next: null
        }
        const tmpNode = this.head
        this.head = node
        this.head.next = tmpNode
        this.count++
        if (this.count === 1) {
            this.tail = this.head
        }
    }

    insertAtEnding(data) {
        const node = {
            data: data,
            next: null
        }
        if (this.count === 0) {
            this.head = node
        }
        else {
            this.tail.next = node
        }
        this.tail = node
        this.count++
    }

    insertInMiddle(data, position) {
        if (!position || position < 0) {
            throw new Error('position cannot be negative or undefined')
        }
        else if (position === 0) {
            this.insertAtBegining(data)
        }
        else if (position >= this.count - 1) {
            this.insertAtEnding(data)
        }
        else {
            const node = {
                data: data,
                next: null
            }
            var p = this.head, q, k = 0
            while (p !== null && k < position) {
                k++
                q = p
                p = p.next
            }
            q.next = node
            node.next = p
            this.count++
        }
    }

    print() {
        if(this.head == null){
            return;
        }
        let node = this.head;
        while(node != null){
            console.log(node.data);
            node = node.next;
        }
    }

    deleteFromBegining() {
        if (this.count === 0) return
        this.head = this.head.next
        this.count--
        if (this.count === 0) {
            this.tail = null
        }
    }

    deleteFromEnding() {
        if (this.count === 0) {
            return
        }
        else if (this.count === 1) {
            this.tail = null
            this.head = null
        }
        else {
            let p = this.head
            while (p.next !== this.tail) {
                p = p.next
            }
            p.next = null
            this.tail = p
        }
        this.count--
    }

    deleteFromMiddle(position) {
        if (position < 0) {
            throw Error('Position cannot be negative')
        }
        else if (position === 0) {
            this.deleteFromBegining()
        }
        else if (position === this.count - 1) {
            this.deleteFromEnding()
        }
        else {
            let p = this.head, k = 0, q
            while (p !== null && k < position) {
                k++
                q = p
                p = p.next
            }
            q.next = p.next
            this.count--
        }
    }
}

const linkList = new LinkedList();
[1,2,3,4].forEach(i =>{
    linkList.insertAtBegining(i);
    linkList.print();
    console.log('---');
});
