const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const TodoSchema = new Schema({
    title: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

// create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;