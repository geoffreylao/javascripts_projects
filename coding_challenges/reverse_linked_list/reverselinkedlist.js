// Create a Node class and a LinkedList class with these methods:
// insertFirst(data)
// insertLast(data)
// getfirst()
// getLast()
// Building two classes from scratch that have methods
// Class will create instances of LinkedList to test the reverse linked list functionality
// Handle all possible errors

// Start with Node class. Has data property and next property.
// The next property acts as a pointer that will direct us to the next node in our linked list if it exists or null
function Node(data){
    this.data = data;
    this.next = null;
}

function reverse(head){
    let node = head;
    let previous;
    let tmp;

    while (node){
        // save next before we overwrite node.next
        tmp = node.next;

        // reverse pointer
        node.next = previous

        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
}

console.log(reverse[1,2,3,4,5]);