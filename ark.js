var colors = require('colors');
var request = require('request');
var async = require('async');
var _ = require('underscore');
var URL = 'https://testapi.ark.com';
var configToken;

exports.init = function (token, cb) {
	configToken = token;

	if (!token) {
		cb ({message : 'provide a token to init.'}, null);
		console.log('provide a token to init'.red);
		return;
	}

	request(
	{
		url : URL + '/token_request',
		headers : {
			api_token : configToken
		}
	},
	function (err, response, body) {
		if (err) throw err;
		cb(null, JSON.parse(body).left);
	});
}

exports.getProfileWithEmail = function (email, cb) { //cb (err, result)
	var that = this;
	if (!email.match('@')) {
        cb({message : 'given is not an email.'}, null);
        console.log('given is not an email.'.red);
        return;
    }

    if (!configToken) {
    	cb({message : 'please init with a token.'}, null);
    	console.log('please init with a token.'.red);
        return;
    }

	request(
		{
			url : URL + '/email/' + email,
			headers : {
				api_token : configToken
			}
		},
		function (err, response, body) {
			if (err) throw err;

			if (response.statusCode == 302) {
				setTimeout(that.getProfileWithEmail(email,cb),500);
			} else {
				cb(null, JSON.parse(body));
			}
		});
}

exports.getProfileWithWorkingImages = function (profile, cb) {
	var images = [];
	async.each(profile.pics, function (image, cb) {
        request.head({
                    uri: image
                }, function(err, res, body){
            if (err){
                images.push({image: image, score: 0});
                cb(null);
            } else {
                var current = parseInt(res.headers['content-length']);
                if (image.indexOf('fbcdn') != -1) current += 50000;
                images.push({image: image, score: current});
                cb(null);
            }
        });
    }, function (err) {
        if (err) {
        	cb(err, '');
        	return;
        }
        images = _.filter(images, function (elem) {
        	return(elem.score > 20);
        });
        profile.pics = images;
        cb(null, profile);               
    });
}

exports.getPictureFromProfile = function (profile, cb) { // err, result
	var images = [];
	async.each(profile.pics, function (image, cb) {
        request.head({
                    uri: image
                }, function(err, res, body){
            if (err){
                images.push({image: image, score: 0});
                cb(null);
            } else {
                var current = parseInt(res.headers['content-length']);
                if (image.indexOf('fbcdn') != -1) current += 50000;
                images.push({image: image, score: current});
                cb(null);
            }
        });
    }, function (err) {
        if (err) {
        	cb(err, '');
        	return;
        }
        var maxValue = _.max(images, function (elem) { return elem.score });
        var maxValuePic = _.max(images, function (elem) { return elem.score }).image;
        cb(null, maxValue.score > 20 ? maxValuePic : '');               
    });
}