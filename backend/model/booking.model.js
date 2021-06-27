const mongoose = require('mongoose');
const { isEmail } = require('validator');


const BookingSchema = new mongoose.Schema(
    {
        startDate: {
            type: Date,
            required: true,
            unique: true
        },

        endDate: {
            type: Date,
            required: true,
            unique: true
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            uppercase: true
        },

        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true
        },
        phone: {
            type: Number,
            required: true,
        },
        annulation: {
            type: Boolean,
            default: false,
        },
        nbrchambre: {
            type: Number, 
            default: 1
        },
        typechambre: {
            type: String,
            default: "Chambre reguliere"
        },
        nbrEnfant: {
            type: Number,
            default: 0
        },
        nbrAdult: {
            type: Number,
            default: 1
        },
        message: {
            type: String,
            trim: true,
            default: " ",
            lowercase: true
        }
    },
    {
        timestamps: true,
    }
);

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = BookingModel;
