class MySet {
    constructor(){
        this.set = {};
    }

    addElement(element){
        this.set[element] = element ;
    }

    deleteElement(element){
        delete this.set[element]
    }

    has(element){
        return this.set.hasOwnProperty(element)
    }

    setUnion(arr1, arr2){
        const set1 = new Set(arr1)
        const set2 = new Set(arr2)
        const set = new Set([...set1, ...set2])
        return set
    }


    setIntersection(arr1, arr2){
        arr2 = new Set(arr2)
        const res = new Set(
            [...arr1.filter(element => arr2.has(element))]
        )
        return res;
    }

    setDifference(arr1, arr2){
        arr2 = new Set(arr2)
        const res = new Set(
            [...arr1.filter(element => !arr2.has(element))]
        )
        return res;
    }
}


const setObj = new MySet();
setObj.addElement(1)
console.log(setObj.set)
console.log(setObj.has(1))
setObj.addElement(2)
setObj.addElement(3)
setObj.addElement(4)
setObj.addElement(5)
console.log(setObj.set)
setObj.deleteElement(2)
setObj.addElement(1)
console.log(setObj.set)
console.log(setObj.setUnion(['a', 'b', 'c'],['a', 'b', 'd','e']))
console.log(setObj.setIntersection(['a', 'b', 'c'],['a', 'b', 'd','e']))
console.log(setObj.setDifference(['a', 'b', 'c'],['a', 'b']))
