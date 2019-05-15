function a(callback) {
	setTimeout(function() {
		console.log("An Com");
		callback();
	}, 2000);
}

function b() {
	console.log("Uong nuoc cam");
}

a(b);
