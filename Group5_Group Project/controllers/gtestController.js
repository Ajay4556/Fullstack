
const DrivePost = require('../models/DrivePost')

module.exports = async(req,res)=>{
    try{
        const userId = req.session.userId
        console.log(userId,'gtest userId')
        const drivepost = await DrivePost.findById(req.session.userId);
        const g2collection2 = await DrivePost.findById(userId)
        console.log(g2collection2,'gtest')
        if(g2collection2.firstname!="default"){
            res.render('gtest',{g2collection2:[g2collection2]})
        }
        else{
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
            res.render('g2test',{drivepost:[drivepost]})
        }
    } catch (error) {
        console.log(error)
    }
}