const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Attendee = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String },
  password: String,
  token: String,
  address: String,
  email: { type: String, index: { unique: true } },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

Attendee.plugin(passportLocalMongoose);

module.exports = model('attendees', Attendee);
