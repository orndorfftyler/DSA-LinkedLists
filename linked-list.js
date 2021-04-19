// Creating a singly linked list

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, bNode) {
        if (this.head === null || this.head == bNode) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== bNode) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
            tempNode = tempNode.next
            tempNode.next = bNode
        }
    }

    insertAfter(item, aNode) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode !== aNode) {
                tempNode = tempNode.next;
            }
            let temp = tempNode.next
            tempNode.next = new _Node(item, null);
            
            tempNode = tempNode.next
            tempNode.next = temp
        }
    }

    
    insertAt(item, n) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            for (let i = 0; i < n; i++) { // assuming linked list is zero indexed
                tempNode = tempNode.next;
            }
            this.insertBefore(item, tempNode)
        }
    }

    find(item) { 
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }


}

function main() {
    let SLL = new LinkedList
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    return SLL

}

let SLL = main();

SLL.insertLast('Tauhida')
SLL.remove('Husker')

SLL.insertBefore('Athena', SLL.find('Boomer'))

SLL.insertAfter('Hotdog', SLL.find('Helo'))

SLL.insertAt('Kat', 2)

//console.log(SLL.find('Athena'));
SLL.remove('Tauhida')


// Supplemental functions for a linked list

function size(list) {
    if (!list.head) {
        return 0
    }
    let tempNode = list.head;
    let count = 1;
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
        count++
    }

    return count // assuming linked list is zero indexed
}

//console.log(size(SLL))

function display(list) {
    let tempNode = list.head;
    let arr = [];
    while (tempNode.next !== null) {
        let obj = {
            value: tempNode.value,
            next: tempNode.next.value
        };
        tempNode = tempNode.next;
        arr.push(obj)
    }
    arr.push({
        value: tempNode.value,
        next: null
    })

    return arr 
}

//console.log(display(SLL))

function isEmpty(list) {return !list.head}

//console.log(isEmpty(SLL))

function findPrevious(list, node) {
    if (node === list.head) {
        return null
    }
    else {
        let tempNode = list.head;
        while (tempNode.next !== node) {
            tempNode = tempNode.next;
        }
        return tempNode
    }
}

//console.log(findPrevious(SLL, SLL.find('Hotdog') ))

function findLast(list) {
    let tempNode = list.head;
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    return tempNode
}

//console.log(findLast(SLL))

// mystery program
// this program looks like it is looking for and fixing loops in the linked list 
// formed by nodes that link to earlier nodes 

// reverse a linked list

function rev(list) {
    let current = list.head;
    let next = null;
    let prev = null;

    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    list.head = prev

}

//rev(SLL)
//console.log(display(SLL))

// 3rd from the end

function third(list) {
    let tempNode = list.head;
    let count = 0;
    while (tempNode.next.next.next !== null) {
        tempNode = tempNode.next;
        count++
    }

return tempNode // assuming linked list is zero indexed
}

//console.log(third(SLL))

// middle of a list

function mid(list) {
    if (list.head === null) {
        return null
    }

    let temp = size(list)
    if (temp % 2 == 0) {
        temp /= 2
        temp += 1
    } else {
        temp /= 2
        temp += .5
    }
    let tempNode = list.head;
    for (let i = 1; i < temp; i++) { // assuming linked list is zero indexed
        tempNode = tempNode.next;
    }
    return tempNode
    
}
/*
console.log(`size = ${size(SLL)}`)
console.log(display(SLL))
console.log(mid(SLL))
*/

// Cycle in a list

function cycleList(list) {
    let current = list.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//cycleList(SLL)
//console.log(display(SLL))

