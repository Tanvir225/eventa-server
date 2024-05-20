const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
       
    },
    password: {
        type: String,
       
    },
    photoURL: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        default:'none'
    },
    role: {
        type: String,
        default: 'user',
        required: true
    },
    status: {
        type: String,
        default: 'pending',
    },
    createdAt: {
        type: Date,
        required: true
    },
    lastLogin: {
        type: Date,
    },

}, {
    versionKey:false,
});

module.exports = userSchema