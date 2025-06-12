const express = require('express');
const router = express.Router();
const {
  createRequest,
  getPendingRequests,
  acceptRequest
} = require('../controllers/interviewController');

router.post('/', createRequest);
router.get('/', getPendingRequests);
router.put('/:id/accept', acceptRequest);

module.exports = router;
