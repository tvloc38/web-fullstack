const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const QuestionModel = require("./models/questionMode");

mongoose.connect("mongodb://localhost/quyetde", (err) => {
    if(err) console.log(err);
    else console.log("DB connect success!");
    
})

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
    // let questionList = JSON.parse(fs.readFileSync("questions.json"));
    
    // const newQuestion = new QuestionModel({
    //     questionContent: req.body.questionContent
    // })
    
    // newQuestion.save();

    QuestionModel.create(
        { questionContent: req.body.questionContent},
        (err, questionCreated) => {
            if(err) console.log(err)
            else res.redirect("/question/" + questionCreated._id);
        }
    )

    // questionList.push(newQuestion);
    // fs.writeFileSync("./questions.json", JSON.stringify(questionList));

    res.redirect("/answer");
});

app.get("/randomquestion", (req, res) => {
    //find one
    // const questionList = JSON.parse(fs.readFileSync("./questions.json"));
    // if (questionList.length > 0) {
    //     let randomIndex = Math.floor(Math.random()*questionList.length);
    //     let questionRandom = questionList[randomIndex];
    //     res.send(questionRandom);
    // }

    QuestionModel.count({}, (err, count) => {

        let randomNum = Math.floor(Math.random()*count);

        QuestionModel.findOne({}, null, { skip: randomNum }, (err, questionRandom) => {
        if(err) console.log("");
        else res.send(questionRandom);
        
    })
    })

    
});

app.post("/answer", (req, res) => {

    //findBy ... andUpdate
    //find -> save
    // console.log(req.body);
    
    const {questionid, answer} = req.body;

    // QuestionModel.findByIdAndUpdate(questionid, 
    //     // {$inc: answer == "yes" ? {"yes": 1} : {"no": 1}},
    //     {$inc: {[answer] : 1}},
    //      (err, questionUpdated) => {
    //     if (err) console.log(err);
    //     else res.send({success: 1});
    // })

    QuestionModel.findById(questionid, (err, questionFound) => {
        if(err) console.log(err);
        else if(!questionFound) console.log("Not found");
        else {
            questionFound[answer] += 1;
            questionFound.save((err) => {
                if(err) console.log(err);
                else res.send({success: 1});
            })
        }
    })

    // let questionList = JSON.parse(fs.readFileSync("./questions.json"));

    // questionList[questionid][answer] += 1;
    // fs.writeFileSync("./questions.json", JSON.stringify(questionList));
    // res.send({ success: 1});    
});

app.get("/question/:questionId", (req, res) => {
    // let questionId = req.params.questionId;
    // let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    // res.send({success: 1, question: questionList[questionId]});
    res.sendFile(__dirname + "/public/result.html");
});

app.get("/questiondetail/:questionId", (req, res) => {
    let questionId = req.params.questionId;
    // let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    // res.send({success: 1, question: questionList[questionId]});

    QuestionModel.findById(questionId, (err, questionFound) => {
        if(err) console.log(err);
        else if(!questionFound) console.log("not found");
        else {
            res.send({success: 1, question: questionFound});
        }
    })
})


// app.get("/result", (req, res) => {
//     res.sendFile(__dirname + "/public/result.html");
// });

// app.post("/result", (req, res) => {
//     let questionid = req.body.questionid;
    
//     let questionList = JSON.parse(fs.readFileSync("./questions.json"));
    
//     let question = questionList[questionid];
    
//     fs.writeFileSync("./currentQuestion.json", JSON.stringify(question));
//     res.send({success: 1});
// });

// app.get("/current", (req, res) => {
//     let question = JSON.parse(fs.readFileSync("./currentQuestion.json"));
//     res.send(question);
// })


app.listen(6969, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 6969!");
});