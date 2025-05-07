const express = require('express');

const Controller = require("../controllers/QuestionsController.js")

const router = express.Router();

router.post('/zones', Controller.bulkInsertAllZones);
router.post('/zone/:zoneName', Controller.insertIntoZone);
router.get('/zone/:zoneName', Controller.getZoneQuestions);
router.put('/zone/:zoneName/:id', Controller.updateQuestion);
router.delete('/zone/:zoneName/:id', Controller.deleteQuestion);

module.exports = router;
