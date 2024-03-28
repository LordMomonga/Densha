const express = require('express');

const academicYearController = require('../controllers/academicYearController');
const verifyMidleware = require("../midlewares/authjwt");


const academicYearRouter = express.Router();

academicYearRouter.post('/school/academic-year', [verifyMidleware.verifyToken, verifyMidleware.isSchool], academicYearController.createAcademicYear);


academicYearRouter.get('/school/academic-years', [verifyMidleware.verifyToken, verifyMidleware.isSchool], academicYearController.schoolGAcademicYears);


academicYearRouter.post('/school/stop/academic-year', [verifyMidleware.verifyToken, verifyMidleware.isSchool], academicYearController.stopAcademicYearStatus);

academicYearRouter.get('/teacher/academic-years', [verifyMidleware.verifyToken, verifyMidleware.isTeacher], academicYearController.teacherGetAcademicYears);

academicYearRouter.get('/students/academic-years', [verifyMidleware.verifyToken, verifyMidleware.isStudent], academicYearController.studentGetAcademicYear);



module.exports = academicYearRouter;
