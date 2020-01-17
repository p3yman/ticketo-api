/*-----------------------------------------------------------------
- User routes
-----------------------------------------------------------------*/
const router = require('express').Router();
const controller = require('./../controllers/UserController');

router
  .route('/')
  .get(controller.list)
  .post(controller.create);

router
  .route('/:id')
  .get(controller.single)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
