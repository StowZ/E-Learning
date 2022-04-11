const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactMessage: {
        type: String,
        required: true
    }
    
}, );

module.exports = Contact = mongoose.model('contact',  ContactSchema)
