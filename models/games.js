const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  })

const gameSchema = new Schema({
    title: { title: String },
    company: [{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }],
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        },
        min: 1958
    },
    review: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)