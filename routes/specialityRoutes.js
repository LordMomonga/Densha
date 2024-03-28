/**
* {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const specialityController = require('../controllers/specialityController');
const verifyMidleware = require("../midlewares/authjwt");

const specialityRouter = express.Router();

specialityRouter.post('/school/speciality', [verifyMidleware.verifyToken, verifyMidleware.isSchool], specialityController.createSpeciality);

specialityRouter.get('/school/specialities', [verifyMidleware.verifyToken, verifyMidleware.isSchool], specialityController.getSchoolSpecialities);

specialityRouter.delete('/school/speciality/:id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], specialityController.deleteSpeciality);


module.exports = specialityRouter;

