const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    _id: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
},)

module.exports = mongoose.model('article',articleSchema)