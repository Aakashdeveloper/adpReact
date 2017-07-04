var a = [1,2,3,4,5];


//Es5

//function 
function add(a,b){
	return a+b
}


//methods
var add = function(a,b){
	return a+b
}


//Es6

var add = (a,b) => {
	return a+b
}

var isEven = (a,b,c) =>{
	if(a%2==0){
		console.log("even")
	}else{
		console.log("odd")
	}
}