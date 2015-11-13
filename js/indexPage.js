"use strict";
	
	$(document).ready(function() {

		$(".aboutNav").on("click", function(e) {
			$(".currentContent").fadeOut(100);
			$(".currentContent").removeClass("currentContent");
			$(".aboutMe").fadeIn(1000);
			$(".aboutMe").addClass("currentContent");

		});
		
		$(".workNav").on("click", function(e) {
			$(".currentContent").fadeOut(100);
			$(".currentContent").removeClass("currentContent");
			$(".work").fadeIn(1000);
			$(".work").addClass("currentContent");
		});
		
		$(".contactNav").on("click", function(e) {
			$(".currentContent").fadeOut(100);
			$(".currentContent").removeClass("currentContent");
			$(".contact").fadeIn(1000);
			$(".contact").addClass("currentContent");
		});

		$(".resumeNav").on("click", function(e) {
			$(".currentContent").fadeOut(10);
			$(".currentContent").removeClass("currentContent");
			$("#resumeContent").fadeIn(1000);
			$("#resumeContent").addClass("currentContent");
		});
	});