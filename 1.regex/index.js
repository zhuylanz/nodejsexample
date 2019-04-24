var fs = require("fs");

var fileContent = fs.readFileSync("./hotel-california.txt", "utf8");

// read file:
console.log(file); // file is a String

// text analyzer:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < alphabet.length; i++) {
	var character = alphabet[i];
	var count = 0;

	for (var j = 0; j < file.length; j++) {
		if (fileContent[j] === character) {
			count++;
		}
	}

	console.log("> character " + character + " : " + count + " | " + Math.round((count * 100) / fileContent.length) + "%");
}

// extracting data:
var fileContent2 = fs.readFileSync('./facebook-post.txt', 'utf8');

var email = fileContent2.match(/\w+@\w+\.\w+/g)
var phone = fileContent2.match(/\d{10}/g)
// console.log(email)
// console.log(phone)
// think: how to find address?
