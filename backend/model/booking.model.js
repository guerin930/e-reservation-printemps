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

        name: {
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
            required: false
        },
        nbrchambre: {
            type: Number, required: true, default: "1"
        },
        typechambre: {
            type: String, required: true
        },
        nbrEnfant: {
            type: Number,
            required: true,
            trim: true,
            default: "0"
        },
        nbreAdult: {
            type: Number,
            required: true,
            trim: true,
            default: "1"
        },
        message: {
            type: String,
            required: false,
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
