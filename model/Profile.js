const { Schema, model } = require('mongoose');
const { schema } = require('./User');
const profileSchema = new Schema({
  firstname: String,
  lastname: String,
  phone: String,
  avatar: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});
const Profile = model('Profile', profileSchema);

module.exports = AdminAttendence;
