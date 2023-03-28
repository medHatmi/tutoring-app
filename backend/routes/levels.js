const express = require('express');
const levelsController = require('../controllers/levels.controller');
const checkAuth = require('../middleware/checkAuth');


const router = express.Router();

router.get('/getFirstLevel', levelsController.getLevel);
router.get('/getSecondLevel', levelsController.getLevel2);
router.get('/getThirdLevel', levelsController.getLevel3);
router.get('/getForthLevel', levelsController.getLevel4);
router.get('/getFifthLevel', levelsController.getLevel5);

router.post('/delete/:id', levelsController.deleteLevel);
// router.post('/firstLevel', checkAuth.checkAuth, levelsController.addLevel);

// router.post('/secondLevel', checkAuth.checkAuth, levelsController.addLevel2);

// router.post('/thirdLevel', checkAuth.checkAuth, levelsController.addLevel3);

// router.post('/forthLevel', checkAuth.checkAuth, levelsController.addLevel4);

// router.post('/fifthLevel', checkAuth.checkAuth, levelsController.addLevel5);




module.exports = router;