
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// // Creating a linked list using this class

// const head = new Node(12);

// head.next = new Node(99);

// head.next.next = new Node(37);

// // Traversing a Linked List

// let current = head; // pointer that moves through the linked list

// while(current !== null) {
//     console.log(current.data);
//     current = current.next;
// }

// LinkedList class

const head = Symbol("head"); // symbol property used instead of a string property to make it clear that this property is not intended to be modified outside the class

class LinkedList {
    constructor() {
        this[head] = null;
    }

    // adding new data

    add(data){
        
        // create a new node
        const newNode = new Node(data);

        // special case: no items in the list yet
        if(this[head] === null){

            // just set the head to the new node
            this[head] = newNode;

        } else {

            // start out by looking at the first node
            let current = this[head];

            //follow 'next' links until you reach the end
            while(current.next !== null) {
                current = current.next;
            }

            // assign the node into the 'next' pointer
            current.next = newNode;
        }
    }

    // retrieving data from the list

    get(index) {

        // ensure 'index' is a positive value
        if(index > -1){

            // the pointer to use for traversal
            let current = this[head];

            // used to keep track of where in the list you are
            let i = 0;

            // traverse the list until you reach either the end or the index
            while ((current !== null) && (i < index)){
                current = current.next;
                i++;
            }

            // return the data if 'current' isn't null
            return current !== null ? current.data : undefined; // ?(if) true :(or) false
        } else {
            return undefined;
        }
    }

    // removing data from the list

    remove(index) {

        // special cases: empty list of invalid 'index'
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError('Index ${index} does not exitst in the list');
        }

        // special case: removing the first node
        if(index === 0) {
            
            // temporary store the data from the node
            const data = this[head].data;

            // just replace the head with the next node in the list
            this[head] = this[head].next;

            // return the data at the previous head of the list
            return data;
        }

        // pointer use to traverse the list
        let current = this[head];

        // keeps track of the node before current in the loop
        let previous = null;

        // used to track how deep into the list you are
        let i = 0;

        // same loops as in 'get()'
        while ((current !== null ) && (i < index)){

            // save the value of current
            previous = current;

            // traverese to the next node
            current = current.next;

            // increment the count
            i++;
        }

        // if node was found, remove it
        if(current !== null){

            // skip over the node to remove
            previous.next = current.next;

            // return the value that was just removed from the list
            return current.data;
        }

        // if node wasn't found, throw an error
        throw new RangeError('Index ${index} does not exitst in the list');
    }

    // set head
    set(head){
        this.head = head;
        return this;
    }

    // making the list iterable

    *values(){ // '*' indicates generator method
        
        let current = this[head];

        while(current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator](){
        return this.values();
    }

    reverse() {
        //Write your code here
        let previousNode = null;
        let currentNode = this[head]; // The current node
        let nextNode = null; // The next node in the list
      
        //Reversal
        while (currentNode != null) {
          nextNode = currentNode.next;
          currentNode.next = previousNode;
          previousNode = currentNode;
          currentNode = nextNode;
        }
      
        //Set the last element as the new head node
        this[head] = previousNode;
      }
}



const list = new LinkedList();
list.add("a");
list.add("b");
list.add("c");

// print out all items
for(const letter of list){
    console.log(letter);
}

list.reverse();

for(const char of list){
    console.log(char);
}

