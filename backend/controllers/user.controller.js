const UserModel = require('../model/user.model');
const objectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select(['-password','-email']);
    res.status(200).json(users);
}

module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if(!objectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id);

    UserModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log('ID inconnu : ' + err);
    }).select(['-password','-email']);
}

module.exports.UpdateUser = async (req, res) => {
    console.log(req.params);
    if(!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await UserModel.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                   bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if(!err) return res.send(docs);
                if(err) return res.status(500).send({ message: err});
            }
        )} catch(err) {
            return res.status(500).json({ message: err});
        }
};

module.exports.deleteUser = async (req, res) => {
    console.log(req.params);
    if(!objectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await UserModel.deleteOne({_id: req.params.id}).exec();
        res.status(200).json({ message: "Successfully deleted. "});
    } catch (err) {
        return res.status(500).json({ message: err});
    }
}