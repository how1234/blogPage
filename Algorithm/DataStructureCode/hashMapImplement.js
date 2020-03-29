function HashMapImp(){
    let table = []
    var hashFunction = function (key){
        var hash = 0;
        for (var i=0;i<key.lengh;i++){
            hash += key.charCodeAt(i)

        }
        return hash%37
    }

    this.put =(key,value) =>{
        var position = hashFunction(key)
        table[position] = value
    }
    this.remove = (key) =>{
        var position = hashFunction(key)
        table[position] = undefined
    }

    this.get = (key) => {
        return table[hashFunction(key)]
    }
    
}