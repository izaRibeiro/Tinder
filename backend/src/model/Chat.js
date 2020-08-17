const { Schema, model } = require('mongoose');

const ChatSchema = new Schema({
    _id: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date
    },
    user: {
      _id: {
        type: String,
        required: false,
      },
      name: {        
        type: String,
        required: false,},
      avatar: {
        type: String,
        required: false,
      },
    },
})

module.exports = model('Chat', ChatSchema);