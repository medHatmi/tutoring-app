const express = require('express');
const conversationController = require('../controllers/conversation.controller');
const checkAuth = require('../middleware/checkAuth');


const router = express.Router();

router.post('/newConv', checkAuth.checkAuth, conversationController.newConv);
router.get('/userConv/:id', checkAuth.checkAuth, conversationController.userConv);
router.get('/find/:firstUserId/:secondUserId', checkAuth.checkAuth, conversationController.comConv);


module.exports = router;