const DrivePost = require('../models/DrivePost');

module.exports = (req,res)=>{
    DrivePost.find({}).then((result) => {
        let output = result.filter(x => x.testtype == 'G' ||  x.testtype == 'G2');
        console.log('user data', result);
        res.render('displayAppointmentdate',{examinerInfoData:output}) 
    });

}