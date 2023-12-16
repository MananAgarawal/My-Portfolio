const express = require('express');
const router = express.Router();
const {GetProjects} = require('../controllers/projects');

router.get('/', GetProjects);

module.exports = router;