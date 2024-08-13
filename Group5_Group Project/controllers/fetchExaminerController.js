const DrivePost = require("../models/DrivePost");

module.exports = function (req, res) {
  DrivePost.find({})
    .then((result) => {
      result = result.filter(x => x.testtype == req.query.examtype);
      console.log('examiner data', result);
      res.render("examiner", { selectedExamType:req.query.examtype , examinerInfoData: result,
        examinerInfoSave: null });
    })
    .catch((error) => {
      console.log('error', error);
    });
};
