var printing = false;

function resizeSlides() {
	scale = Math.min($(window).width() / $(".slides").width(), $(window).height() / $(".slides").height())

	$(".slides").css("-ms-transform", "scale("+scale+","+scale+")");
	$(".slides").css("-webkit-transform", "scale("+scale+","+scale+")");
	$(".slides").css("transform", "scale("+scale+","+scale+")");
}

function moveSlidesForward() {
	current = $(".active");
	if (!current.hasClass("last")) {
		$(".active").next().addClass("active");
		current.removeClass("active");
	}
}

function moveSlidesBackwards() {
	current = $(".active");
	if (!current.hasClass("first")) {
		$(".active").prev().addClass("active");
		current.removeClass("active");
	}
}

$(document).ready(function(){
	var queryDict = {}
	location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

	printing = !(("printing" in queryDict) && (queryDict.printing == "false"));

	if (!printing) {
		$(".slides").addClass("not-printing");
		var slides = $(".slides section");
		$(slides[0]).addClass("active").addClass("first");
		$(slides[slides.length-1]).addClass("last");

		resizeSlides();
	} else {
		var slides = $(".slides section");
		n = 0;
		for (var i = 1; i < slides.length; i++) {
			$("div.overlay").clone().css("top", i * $(".slides").height()).appendTo( ".slides" );
		}
	}
})

$(window).resize(function(){
	if (!printing) {
		resizeSlides();
	}
})

$(window).keydown(function (event) {
	if (event.which in [32, 37, 39]) {
		event.preventDefault();
	}

	// space: 32
	// left: 37
	// right: 39
	if ((event.which == 32) || (event.which == 39)) {
		moveSlidesForward();
	} else if (event.which == 37) {
		moveSlidesBackwards();
	}
});