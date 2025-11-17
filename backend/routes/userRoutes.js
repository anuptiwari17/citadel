const express = require('express');
const router = express.Router();
// const User = require('../schema/userSchema');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    //const newUser = new User({ username, password });
    //await newUser.save();
    console.log('User registered:', username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    //const user = await User.findOne({ username, password });
    console.log('User login attempt:', { username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
    } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
});

module.exports = router;