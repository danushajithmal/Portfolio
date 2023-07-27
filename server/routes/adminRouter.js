// adminRouter.js

const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Admindetails = require('../models/admin');
const JWT_SECRET = process.env.JWT_SECRET;
const authMiddleware = require('../middleware/authmiddleware')

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admindetails.findOne({ username, password });

    if (admin) {
      const token = jwt.sign({ userId: admin._id }, JWT_SECRET, {
        expiresIn: '10s',
      });

      res.cookie('adminToken', token, {
        maxAge: 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      });
      res.json({ success: true, token });

    } else {
      res.status(401).json({ success: false, message: 'Wrong credentials' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

router.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
})


module.exports = router;
