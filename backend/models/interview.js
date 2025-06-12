const mongoose = require('mongoose');

const interviewRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  jobTitle: String,
  status: {
    type: String,
    enum: ['pending', 'accepted'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('InterviewRequest', interviewRequestSchema);
