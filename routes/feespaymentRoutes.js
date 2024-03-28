/**
* {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const feesReceiptController = require('../controllers/feesReceiptController');
const verifyMidleware = require("../midlewares/authjwt");

const feespaymentRoutes = express.Router();


feespaymentRoutes.post('/student/receipt/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], feesReceiptController.submitReceipt);

feespaymentRoutes.get('/school/receipts/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], feesReceiptController.schoolGetReceipts);

feespaymentRoutes.get('/student/receipts/:academic_year_id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], feesReceiptController.studentGetReceipts);

feespaymentRoutes.post('/school/accept-receipts/:academic_year_id/:id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], feesReceiptController.schoolAcceptReceipt);

feespaymentRoutes.post('/school/reject-receipts/:academic_year_id/:id', [verifyMidleware.verifyToken, verifyMidleware.isSchool], feesReceiptController.schoolRejectsReceipt);


feespaymentRoutes.delete('/student/receipt/:id', [verifyMidleware.verifyToken, verifyMidleware.isStudent], feesReceiptController.deleteReceipt);


module.exports = feespaymentRoutes;
