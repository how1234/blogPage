function ps(n){
    let str1 = ""
    let str2 = ""

    for (let i = 0;i<n;i++){
        str1+="("
    }

    for (let i = 0;i<n;i++){
        str1+=")"
    }
    
    for (let i = 0;i<n;i++){
        str2+="()"
    }

    return [str1,str2]
}
ps(1) //["()"]
ps(2) //["(())","()()"]

console.log(ps(1))
console.log(ps(2))
console.log(ps(3))
