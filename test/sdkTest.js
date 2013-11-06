var should = require('should');
var arkSdk = require('ark-sdk');
     
describe('tests: ', function (){
	this.timeout(20000);
	var testToken = 'c3c75a13-f606-4dda-966f-0305e2390e08';

	it('should have request left', function(done){
		arkSdk.init(testToken, function (err, result) {
			result.should.be.above(1);
			done();
		});
	});

	it('should return a profile', function(done){
		arkSdk.getProfileWithEmail('goofyahead@gmail.com', function (err, result) {
			result.should.have.property.name;
			done();
		});
		
	});

	it('should return a profile pic', function(done){
		arkSdk.getProfileWithEmail('goofyahead@gmail.com', function (err, result) {
			arkSdk.getPictureFromProfile(result, function( err, result) {
				should.exist(result);
				done();
			});
		});
	});
});