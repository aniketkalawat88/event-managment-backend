const express = require('express');
const router = express.Router();
const { createEvent, deleteEvent, allEvent } = require('../controllers/admin-controller');
const { admin, protect } = require('../middleware/authMiddleware');

router.post('/create' , protect,admin, createEvent);
router.delete('/:id', protect,admin ,deleteEvent);
router.get('/allevent' , allEvent)

module.exports = router;
