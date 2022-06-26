const express = require('express')
const router = express.Router()
const {getSchedule, setSchedule, updateSchedule, deleteSchedule} = require('../controllers/scheduleController')

router.route('/').get(getSchedule).post(setSchedule)
router.route('/:id').delete(deleteSchedule).put(updateSchedule)

router.get('/', getSchedule)

router.post('/', setSchedule)

router.put('/:id', updateSchedule)

router.delete('/:id', deleteSchedule)

module.exports = router