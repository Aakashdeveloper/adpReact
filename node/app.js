function add(a,b){
	return a+b
}

var add = (a,b) => {
	return a+b
}

var express= require("express");

var app = express();

var port = 3000;

app.get("/",function(req,res){
	res.send("hiii i am home page")
})

app.get("/about",function(req,res){
	res.send("hiii i am about page")
})

app.listen(port, function(err){
	console.log("running on port:"+ port)
})

a =10

add(a);

function add(a){
	return a+a;
}

var a;


var setage = function(a){
	this.age = a;
}

var java = new Object();
java.age = 10;






java.setage =setage;


var tom = new Object();
tom.age = 10;
tom.setage =setage


