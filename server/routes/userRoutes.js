const router = require('express').Router();
const { createUser } = require('../controllers/userControllers');

router.route('').post(createUser);

module.exports = router;
