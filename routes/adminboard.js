var express = require('express');
var router = express.Router();
var User = require('../models/user');
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
		if(req.user.name == 'Dheeraj'){
		User.findall(User, function(err,user){
		console.log(user)
		res.render('adminboard',{
		fullUser: user
	});
});
	}
	else
		res.render('adminboard')
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;