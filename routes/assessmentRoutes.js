const express = require('express');
const assessmentController = require('../controllers/assessmentController');
const verifyRoleMidleware = require("../midlewares/authjwt");

const assessmentRouter = express.Router();

assessmentRouter.post("/assessment", [verifyRoleMidleware.verifyToken,verifyRoleMidleware.isTeacher], assessmentController.createAssessment);

assessmentRouter.post('/assessment/:id', [verifyRoleMidleware.verifyToken,verifyRoleMidleware.isTeacher],assessmentController.updateAssessment);

assessmentRouter.get('/assessments/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assessmentController.getAssessments);

assessmentRouter.get('/assessment/solutions/:id/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assessmentController.getAllAssessmentSolutions);

assessmentRouter.get('/assessments/:classId/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assessmentController.getClassAssessments);

assessmentRouter.get('/student/assessment/solutions/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assessmentController.studentGetSolutions);

assessmentRouter.get('/student/total/assessment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assessmentController.studentGetTotalAssessment);


assessmentRouter.delete('/assessment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assessmentController.deleteAssessment);

assessmentRouter.get('/student/assessment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent],  assessmentController.studentGetAllAssessment);

assessmentRouter.post('/student/assessment/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assessmentController.submitAssessmentSolution);

assessmentRouter.post('/assessment/score/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assessmentController.submitAssessmentScore);

module.exports =   assessmentRouter;

