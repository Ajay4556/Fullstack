const DrivePost = require('../models/DrivePost');
const path = require('path');

module.exports = async (req,res)=>{
    // console.log("session details in G2 page here !!!" , req.session);
    const drivepost = await DrivePost.findById(req.session.userId);
    console.log(" driver details" , drivepost);
    if(drivepost.firstname == 'default'){
        drivepost.firstname = '';
        drivepost.lastname = '';
        drivepost.license = '';
        drivepost.age = 0;
        drivepost.make = '';
        drivepost.model = '';
        drivepost.year = 0;
        drivepost.platenumber = '';
    }
    res.render('g2test', {drivepost:[drivepost]});
}