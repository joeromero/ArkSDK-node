ArkSDK for node.js
=======
* [Installation] (#installation)
* [Init] (#init)
* [Get profile] (#profile)
* [Profile picture] (#picture)
* [Profile with validated pictures] (#pictures)

With this library and a token you are ready to improve your apps with the best social information.

<a name="installation" />
__How to install:__

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

<a name="init" />
__Init with your token.__

```js
arkSdk.init('YOUR-TOKEN-GOES-HERE', function (err, result) {
	console.log(result); // this will return how many request are available on this token
});
```

<a name="profile" />
__Request a profile.__

```js
arkSdk.getProfileWithEmail('goofyahead@gmail.com', function (err, result) {
  console.log(result); // this will show you a valid profile or unknown
});
```
<a name="picture" />
__Get the best profile picture.__

```js
arkSdk.getPictureFromProfile(result, function( err, result) {
	console.log(result); // this method will iterate through the image to pick the best one. IT'S SLOW!
});
```
<a name="pictures" />
__Get the profile with only working pictures.__

```js
arkSdk.getProfileWithWorkingImages(result, function (err, result) {
	console.log(result.pics); // All this pics are asured to work. IT'S SLOW
});
```
