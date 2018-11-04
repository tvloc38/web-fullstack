const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Model = mongoose.model;


const PlayerSchema = new Schema({
    name: { type: Array, required: true},
    score: { type: Array, default: [[1,2,3,4], [2,3,4,5], [3,4,5,6]]},
});

module.exports = mongoose.model("Player", PlayerSchema);