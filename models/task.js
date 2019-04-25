
const mongoose = require('mongoose');

const Task = mongoose.model('tasks', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    dateStart: {
        type: Date,
        default: Date.now
         },
    tags: {
        type: Array, "default": []
        }
}));

exports.Task = Task;