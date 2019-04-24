const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

var htmlTemplate = fs.readFileSync("./public/search.html", "utf8");

app.get("/books", function(req, res) {
	var searchString = req.query.q;
	var books = db.books;

	for (var i = 0; i < books.length; i++) {
		var book = books[i];
		if (book.noAccentName.match(searchString)) {
			var bookFilePath = __dirname + "/" + book.filePath;

			console.log(bookFilePath);
			res.sendFile(bookFilePath);
			break;
		}
	}
});

app.listen(8888, function() {
	console.log("Hello-World Server is running on port 8888");
});
