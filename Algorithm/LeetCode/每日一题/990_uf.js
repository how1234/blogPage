/**
 * @param {string[]} equations
 * @return {boolean}
 * 时间复杂度O(N)，3次遍历
 * 空间复杂度O(N)
 */
var equationsPossible = function(equations) {
    //并查集

    //根据“==号”来建立并查集，然后通过“！=”检查两个数字是否处于一个并查集

    let parent = []
    //初始化并查集
    for(let el of equations){
        let firstChar = el[0]
        let secondChar = el[3]
        parent[firstChar] = firstChar
        parent[secondChar] = secondChar
    }

    function find(x){
        
        while(parent[x] !== x){
            parent[x] = parent[parent[x]]
            x = parent[x]
        }
       
        return x
    }
    function union(p,q){
        let rootP = find(p)
        let rootQ = find(q)
        //q点的根节点的父节点变成p点的根节点
        parent[find(q)] = find(p)
    }


    for(let el of equations){
        let firstChar = el[0]
        let secondChar = el[3]
        let operator = el[1] + el[2]

        if(operator == "=="){
            union(firstChar,secondChar)
        }
    }

    
    for(let el of equations){
        let firstChar = el[0]
        let secondChar = el[3]
        let operator = el[1] + el[2]

        if(operator == "!="){
            if(find(firstChar) === find(secondChar)){
                return false
            }
        }
    }
    return true
};