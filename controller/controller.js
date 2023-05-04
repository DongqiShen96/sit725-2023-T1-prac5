let model = require('../model/model')

const createProjects = (req, res) => {
    let newProject = req.body;
    model.insertProjects(newProject, (error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        } else {
            res.json({ statusCode: 200, data: result, message: 'project successfully added' });
        }
    });
}

const getAllProjects = (req, res) => {
    model.getProjects((error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Success' });
        }
    });
}

module.exports = {createProjects,getAllProjects}