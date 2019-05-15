var currentUrl = window.location.pathname;
var postId = currentUrl.substr(6);

$.ajax("/api/post/" + postId).done(function(response) {
	var titleHolder = $(".entry-title");
	var contentHolder = $(".entry-content");

	titleHolder.text(response.title);
	contentHolder.text(response.content);
});
