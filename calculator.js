const express = require ("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// This sets up body-parser for use.
app.use(bodyParser.urlencoded({extended: true}));

// When getting the index.html file, its best practice to use "__dirname" + "/index.html"
// "__dirname" will grab the current file location (whatever the servers is using) and then append the "index.html" file to it.
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

// This replies to the post for /, the normal calculator for addition.
app.post("/", function(req, res){
    let num1 = Number(req.body.num1); // Number changes this from text to number
    let num2 = Number(req.body.num2); // Number changes this from text to number
    let result = num1 + num2;

    res.send("The sum is " + result + ".");
});

// This gets the dir name/bmiCalculator file from server.
app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

// This replies to the post for /bmiCalculator for the bmi calculator
app.post("/bmiCalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height); 
    let bmiResult = Math.round(weight / Math.pow(height, 2)); // Calculate BMI

    res.send("Your body mass index is " + bmiResult + ".");
});

app.listen(port, function(){
    console.log("Server started on port 3000");
});
