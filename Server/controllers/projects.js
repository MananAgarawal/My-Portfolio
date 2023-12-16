const PROJECTS = require('../models/projects')


async function GetProjects(req,res){
    try{
        const projects = await PROJECTS.find({},'')
        res.status(200).json({projects});
    } catch (err) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}



module.exports = {
    GetProjects
}
