function FirstNotRepeatingChar(str)
{    
    let map = {}
    for(let i = 0;i< str.length;i++){
        if(!map[str[i]]){
            map[str[i]] = [i,1]
        }else{
            let value = map[str[i]]
            value[1] = value[1] + 1
            map[str[i]] = value
        }
        
    }
    console.log(JSON.stringify(map))
    
    for(let key of Object.keys(map)){
      
        if(map[key][1] === 1){
            return map[key][0]
        }
    }
    return -1
}

console.log(FirstNotRepeatingChar('googlle'))