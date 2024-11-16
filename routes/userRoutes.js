const express = require('express');
const router = express.Router();

const { registerPost, loginPost, rsvpPost, roleCheck } = require('../controllers/user-controller');
const { protect } = require('../middleware/authMiddleware');


router.post('/register', registerPost);
router.post('/login',loginPost);
router.post('/rsvp/:_id', protect,rsvpPost );
router.get('/checkrole' , protect , roleCheck)

module.exports = router;
