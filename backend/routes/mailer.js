const express = require('express');
const mailerContoller = require('../controllers/mailer.controller');
const checkAuth = require('../middleware/checkAuth');


const router = express.Router();

router.post('/send_mail', checkAuth.checkAuth, mailerContoller.send_mail);



module.exports = router;