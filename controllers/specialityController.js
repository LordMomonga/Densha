const Speciality = require('../models/Speciality');
const randomString = require('../utils/randomString');
const User =  require('../models/User');

exports.createSpeciality = async (req, res) => {
    try {
        console.log('CREATE SPECIALITY', req.body);
        let code = randomString.randomValueHex(6);

        let data = {
            name: req.body.name,
            school_id: req.userId,
            code: code,
            fees: req.body.fees,
            students: []
        }

        let check = await Speciality.findOne({name: data.name, school_id: req.userId});

        if(check) {
            return res.status(500).send({message: "Speciality With Name Is Already Existing"});
        }

        let schoolSpeciality = new Speciality(data);

        await schoolSpeciality.save();

        return res.status(200).send({message: "Speciality Created"});

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: error});
    }
}

// SCHOOL SPECIALITY
exports.getSchoolSpecialities = async(req,res) => {
    try {
        console.log('GET SCHOOL SPECIALITY');

        let specialities = await Speciality.find({school_id: req.userId});

        return res.status(200).send({message: "All Schoool Specialities", data: specialities});

    } catch (error) {
        return res.status(500).send({message: error});
    }
}


exports.getAllSchools = async(req,res) => {
    try {

        let schools = await User.find({account_type: 'school'}).populate('class_id');

        return res.status(200).send({message: "All Specialities", data: application});

    } catch (error) {
        return res.status(500).send({message: error});
    }
}


exports.deleteSpeciality = async(req,res) => {
    try {
        console.log('DELETE SPECIALITY');

        let specialityId = req.params.id;

        await Speciality.remove({_id: specialityId, school_id: req.userId});

        return res.status(200).send({message: "Speciality Deleted"});
    } catch (error) {
        return res.status(500).send({message: error});
    }
}   

