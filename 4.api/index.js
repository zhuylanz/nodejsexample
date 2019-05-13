var request = require("request");
var token =
	"EAAERYOXacWsBAEykmvT0EHRTi6yksW4XjZCOsZAOWSRtjh3Nh5cKthrEwKmwf1jDCqdPEENPRvXF6elj6mVbPXIrMnJS3cZCM3ceAhj2VF5xAaWvwR3cn2QwrycfxOOohM75cCZAVDg3MAdAayWW8K2jD8M6VcyydMyBV5Npj13zs73XrnZBRoZBMNTnJYAZCABn0HTGrP0EAZDZD";
var edge = "https://graph.facebook.com/v3.3/425075107846518/feed";

// request.get(
// 	{
// 		url: edge + "?access_token=" + token
// 	},
// 	function(err, httpResponse, body) {
// 		var parsedBody = JSON.parse(body);
// 		console.log(parsedBody.data[0].message);
// 	}
// );

request.post(
	{
		url: edge + "?access_token=" + token,
		form: { message: "This is a test!!!" }
	},
	function(err, httpResponse, body) {
		console.log(body)
	}
);
