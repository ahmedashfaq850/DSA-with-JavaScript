// Node Class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linklist Class
class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert node at the end of the list
    AddNode(data){
        let node = new Node(data);
        let current;
    
        // check if the head is empty set this node as a head otherwise addin the end
        if (this.head == null){
            this.head = node
            //console.log(this.head)
        }
        else{
            current = this.head;
            // Now iterate list till the last node
            while (current.next){
                current = current.next;
            }
            // add node 
            current.next = node
        }
            this.size++;
    }

    // Show LinkList
    PrintList(){
        let curr = this.head;
        let str = "";
        while (curr){
            str += curr.data + " -> ";
            curr = curr.next
        }
        console.log(str)
    }
}




const li = new LinkList();
li.AddNode(10)
li.AddNode(20)
li.AddNode(30)
li.PrintList()
