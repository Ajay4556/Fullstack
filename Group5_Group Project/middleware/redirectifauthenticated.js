module.exports = (req,res,next) => {
    if(req.session.userId){
        return res.redirect('/')   // redirecting to home page
    }
    next();
}
