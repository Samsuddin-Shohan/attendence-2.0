const { Schema, model } = require('mongoose');

const adminAttendenceSchema = new Schema(
  {
    timeLimit: {
      type: Number,
      min: 5,
      max: 30,
      default: 5,
      required: true,
    },
    status: {
      type: String,
      default: 'Running',
      enum: ['Running', 'Completed'],
    },
  },
  {
    timestamps: true,
  }
);
const AdminAttendence = model('AdminAttendence', adminAttendenceSchema);

module.exports = AdminAttendence;
