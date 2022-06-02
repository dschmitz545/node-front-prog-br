const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name_use: { type: String, required: true, minlengtht: 3, maxlength: 50 },
    email_use: { type: String, required: true, minlengtht: 3, maxlength: 100 },
    passd_use: { type: String, required: true, minlengtht: 6, maxlength: 200 },
    admin_use: { type: Boolean, required: true, default: false },
    created_use: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema);