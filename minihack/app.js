const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PlayerModel = require("./models/playerModel");

mongoose.connect("mongodb://localhost/minihack",(err) => {
    if(err) console.log(err);
    else console.log("DB connect successfully!");
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/adduser", (req, res) => {
    // console.log(req.body.player);
    PlayerModel.create(
        {name: req.body.player},
        (err, playerCreated) => {
            if(err) console.log(err);
            else res.redirect("/games/" + playerCreated._id);
        }
    );
});

app.post("/addround", (req, res) => {
    let playerId = req.body.playerid;
    console.log(playerId);
    
    PlayerModel.findById(playerId, function(err, playerFound) {
        if(err) console.log(err);
        else if(!playerFound) console.log("Player not found");
        else {
            playerFound.score.push([0,0,0,0]);
            console.log(playerFound.score);

            playerFound.save(function(err) {
                if(err) {
                    console.log(err);
                }
            });
            res.send(playerFound);
        };
    });
})

app.get("/games/:id", (req, res) => {
    res.sendFile(__dirname + "/public/detail.html");
})

app.get("/gamesdetail/:id", (req,res) => {
    var id = req.params.id;

    PlayerModel.findById(id, (err, playerFound) => {
        if(err) console.log(err);
        else if(!playerFound) console.log("Not found");
        else res.send({success: 1, player: playerFound});
    })
})

app.listen(8080, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 8080!");
})