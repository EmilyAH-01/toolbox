const router = require('express').Router();
const calController = require('../../controllers/calendarController');

// .../api/calendar
router.route('/')
  .get(calController.calFindAll)
  .post(calController.calCreate);

// .../api/calendar/:id  
router.route('/:id')
  .get(calController.calFindById)
  .put(calController.calUpdate)
  .delete(calController.calRemove);

module.exports = router;