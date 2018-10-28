const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const QuestionModel = require("./models/questionModel");

mongoose.connect("mongodb://localhost/minihack",(err) => {
    if(err) console.log(err);
    else console.log("DB connect successfully!");
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(8080, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 8080!");
})