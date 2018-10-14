const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/answer.html");
});

app.get("/ask", (req, res)=> {
    res.sendFile(__dirname + "/public/ask.html");
});

app.get("/answer", (req, res)=> {
    res.sendFile(__dirname + "/public/answer.html");
});

app.post("/createquestion", (req, res) => {
    let questionList = JSON.parse(fs.readFileSync("questions.json"));
    
    const newQuestion = {
        id: questionList.length,
        questionContent: req.body.questionContent,
        yes: 0,
        no: 0
    };

    questionList.push(newQuestion);
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));

    res.redirect("/answer");
});

app.get("/randomquestion", (req, res) => {
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));
    if (questionList.length > 0) {
        let randomIndex = Math.floor(Math.random()*questionList.length);
        let questionRandom = questionList[randomIndex];
        res.send(questionRandom);
    }
});

app.post("/answer", (req, res) => {
    console.log(req.body);
    
    const {questionid, answer} = req.body;
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));

    questionList[questionid][answer] += 1;
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    res.send({ success: 1});    
});

app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
});

app.post("/result", (req, res) => {
    let questionid = req.body.questionid;
    
    let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    
    let question = questionList[questionid];
    
    fs.writeFileSync("./currentQuestion.json", JSON.stringify(question));
    res.send({success: 1});
});

app.get("/current", (req, res) => {
    let question = JSON.parse(fs.readFileSync("./currentQuestion.json"));
    res.send(question);
})


app.listen(6969, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 6969!");
});