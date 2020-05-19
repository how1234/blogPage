var array = []

for (var i = 0;i<3;i++){ // i和arr在同一个作用于
    array.push( () => i)
}

var newArray = array.map(el => el())
console.log(newArray)