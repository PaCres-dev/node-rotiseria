module.exports = function(app) {
  	islogged = function(req, res, next){
	  	if (req.session.user) {
	    	console.log(req.session.user);
	    	return res.json({success: true, msg: 'Nice'});
	  	} 
	  	else {
	    	console.log(req.session);
	    	return res.json({success: false, msg: 'Debes iniciar sesion'});
	  	}
	}

	logout = function(req, res, next){
	 	req.session.destroy(function(err){
		    if(err){
		      	console.log(err);
		    }
		    else
		    {
		      	return res.json({success: false, msg: 'Debes iniciar sesion'});
		    }
	  	});
	}

	app.get('/api/user', islogged);
	app.get('/api/logout', logout);
}