$.ajax("/api/posts").done(function(response) {
	var postHolders = $(".entry-title a");
	for (var i = 0; i < response.length; i++) {
		var postHolder = postHolders[i];

		$(postHolder).text(response[i].title);
		$(postHolder).attr("href", "/post/" + response[i].id);
	}

	var excerptHolder = $(".excerpt");
	excerptHolder.text(response[0].excerpt);
});
