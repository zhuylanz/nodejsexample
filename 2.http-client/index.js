var request = require("request");
var fs = require("fs");
var exec = require("child_process").exec;

// tải 1 file sách pdf và lưu thành sach1.pdf
function downloadABook() {
	var urlToDownload =
		"https://sachvui.com/sachvui-686868666888/ebooks/2019/pdf/Sachvui.Com-kinh-nghiem-thanh-cong-cua-ong-chu-nho-lao-mac.pdf";

	exec("curl " + urlToDownload + " > file2.pdf");
}

function downloadSachVuiBooks() {
	var sachVuiIndex = request("https://sachvui.com/", function(
		err,
		response,
		body
	) {
		// Lấy links các thể loại trong trang chủ
		var linksLevel1 = body.match(
			/https:\/\/sachvui.com\/the-loai.{5,20}html/g
		);
		console.log(linksLevel1);
		for (var i = 0; i < linksLevel1.length; i++) {
			var link = linksLevel1[i];
			request(link, function(err, response, body) {
				var linksLevel2 = body.match(
					/https:\/\/sachvui\.com\/ebook.+\.html}/g
				);
			});
		}
	});
}

// bỏ dấu comment dòng dưới để thực thi hàm muốn thử
// downloadABook()
downloadSachVuiBooks();
