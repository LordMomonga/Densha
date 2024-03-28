/**
* {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const feesDeadlineController = require('../controllers/feesDeadlineController');
const verifyRoleMidleware = require("../midlewares/authjwt");

const feesDeadlineRouter = express.Router();


feesDeadlineRouter.post('/school/dead-line',[verifyRoleMidleware.verifyToken, verifyRoleMidleware.isSchool], feesDeadlineController.createDeadline);


feesDeadlineRouter.post('/school/suspend/:id/:academic_year_id',[verifyRoleMidleware.verifyToken, verifyRoleMidleware.isSchool], feesDeadlineController.suspendStudents);


feesDeadlineRouter.get('/school/dead-lines',[verifyRoleMidleware.verifyToken, verifyRoleMidleware.isSchool], feesDeadlineController.getSchoolDeadlines);


feesDeadlineRouter.get('/student/dead-lines/:academic_year_id',[verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], feesDeadlineController.studentGetSchoolDeadlines);


feesDeadlineRouter.delete('/school/dead-line/:id',[verifyRoleMidleware.verifyToken, verifyRoleMidleware.isSchool], feesDeadlineController.deleteDeadline);


module.exports = feesDeadlineRouter;
