const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coords = new Schema({
    name: String,
    latitude: Number,
    longitude: Number
}, { collection: "coordinates" });

const Coords = mongoose.model('coordinates', coords);

module.exports = Coords;