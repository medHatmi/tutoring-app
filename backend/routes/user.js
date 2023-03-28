const express = require('express');
const userController = require('../controllers/user.controller');
const checkAuth = require('../middleware/checkAuth');


const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login)
router.get('/all', checkAuth.checkAuth, userController.allusers);
router.get('/getOne/:id', checkAuth.checkAuth, userController.oneUser);


module.exports = router;