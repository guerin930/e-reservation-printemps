const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
    
    {
        numChambre: {type: Number, required: true, unique: true},
        typeChambre: {type: String, required: true, unique: true},
        price: {type: Number, required: true},
        aviable: {type: Boolean, require: true, default: true}
    }
)
const RoomModel = mongoose.model("room", RoomSchema);

module.exports = RoomModel;