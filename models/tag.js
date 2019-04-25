const mongoose = require('mongoose');

const Tag = mongoose.model('tags', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "blue"
    },
    tasks: {
        type: Array,
        default: []
    },
    
}));

exports.Tag = Tag;