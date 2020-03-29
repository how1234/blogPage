function SetImp(){
    let items = {}
    this.add = (value) => {
        if (!items.hasOwnProperty(value)){
            items[value] = value
            return true
        }else{
            return false
        }
    }
    this.delete = (value) =>{
        if(items.hasOwnProperty(value)){
            delete items[value]
            return true
        }else{
            return false
        }
    }
    this.has = (value) => {
        return items.hasOwnProperty(value)
    }
    this.clear = () => {
        items = {}
    }
    this.size = () =>{
        return Object.keys(items).length
    }
    this.values = () => {
        let values = []
        for (var element of Object.keys(items)){
            values.push(items[element])
        }
        return values
    }
}

var set = new SetImp()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)

console.log(set.values())
console.log(set.has(5))
console.log(set.has(6))
set.delete(5)
console.log(set.values())

console.log(set.size())
set.clear()
console.log(set.values())
console.log(set.size())