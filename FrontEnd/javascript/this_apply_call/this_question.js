var name = 'HI'
 var obj = {
    name: '456',
    getName: function () {
        console.log(this.name)
        printName = () =>{
            console.log(this.name) ;
        }

        printName()
    }
}
 
obj.getName()