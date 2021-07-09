const BookingModel = require('../model/booking.model');
const objectID = require('mongoose').Types.ObjectId;
const { bookingErrors } = require('../CommonUtils/errors.utils');

module.exports.saveBooking = async (req, res) => {
    const item = {
        startDate, endDate, fullname, email, phone,
        typechambre, nbrchambre, nbrEnfant, nbrAdult, message, NetApayer
    } = req.body;

    try {
        const booking = await BookingModel.create(item);
        res.status(200).json({ booking: booking._id });

    } catch (err) {
        console.log(err);
        const errors = bookingErrors(err)
        res.status(500).send({ errors })
    }
}

module.exports.getAllBooking = async (req, res) => {
    const bookings = await BookingModel.find().select();
    res.status(200).json(bookings);
}

module.exports.currentBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    BookingModel.findById(req.params.id, (err, res) => {
        if (!err) res.send(docs);
        else console.log('ID inconnu : ' + err);
    }).select('-_v');

}

module.exports.UpdateBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await BookingModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    fullname: req.body.fullname,
                    email: req.body.email,
                    phone: req.body.phone,
                    typechambre: req.body.typechambre,
                    nbrchambre: req.body.nbrchambre,
                    nbrEnfant: req.body.nbrEnfant,
                    nbrAdult: req.body.nbrAdult,
                    message: req.body.message,
                    NetApayer: req.body.NetApayer
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        ).select('-_v')

    } catch (err) {
        console.log(err);
        const errors = bookingErrors(err)
        res.status(500).send({ errors })
    }

}

module.exports.CancelBooking = async (req, res) => {

    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await BookingModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    annulation: "true",
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        ).select('-_v')

    } catch (err) {
        console.log(err);
        res.status(500)
        res.send(err.message)
    }
}
module.exports.DeleteBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await BookingModel.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
        console.log(err);
        res.status(500)
        res.send(err.message)
    }
}