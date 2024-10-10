const express = require('express');

const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const { getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');

const router = express.Router();

router.use(authMiddleware, adminMiddleware);

router.get('/assignments', getAssignments);

router.post('/assignments/:id/accept', acceptAssignment);

router.post('/assignments/:id/reject', rejectAssignment);

module.exports = router;