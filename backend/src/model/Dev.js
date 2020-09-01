const { Schema, model } = require('mongoose');
const PointSchema = require('./Point');

const DevSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    user: {
        type: String,
        required: false,
    },
    bio: String,
    avatar: {
        type: String,
        required: false,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', 
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', 
    }],
    matchs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', 
    }],
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    phoneNumber: {
        type: String,
        required: true
    },
    matchNumbers: [{
        type: String,
        ref: 'Dev'
    }]
}, {
    timestamps: true,
});


module.exports = model('Dev', DevSchema);