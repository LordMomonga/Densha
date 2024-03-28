const express = require('express');
const assignmentController = require('../controllers/assignmentController');
const verifyRoleMidleware = require("../midlewares/authjwt");

const assignmentRouter = express.Router();

assignmentRouter.post("/assignment", [verifyRoleMidleware.verifyToken,verifyRoleMidleware.isTeacher], assignmentController.createAssignment);

assignmentRouter.post('/assignment/:id', [verifyRoleMidleware.verifyToken,verifyRoleMidleware.isTeacher],assignmentController.updateAssignment);

assignmentRouter.get('/assignments/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assignmentController.getAssignments);

assignmentRouter.get('/assignment/solutions/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assignmentController.getAllAssignmenttSolutions);

assignmentRouter.get('/assignment/:classId/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assignmentController.getClassAssignments);

assignmentRouter.get('/student/assignment/solutions', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assignmentController.studentGetAssignmentSolutions);

assignmentRouter.get('/student/total/assignment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assignmentController.studentGetTotalAssignment);


assignmentRouter.delete('/assignment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assignmentController.deleteAssignment);

assignmentRouter.get('/student/assignment/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent],  assignmentController.studentGetAllAssignment);

assignmentRouter.post('/student/assignment/:academic_year_id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isStudent], assignmentController.submitAssignmentSolution);

assignmentRouter.post('/assignment/score/:id', [verifyRoleMidleware.verifyToken, verifyRoleMidleware.isTeacher], assignmentController.submitAssignmentScore);

module.exports =   assignmentRouter;

