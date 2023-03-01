const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// Home page
app.get("/", function (req, res) {
    res.send("Working");
});

// Calculator Page
app.get("/calculator", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});

// BMI calculator Page
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

// Calculator result Page
app.post("/", function (req, res) {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var summ = Number(num1) + Number(num2)

    res.send("The sum of the two number is " + summ)
});

// BMI Calculator result Page
app.post("/bmicalculator", function (req, res) {

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = (weight / (height * height));
    res.send("Your bmi is " + bmi);


});



app.listen(port, function () {
    console.log("Server is up");
});