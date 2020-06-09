/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 * 时间复杂度O(N2) N为s的长度，对于每个字符要进行一次union操作和find操作，通过路径压缩之后查询操作为O(1)复杂度，但是合并操作复杂度O(N)
 * 空间复杂度O(N)
 * 
 */

var smallestStringWithSwaps = function(s, pairs) {
    // 思路：
    // 用并查集找到所有可交换位置的集合，排序每个集合内的字符，再插回原字符串。
    
    // 例如s = "dcabfge", pairs = [[0,3],[1,2],[0,2],[4,6]]
    
    // 那么可交换的集合有[0,1,2,3]、[4,6]
    
    // 排序后的字符分别为'abcd', 'ef'
    
    // 插回原字符串最终s = "abcdegf"
        
        let parent = []
        //初始化并查集，所有指向自己
        for(let i = 0;i<s.length;i++){
            parent[i] = i
        }
    
        function find(x){
            while(parent[x] !== x){
                //路径压缩
                parent[x] = parent[parent[x]]
                x = parent[x]
            }
            return x
        }
        //connect两个点
        for (let pair of pairs){
            //把pair里面靠后节点的根节点和靠前的点的根节点进行合并
            parent[find(pair[1])] = find(pair[0])
        }   
        //把parent里面非根节点的值全部换成根节点
        let arr = parent.map(find)
        
        let map = new Map()
    
        for(let i = 0;i<arr.length;i++){
            let rootNode = arr[i]
            if(!map.has(rootNode)){
                map.set(rootNode,[])
            }
            map.get(rootNode).push(i)
        }
        //建立一个映射的map，键名为根节点，键值为连通该根节点的所有子节点的排序
        //Map { 0 => [ 0, 1, 2, 3 ], 4 => [ 4, 6 ], 5 => [ 5 ] }
        
    
        let res = s.split('')
        
        for(let [key,val] of map){
            let charArray = val.map(i => s[i]) //将数组里面的索引变成字符串里的字符,[0,1,2,3] => [ 'd', 'c', 'a', 'b' ]
            //因为[0,1,2,3]是连通的，意味着他们之间可以互相交换，那么对他们进行排序就意味着交换。
             //将数组里面的字符按字母表顺序进行排序[ 'd', 'c', 'a', 'b' ] =>[ 'a', 'b', 'c', 'd' ]
            charArray.sort((a,b) => a.localeCompare(b)) 
           console.log(charArray)
            for(let i = 0;i<charArray.length;i++){
                //把原来的字符根据索引一一映射到已经排序的字符上
                //val = [0,1,2,3],charArray=['a','b','c','d']
                //res[val[i]] = charArray[i] => res[0] = a
                //val = [4,6],charArray=['e','f']
                //res[val[i]] = charArray[i] => res[4] = e
            
                res[val[i]] = charArray[i]
            }
          
        }
        return res.join('')
    };