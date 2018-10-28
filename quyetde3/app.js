const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/answer.html");
});

app.get("/ask", (req, res) => {
    res.sendFile(__dirname + "/public/ask.html");
});

app.get("/answer", (req, res) => {
    res.sendFile(__dirname + "/public/answer.html");
});

app.post("/answer", (req, res) => {
    const { questionid, answer } = req.body;

    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    questionList[questionid][answer] += 1;
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    res.send({success: 1});
})

app.get("/randomquestion", (req, res) => {
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    var randomIndex = Math.floor(Math.random()*questionList.length);
    let question = questionList[randomIndex];
    
    res.send(question);
    
});

app.post("/createquestion", (req, res) => {
    var questionContent = req.body.questionContent;
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    var newQuestion = {
        id: questionList.length,
        questionContent: questionContent,
        yes: 0,
        no: 0
    }

    questionList.push(newQuestion);
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    res.redirect("/answer")
});

app.get("/question/:questionId", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
});

app.get("/questiondetail/:questionId", (req, res) => {
    let questionId = req.params.questionId;

    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    res.send({success: 1, question: questionList[questionId]});
})

app.listen(6969, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 6969!");
});