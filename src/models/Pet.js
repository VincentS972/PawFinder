const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  ownerType: {
    type: String,
    required: true,
    enum: ['Adopt', 'Foster']
  },
  ownerName: {
    type: String,
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  petGender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  petType: {
    type: String
  },
  petAge: {
    type: String,
    required: true
  },
  petImage: {
    type: String,
    default: function() {
      if (this.petType === 'Dog') {
        return 'https://placedog.net/200/200';
      } else if (this.petType === 'Cat') {
        return 'http://placekitten.com/200/200';
      }
    }
  },
  petBio: {
    type: String
  }
});


module.exports = mongoose.model("Pet", petSchema);