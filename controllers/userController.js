const User = require('../models/userModel');

const Assignment = require('../models/assignmentModel');

const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });

  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid login credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.uploadAssignment = async (req, res) => {
  try {
    const { task, adminId } = req.body;
    const assignment = new Assignment({
      userId: req.user._id,
      task,
      admin: adminId
    });
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ isAdmin: true }, 'username');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};