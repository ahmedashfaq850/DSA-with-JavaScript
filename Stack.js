class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    // Create Push function that add element in the stack 
    Push(element){
        this.items[this.count] = element;
        console.log(`${element} added into position ${this.count}`)
        this.count +=1
        // return the position where element added
        return this.count - 1
    }

    // Create pop function that remove element at the top from the stack

    Pop(){
        if (this.count === 0){return undefined}
        let delElement = this.items[this.count - 1]
        this.items = this.items.slice(0,delElement -1)
        console.log(`${delElement} removed from stack`)
        this.count -= 1
        return delElement
    }
    // Check top Element in stack
    PeekElement(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count -1]
    }

    // Stack is Empty or not
    isEmpty(){
        if (this.items.length === 0){
            console.log("Stack is Empty") 
        }
        else {console.log("Stack is not Empty")}
    }
}



const stack = new Stack()
stack.Push(1)
stack.Push(2)
stack.Push(3)
console.log("Stack is: ",stack.items)
stack.Pop()
console.log("Stack is: ",stack.items)
stack.PeekElement()
stack.Pop()
console.log("Stack is: ",stack.items)
stack.PeekElement()
stack.isEmpty()
stack.Pop()
console.log("Stack is: ",stack.items)
stack.isEmpty()






