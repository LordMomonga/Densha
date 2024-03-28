const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
  
    req.userId = decoded.id;
    req.email = decoded.email;
    req.role = decoded.role;

    next();
  });
};

isTeacher = (req, res, next) => {
  if(req.role != 'teacher') {
    return res.status(401).send({ message: "For teachers only!" });
  }

  next();
}

isStudent = (req,res, next) => {
  if(req.role != 'student') {
    return res.status(401).send({ message: "For students only!" });
  }

  next();
}

isSchool = (req,res, next) => {
  if(req.role != 'school') {
    return res.status(401).send({ message: "For schools only!" });
  }

  next();
}



const authJwt = {
  verifyToken,
  isTeacher,
  isStudent,
  isSchool
};

module.exports = authJwt;