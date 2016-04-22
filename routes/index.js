var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',{ title:"Portfolio"});
});


//connect to mysql database
connection.connect();

/* POST message page */
router.post('/message', function(req, res, next) {
	var name = req.body.name
	var email = req.body.email
	var phone = req.body.phone
	var message = req.body.message

	connection.query('INSERT INTO message (name,email,phone,message) VALUES (? , ?, ?, ?);' , [name, email, phone, message], function(err, docs) {
	if (err){
		res.send("Error:"+err)
	}
	else{
		res.send("Name:"+name+"<br>Email"+email+"<br>Phone"+phone+"<br>Message"+message+"<br>Docs: "+docs)
	}
	
	});

})

/* GET view messages*/
router.get('/view', function(req, res) {
	connection.query('SELECT * from message', function(err, results){
		if(err){
			res.send("Error:"+err)
		}
		else{
			//res.send("Retrived")
			res.render('view', {result:results})
		}
	})
});


module.exports = router;
