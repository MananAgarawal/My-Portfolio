const mongoose = require('mongoose');

const newproject = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    decription:{
        type:String,
        required:true,
    }
})


const PROJECTS = mongoose.model('projects', newproject)

module.exports = PROJECTS;