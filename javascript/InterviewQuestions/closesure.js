let obj = function(){
	var i = 0;
	return {
		setI(p){
			i=p;
		},
		getI(){
          
			return i
		}
	}

}


let x = obj()

x.setI(5)

i = 10

console.log(x.getI()); //5


