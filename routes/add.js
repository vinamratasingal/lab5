var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name; 
	var description = req.query.description; 
	var jsonObject = {
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people"			
		}; 
	data["friends"].push(jsonObject); 
	console.log(jsonObject); 
	res.render('add', data); 
 }