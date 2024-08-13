const DrivePost = require('../models/DrivePost');

module.exports = async (req,res) => {

    DrivePost.find({}).then((result) => {
        result = result.filter(x => x.testtype == 'G' ||  x.testtype == 'G2');
        res.render("examiner", {selectedExamType:"", 
        examinerInfoSave: null, examinerInfoData: result });
      })
      .catch((error) => {
        console.log(error);
      });
}