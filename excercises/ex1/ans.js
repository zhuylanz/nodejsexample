var fs = require("fs");
var exec = require("child_process").exec;

var listFiles = fs.readdirSync("./");
var finalEmails = [];
var finalPhones = [];
var outputFileContent = "";

for (var i = 0; i < listFiles.length; i++) {
	var fileName = listFiles[i];
	var fileContent = fs.readFileSync("./" + fileName, "utf8");
	var email = fileContent.match(/\w+@\w+\.\w+/g);
	var phone = fileContent.match(/\d{10}/g);
	finalEmails.push(email);
	finalPhones.push(phone);
}

// beautify email output
outputFileContent += "Emails: \n";
finalEmails.forEach(function(email) {
	if (email) {
		outputFileContent += email + "\n";
	}
});
outputFileContent += "\n";

// beautify phone output:
outputFileContent += "Phones: \n";
finalPhones.forEach(function(phone) {
	if (phone) {
		outputFileContent += phone + "\n";
	}
});

fs.writeFileSync("./output.txt", outputFileContent);


// exec("cat *", function(err, stdout) {
// 	console.log(stdout);
// });