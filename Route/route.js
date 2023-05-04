var express = require('express');
let router = express.Router();
let controller = require('../controller/controller')

router.post('/api/projects', (req, res) => {
    controller.createProjects(req,res);
});

router.get('/api/projects', (req, res) => {
    controller.getAllProjects(req,res);
});

module.exports = router;

