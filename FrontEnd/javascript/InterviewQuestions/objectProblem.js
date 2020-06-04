var myObject = {
    name:"user",
    tellName: () => {
        console.log(this.name)
    }
}


myObject.tellName()





var myObject1 = {
    name:"user",
    tellName() {
        console.log(this.name)
    }
}


myObject1.tellName()

