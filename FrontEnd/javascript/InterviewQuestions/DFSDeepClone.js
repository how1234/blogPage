function isObj(obj){
    return typeof obj === 'object' && obj != null
}

//不考虑环
function deepClone_Dfs(obj){
    
    let tempObj = Array.isArray(obj) ? [] : {}

    for(let key in obj){
        tempObj[key] = isObj(obj[key]) ? deepClone_Dfs(obj[key]) : obj[key]
    }

    return tempObj
}

//考虑环
function deepClone_Dfs(obj,hash = new Map()){
    
    if(hash.has(obj)) return hash.get(obj)

    let tempObj = Array.isArray(obj) ? [] : {}
    hash.set(obj,tempObj)
    for(let key in obj){
        tempObj[key] = isObj(obj[key]) ? deepClone_Dfs(obj[key],hash) : obj[key]
    }

    return tempObj
}
console.log(0.1+0.2)