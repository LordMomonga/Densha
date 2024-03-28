/**
* {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const announcementController = require('../controllers/announcementController');
const verifyMidleware = require("../midlewares/authjwt");

const announcementsRouter = express.Router();


announcementsRouter.post('/school/announcements/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], announcementController.createAnnouncemment);

announcementsRouter.get('/school/announcements/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], announcementController.getAnnouncements);

announcementsRouter.get('/student/announcements/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], announcementController.getClassAnnouncements);

announcementsRouter.delete('/school/announcements/:id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], announcementController.deleteAnnouncements);


module.exports = announcementsRouter;
