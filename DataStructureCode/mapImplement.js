function MapImp() {
    let items = {}

    this.set = (key,value) =>{
        items[key] = value
        return true
    }
    this.delete =(key) =>{
        if(items.hasOwnProperty(key)){
            delete items[key]
        }
        return true
    }

    this.has = (key) => {
        return items.hasOwnProperty(key)
    }

    this.get = (key) => {
        return items[key]
    }
    this.clear = () => {    
        items = {}
    }
    this.size = () =>{
        return Object.keys(items).length
    }

    this.keys = () =>{
        return Object.keys(items)
    }

    this.values = () =>{
        return Object.values(items)
    }
}

var map  = new MapImp()

map.set("1","First element")
map.set("2","Second element")
map.set("3","Third element")

console.log(map.values())
console.log(map.keys())
map.delete("1")

console.log(map.values())
console.log(map.keys())


console.log(map.get("4"))

console.log(map.get("3"))

