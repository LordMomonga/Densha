const express = require('express');

const applicationsController = require('../controllers/applicationsController');
const verifyMidleware = require("../midlewares/authjwt");


const applicationRouter = express.Router();

applicationRouter.get('/applications', [verifyMidleware.verifyToken, verifyMidleware.isTeacher], applicationsController.getAllApplications);

applicationRouter.get('/applications/student', [verifyMidleware.verifyToken, verifyMidleware.isStudent], applicationsController.getStudentApplications);

applicationRouter.post('/applications', [verifyMidleware.verifyToken, verifyMidleware.isStudent], applicationsController.newApplication);

applicationRouter.post('/applications/accept', [verifyMidleware.verifyToken, verifyMidleware.isTeacher], applicationsController.approveApplication);

applicationRouter.post('/applications/reject', [verifyMidleware.verifyToken, verifyMidleware.isTeacher], applicationsController.rejectApplications);

module.exports = applicationRouter;

