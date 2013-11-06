ArkSDK for node.js
=======

With this library and a token you are ready to improve your apps with the best social information.

How to install:

```js
npm install ark-sdk
```
or add it to your package.json
```js
...
dependencies : {
  "ark-sdk" : "*"
  ...
  }
```

Init with your token.

```js
arkSdk.init('YOUR-TOKEN-GOES-HERE', function (err, result) {
	console.log(result); // this will return how many request are available on this token
}
```

Request a profile.

```js
arkSdk.getProfileWithEmail('goofyahead@gmail.com', function (err, result) {
  console.log(result); // this will show you a valid profile or unknown
}
```

Get the best profile picture.

```js
arkSdk.getPictureFromProfile(result, function( err, result) {
	console.log(result); // this method will iterate through the image to pick the best one. IT'S SLOW!
});
```

Get the profile with only working pictures.

```js
arkSdk.getProfileWithWorkingImages(result, function (err, result) {
	console.log(result.pics); // All this pics are asured to work.
});
```
