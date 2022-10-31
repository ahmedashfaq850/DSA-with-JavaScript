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


    InsertAt(data, index){
        if (index < 0 || index > this.size){
            console.log("Please enter a valid index")
        }
        else {
            let node = new Node(data);
            let curr, prev;

            curr = this.head;

            if (index == 0){
                node.next = this.head
                this.head = node
            }
            else {
                curr = this.head;
                let temp = 0;

                while (temp < index){
                    temp++;
                    prev = curr; //40
                    curr = curr.next //10
                }

                node.next = curr; // 40.next = 10
                prev.next = node // 40.next = 10
            }
            this.size++;
        }
    }


    removeNode(){
        let current = this.head;
        let prev
        while (current.next){
            current = current.next;
            if(current.next !== null){
                prev = current
            }
        }
        prev.next = null;
    }

    removeAtIndex(index){
        let curr = this.head
        let temp=0;
        let prev;
        if (index < 0 || index > this.size){
            console.log("not valid index");
        }
        while (temp < index){ //index 0, 1,2
            temp++;
            prev =  curr//40
            curr = curr.next // 10
        }
        prev.next = curr.next
    }

    // find the index of the data

    indexOf(data){
        let count = 0;
        let current = this.head;

        while (current != null){
            if (current.data === data){
                console.log(count)
            }
            count++;
            current = current.next
        }
        return -1; // not found
    }

     // checks the list for empty
    isEmpty() {
        console.log(this.size == 0);
    }
 
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }

    // Show LinkList
    PrintList(){
        let curr = this.head;
        let str = "";
        while (curr){
            if (curr.next !== null){
                str += curr.data + " -> ";
                curr = curr.next
            }
            else{
                str += curr.data;
                curr = curr.next
            }
        }
        console.log(str)
    }
}




const li = new LinkList();
li.AddNode(10)
li.AddNode(20)
li.AddNode(30)
li.PrintList()
li.InsertAt(40,0)
li.PrintList()
li.InsertAt(40,1)
li.PrintList()
li.InsertAt(60,3)
li.PrintList()
li.InsertAt(70,5)
li.PrintList()
li.AddNode(80)
li.PrintList()
li.indexOf(80)
//li.removeNode()
li.PrintList()
//li.removeNode()
li.PrintList()
//li.removeNode()
li.PrintList()
li.removeAtIndex(2)
li.PrintList()
li.removeAtIndex(4)
li.PrintList()