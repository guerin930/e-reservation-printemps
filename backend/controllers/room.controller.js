const RoomModel = require('../model/room.model');
const objectID = require('mongoose').Types.ObjectId;

module.exports.saveRoom = async (req, res) => {
    const items = { numChambre, typeChambre, price, max } = req.body;

    try {
        const room = await RoomModel.create(items);
        res.status(200).json(room._id);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send(err.message);
    }
}

module.exports.getAllRooms = async (req, res) => {
    const rooms = await RoomModel.find().select('-_v');
    res.status(200).json(rooms);
}

module.exports.getRoomInfos = (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    RoomModel.findById(req.params.id, (err, docs) => {
        if (!err) res.status(200).send(docs);
        else console.log('ID inconnu : ' + err);
    }).select('-_v');
}

module.exports.updateRoom = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await RoomModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    max: req.body.max
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        )

    } catch (err) {
        console.log(err);
    }
}
module.exports.changeAviableOnFalse = async (req, res) => {
    console.log(req.params.aviable);
    let query = {numChambre: req.body.numChambre}
    try {
        await RoomModel.findOneAndUpdate(
            query, 
            {
                aviable: false
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        ).select('-_v')

    } catch (err) {
        console.log(err);
    }
}

module.exports.changeAviableOnTrue = async (req, res) => {
    console.log(req.params.aviable);
    let query = {numChambre: req.body.numChambre}
    try {
        await RoomModel.findOneAndUpdate(
            query, 
            {
                aviable: true
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        ).select('-_v')

    } catch (err) {
        console.log(err);
    }
}

module.exports.deleteRoom = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await RoomModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
        console.log(err);
    }
}