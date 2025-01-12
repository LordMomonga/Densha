/**
* The file to start server and register all routes of the application {@link link
    name}
    * @author Donacien
    * Contributors : 
**/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');




//IMPORTING THE ROUTES BELLOW
const userRoutes = require("./routes/userRoutes");
const classRoutes = require("./routes/classRoomRoutes");
const courseContentRouter = require('./routes/courseContentRoutes');
const participantRouter = require('./routes/participantRoutes');
const passExamRouter = require('./routes/passExamContentRoutes');
const solutionRouter = require('./routes/solutionRoutes');
const applicationRouter = require('./routes/applicationRoutes');
const liveSessionRouter = require('./routes/sessionRoutes');
const assessmentRouter = require('./routes/assessmentRoutes');
const assignmentRouter = require('./routes/assignmentRoutes');
const specialityRouter  = require('./routes/specialityRoutes');
const studentsRouter  = require('./routes/studentRoutes');
const timetableRouter = require('./routes/timetableRoutes');
const academicYearRouter = require('./routes/academicYearRoutes');
const bankInfoRouter = require('./routes/bankInfoRoutes');
const announcementsRouter = require('./routes/announcementRoutes');
const reportsRouter = require('./routes/reportsRoutes');
const feespaymentRoutes = require('./routes/feespaymentRoutes');
const publicRoutes = require('./routes/publicRoutes');
const resultTypeRouter = require('./routes/resultTypeRoutes');
const studentResultsRouter = require('./routes/studentResultsRoutes');
const feesDeadlineRouter = require('./routes/feesDeadlineRoutes');

const app = express();

// cors allow cors
app.use(cors('*'))

app.use(cors());

app.use(express.json());

//Install dotenv module
dotenv.config();


// Variable to hold port
var port = process.env.PORT || 8070;

// USE ALL ROUTES
app.use(userRoutes);
app.use(classRoutes);
app.use(courseContentRouter);
app.use(participantRouter);
app.use(passExamRouter);
app.use(solutionRouter);
app.use(applicationRouter);
app.use(liveSessionRouter);
app.use(assessmentRouter);
app.use(assignmentRouter)
app.use(specialityRouter);
app.use(studentsRouter);
app.use(timetableRouter);
app.use(academicYearRouter);
app.use(bankInfoRouter);
app.use(announcementsRouter);
app.use(reportsRouter);
app.use(feespaymentRoutes);
app.use(publicRoutes);
app.use(resultTypeRouter);
app.use(studentResultsRouter);
app.use(feesDeadlineRouter);

app.get('/', (req, res) => {
    res.send('Hey API running 🥳')
})

app.use("/status",(req,res) => {
    res.send({status: "OK reussi"});
})


mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true,}, (err,res) => {
    if(err){
        console.log(err)
    }
    else{
      console.log('Connected to Database');
    }
});

// by default, you need to set it to false.
mongoose.set('useFindAndModify', true);


app.listen(8070, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Project is running on port ${port}`)
    }
})
