const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

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