const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    resourceDocs: {
        type: String,
        required: false
    },
}, {timestamps: true,}
)

module.exports = mongoose.model('Schedule', scheduleSchema)