const InterviewRequest = require('../models/interview');

// Create new interview request
exports.createRequest = async (req, res) => {
  try {
    const request = await InterviewRequest.create(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all pending requests
exports.getPendingRequests = async (req, res) => {
  try {
    const requests = await InterviewRequest.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Accept a request
exports.acceptRequest = async (req, res) => {
  try {
    const updated = await InterviewRequest.findByIdAndUpdate(
      req.params.id,
      { status: 'accepted' },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
