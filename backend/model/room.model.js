const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
    
    {
        numchambre : [String],
        typeChambre: {type: String, required: true, unique: true},
        price: {type: Number, required: true, unique: true},
        aviable: {type: Boolean, require: true, default: true},
        max: {type: Number, required: true, default: 10}
    }
)
const RoomModel = mongoose.model("room", RoomSchema);

module.exports = RoomModel;