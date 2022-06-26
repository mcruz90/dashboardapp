const asyncHandler = require('express-async-handler')

const Schedule = require('../models/scheduleModel')

// @desc get schedule
// @route GET /api/schedule
// @access Private
const getSchedule = asyncHandler(async (req,res) => {
    const schedule = await Schedule.find()
    res.status(200).json(schedule)
})


// @desc Set schedule
// @route POST /api/schedule
// @access Private
const setSchedule = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const schedule = await Schedule.create({
        text: req.body.text
    })

    res.status(200).json(schedule)
    
})

// @desc Update schedule
// @route PUT /api/schedule/:id
// @access Private
const updateSchedule = asyncHandler( async (req, res) => {

    const schedule = await Schedule.findById(req.params.id)

    if (!schedule) {
        res.status(400)
        throw new Error('Schedule not found')
    }

    const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedSchedule)
})


// @desc Delete schedule
// @route DELETE /api/schedule/:id
// @access Private
const deleteSchedule = asyncHandler(async (req, res) => {

    const schedule = await Schedule.findById(req.params.id)

    if (!schedule) {
        res.status(400)
        throw new Error('Schedule not found')
    }

    await schedule.remove()

    res.status(200).json({ id: req.params.id })
})





module.exports = {
    getSchedule, setSchedule, updateSchedule, deleteSchedule
}