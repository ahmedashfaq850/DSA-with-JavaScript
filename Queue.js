class Queue {
    constructor(){
        this.items = [] // initialize empty Queue
        this.count = 0; // initialize counter 
    }

    // Create EnQueue Function 
    EnQueue(element){
        this.items[this.count] = element;
        console.log(`${element} added in the Queue at position: ${this.count}`)
        this.count += 1;
    }

    // Create DeQueue Function
    DeQueue(){
        let delElement = this.items[0]
        this.items = this.items.slice(1, this.items.length +1)
        console.log(`${delElement} is removed from the Queue`)
        this.count -=1
    }

    // Create Peek Function that return Top first element in the Queue
    Peek(){
        return `${this.items[0]} is the first top element in the Queue`;
    } 

    // Create Queue Size Function
    getSize(){
        return `The Queue size is ${this.items.length}`
    }

    // Create a function that check Queue is empty or not
    isEMpty(){
        return `Queue is Empty: ${this.getSize===0}`;
    }


}




const queueObj = new Queue();

// Enqueue 
queueObj.EnQueue('Ahmed')
queueObj.EnQueue('Hassan')
queueObj.EnQueue('Bilal')
queueObj.EnQueue('Zuhad')
console.log(queueObj.items)
queueObj.DeQueue()
console.log(queueObj.items)
console.log(queueObj.Peek())
console.log(queueObj.getSize())
console.log(queueObj.isEMpty())
queueObj.DeQueue()
console.log(queueObj.items)
console.log(queueObj.Peek())
console.log(queueObj.getSize())
console.log(queueObj.isEMpty())