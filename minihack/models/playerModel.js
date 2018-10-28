const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Model = mongoose.model;


const PlayerSchema = new Schema({
    name: { type: Array, required: true},
    score: { type: Array},
    round: {type: Number}
});

module.exports = mongoose.model("Player", PlayerSchema);