const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Model = mongoose.model;


const PlayerSchema = new Schema({
    name: { type: String, required: true},
    creater: { type: Number, required: true},
    score: { type: Number, default: 0},
    round: Number,
});

module.exports = mongoose.model("Player", PlayerSchema);