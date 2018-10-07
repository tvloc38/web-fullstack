const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('HTML CSS'));

app.get('/', (rep, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, '../HTML CSS/index.html'));
});


app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 3000!");
});