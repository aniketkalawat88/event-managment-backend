const express = require('express');
const router = express.Router();

const { registerPost, loginPost, rsvpPost } = require('../controllers/user-controller');
const { protect } = require('../middleware/authMiddleware');


router.post('/register', registerPost);
router.post('/login',loginPost);
router.post('/rsvp/:_id', protect,rsvpPost );

module.exports = router;
