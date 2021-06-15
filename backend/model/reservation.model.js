const mongoose = require('mongoose');
const { isEmail } = require('validator');

const BookingSchema = new mongoose.Schema(
    {
        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
            trim: true
        },
        annulation: {
            type: Boolean,
            default: false,
            unique: true,
            required: true
        },
        typeChambre: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        nbrChambre: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
            default: "1"
        },
        nbrEnfant: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
            default: "0"
        },
        nbreAdult: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
            default: "1"
        },
        message : {
            type: String,
            required: false,
            trim: true,
            unique: true,
            lowercase: true
        }
    },
    {
        timestamps: true,
    }
);

const BookingModel = mongoose.model("booking", BookingSchema);

module.exports = BookingModel;
