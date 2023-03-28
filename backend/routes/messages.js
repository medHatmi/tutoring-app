const express = require('express');
const messageController = require('../controllers/message.controller');
const checkAuth = require('../middleware/checkAuth');


const router = express.Router();

router.post('/addMessage', checkAuth.checkAuth, messageController.addMsg);
router.get('/messages/:conversationId', checkAuth.checkAuth, messageController.getMsg);


module.exports = router;