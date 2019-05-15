var express = require("express");
var app = express();
var port = 3001;

var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";
var dbName = "TestBlog";
var client = new MongoClient(dbUrl, { useNewUrlParser: true });

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.get("/post/:postId", function(req, res) {
	res.sendFile(__dirname + "/public/single.html");
});

app.get("/api/posts", function(req, res) {
	client.connect(function() {
		var db = client.db(dbName);

		var collection = db.collection("posts");
		collection.find().toArray(function(err, docs) {
			res.send(docs);
		});
	});
});

app.get("/api/post/:postId", function(req, res) {
	var postId = req.params.postId;

	client.connect(function() {
		var db = client.db(dbName);

		var collection = db.collection("posts");
		collection.findOne({ id: postId }, {}, function(err, doc) {
			res.send(doc);
		});
	});
});

app.listen(port, function() {
	console.log("Example app listening on port " + port);
});
