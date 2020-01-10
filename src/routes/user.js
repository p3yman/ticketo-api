/*-----------------------------------------------------------------
- User routes
-----------------------------------------------------------------*/
const router = require('express').Router();
const controller = require('./../controllers/UserController');

router.route('/').get(controller.list);

module.exports = router;
