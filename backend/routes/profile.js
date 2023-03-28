const express = require('express');
const profileController = require('../controllers/profile.controller');
const checkAuth = require('../middleware/checkAuth');
const ProfileUpload = require('../middleware/profile-upload');


const router = express.Router();

router.get('/profiles/all', checkAuth.checkAuth, profileController.allprofiles);

router.post('/friends', checkAuth.checkAuth, profileController.findprofilefriends);

router.get('/findprofile/:id', checkAuth.checkAuth, profileController.findprofile);

router.post('/update/:id',checkAuth.checkAuth,ProfileUpload.single('photo'), profileController.updateprofile);

router.post('/findtutors',checkAuth.checkAuth, profileController.findtutors);


module.exports = router;