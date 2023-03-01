const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){
    res.send("Working");
});

app.get("/calculator",function(req,res){
   
    res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req, res) {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var summ = Number(num1) + Number(num2)

    res.send("The sum of the two number is " + summ)
});

app.listen(port, function(){
    console.log("Server is up");
});