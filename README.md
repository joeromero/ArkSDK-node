ArkSDK for node.js
=======

With this library and a token you are ready to improve your apps with the best social information.

How to install:

npm install ark-sdk

or add it to your package.json

...
dependencies : {
  "ark-sdk" : "*"
  ...
  }

Init with your token.

arkSdk.init('YOUR-TOKEN-GOES-HERE', function (err, result) {
	console.log(result); // this will return how many request are available on this token
}

Request a profile.

arkSdk.getProfileWithEmail('goofyahead@gmail.com', function (err, result) {
  console.log(result); // this will show you a valid profile or unknown
}

Get the best profile picture.

arkSdk.getPictureFromProfile(result, function( err, result) {
	console.log(result); // this method will iterate through the image to pick the best one. IT'S SLOW!
});

Get the profile with only working pictures.

arkSdk.getProfileWithWorkingImages(result, function (err, result) {
	console.log(result.pics); // All this pics are asured to work.
});
