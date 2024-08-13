const DrivePost = require("../models/DrivePost");

module.exports = (req, res) => {
console.log('Examiner save data', req.body);
  DrivePost.findByIdAndUpdate(req.body.userId, { ispass:req.body.ispass,comments: req.body.comments }, { returnDocument: 'after' }).
  then(result => {
      res.render("examiner", {selectedExamType:"", examinerInfoSave: true, examinerInfoData: result });
    }).catch(err => {
      console.log('error',err);
    });
};