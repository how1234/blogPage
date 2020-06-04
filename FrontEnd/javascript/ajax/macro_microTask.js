setTimeout(function(){console.log(4)},0);
new Promise(function(resolve){
	console.log(1)
	for( var i=0 ; i<10 ; i++ ){
		i==9 && resolve()
	}
	console.log(2)
}).then(function(){
	console.log(5)
});

setTimeout(function(){console.log(6)},0);


new Promise(function(resolve){
	console.log(7)
	for( var i=0 ; i<10 ; i++ ){
		i==9 && resolve()
	}
	console.log(8)
}).then(function(){
	console.log(9)
});



console.log(3);
