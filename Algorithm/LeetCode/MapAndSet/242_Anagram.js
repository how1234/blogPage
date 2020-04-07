var isAnagram = function(s, t) {
    let map = {};
    let map1 = {}
    for (let sChar of s){
        if(sChar in map){
            map[sChar] += 1
        }else{
            map[sChar] =1
        }
    }


    for (let tChar of t){
        if(tChar in map1){
            map1[tChar] += 1
        }else{
            map1[tChar] =1
        }
    }
    
    for(let key of Object.keys(map)){
        if(!map1[key] || map1[key] !== map[key]){
            return false
        }
    }

    for(let key of Object.keys(map1)){
        if(!map[key] || map[key] !== map1[key]){
            return false
        }
    }
    return true
};


var isAnagram = function(s, t) {
    let arr = new Array(26).fill(0)
    let arr1 = new Array(26).fill(0)

    for (let sChar of s){
        let code = sChar.charCodeAt(0) - 'a'.charCodeAt(0)
        arr[code] += 1
    }

     for (let tChar of t){
        let code = tChar.charCodeAt(0) - 'a'.charCodeAt(0)
        arr1[code] += 1
    }
    for (let i = 0;i<arr.length;i++){
        if(arr[i] !== arr1[i]){
            return false
        }
    }
    return true
};