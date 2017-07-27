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
