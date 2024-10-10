const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { register, login, uploadAssignment, getAdmins } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/upload', authMiddleware, uploadAssignment);
router.get('/admins', authMiddleware, getAdmins);

module.exports = router;