/**
* {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const reportsController = require('../controllers/reportController');
const verifyMidleware = require("../midlewares/authjwt");

const reportsRouter = express.Router();


reportsRouter.post('/student/report/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], reportsController.createReport);

reportsRouter.get('/school/reports/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], reportsController.schoolGetReports);

reportsRouter.get('/student/reports/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], reportsController.studentGetReports);

reportsRouter.delete('/student/report/:id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], reportsController.deleteReport);


module.exports = reportsRouter;
