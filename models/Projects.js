const mongoose = require('mongoose')
const {Schema} = mongoose


const projectsSchema = new Schema({
  projectName: String
})

mongoose.model('projects', projectsSchema)
