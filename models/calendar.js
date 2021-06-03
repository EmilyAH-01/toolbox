const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  content: { type: String, required: true },
  date: { type: Date, required: true }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;