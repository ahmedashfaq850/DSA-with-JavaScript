// create a hash function that convert string into index
function hashStringToInt(key, table_size){
    let hash = 45; 
    for (let i=0; i<key.length; i++){
        hash += key.charCodeAt(i)
    }
    return hash % table_size
}

class HashTable{
    constructor(){
        this.table = new Array(3) // specify the array length
        this.size = 0
    }

    // setItem funnction
    setItem = (key, value) =>{
        this.size++;
        const idx = hashStringToInt(key, this.table.length)
        if (this.table[idx]){
            this.table[idx].push([key, value])
        }else{
            this.table[idx] = [[key,value]]
        }
    }

    // getItem function
    getItem = (key)=>{
        const idx = hashStringToInt(key, this.table.length)
        if (!this.table[idx]){
            return null;
        }
        return this.table[idx].find(x => x[0] === key)[1];
    }

    removeItem = (key) =>{
        const idx = hashStringToInt(key, this.table.length)
        if (this.table[idx] && this.table[idx].length){
            for (let i=0; i< this.table.length; i++){
                if (this.table[idx][i][0] === key){
                    console.log(this.table[idx].splice(i,1))
                    this.table[idx].splice(i,1);
                    this.size--;
                    return true
                }

            }
        }
        else{
            return false
        }
    }
}

const table = new HashTable();
table.setItem('name1', 'ahmed')
table.setItem('name2', 'hasan')
console.log(table.getItem('name2', 'ahmed'))
console.log(table.table)
console.log(table.size)
table.removeItem('name1')
console.log(table.table)
console.log(table.size)