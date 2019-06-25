var request = require("request");
var token =
	"EAAGtiBLb0cgBAHDYkc0ycSK1WmHq9fAl75MI2YSFPdyywhjP6XtzvNcto683Cxrr7kqR0wQsqMt4yhaM8uJGQT3QK22lKF0ZAK3BC0wyoWaNRCibhzqFpCto17j0VEKR9i2hiKVwkn7VRZCfgJ3djNHokRZCI85uI9jK1fXiBUYYlhXl2j14eaTS5D8ShQR9lO5QOp23gZDZD";
var edge = "https://graph.facebook.com/v3.3/425075107846518/feed";

request.get(
	{
		url: edge + "?access_token=" + token
	},
	function(err, httpResponse, body) {
		var parsedBody = JSON.parse(body).data;
		for (var i = 0; i < parsedBody.length; i++) {
			console.log(parsedBody[i].message);
		}
	}
);

request.post(
	{
		url: edge + "?access_token=" + token,
		form: { message: "This is a test!!!" }
	},
	function(err, httpResponse, body) {
		console.log(body);
	}
);
