/**
 * @param {number[][]} M
 * @return {number}
 * 时间复杂度O(N2)，没有路径压缩之前 find的复杂度接近O(N)，有路径压缩之后，find的复杂度接近O(1)，所以是访问整个矩阵的时间。
 * 空间复杂度O(N)，parent为n
 */


class UF{   
    
    constructor(n){
        this.count = n //初始化n个节点互相不连通
        this.parent = new Array(n).fill(0)
        
        for(let i = 0;i<n;i++){
            this.parent[i] = i
        }
    }
    find(x){
        //根节点的parent[x] == x
        while(this.parent[x] !== x){
            //路径压缩
            //x的根节点为y，y的根节点为z，相当于x的根节点为z
            this.parent[x] = this.parent[this.parent[x]]
            x = this.parent[x]
        }
        return x
    }
    union(p,q){
        let rootP = this.find(p)
        let rootQ = this.find(q)

        if(rootP === rootQ) return

        //rootP的根节点变成rootQ
        this.parent[rootP] = rootQ
        this.count--
    }
    connected(p,q){
        //看两个节点的根节点是否相等
        return this.find(p) === this.find(q)
    }
    getCount(){
        return this.count
    }
    
}
var findCircleNum = function(M) {

    let uf = new UF(M.length)
    
    for(let i = 0;i<M.length;i++){
        //矩阵是对称的
        for(let j = 0;j<i;j++){
            if(M[i][j] == 1){
                uf.union(i,j)
            }
        }
    }
    return uf.getCount()

   
};