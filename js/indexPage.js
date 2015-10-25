"use strict";
	
	$(document).ready(function() {

		$("#about").on("click", function(e) {
			$(".currentpage").fadeOut(100);
			$(".currentpage").removeClass();
			$("#aboutMeContent").fadeIn(1000);
			$("#aboutMeContent").addClass("currentpage");

		});
		
		$("#work").on("click", function(e) {
			$(".currentpage").fadeOut(100);
			$(".currentpage").removeClass();
			$("#projectContent").fadeIn(1000);
			$("#projectContent").addClass("currentpage");
		});
		
		$("#contact").on("click", function(e) {
			$(".currentpage").fadeOut(100);
			$(".currentpage").removeClass();
			$("#contactMe").fadeIn(1000);
			$("#contactMe").addClass("currentpage");
		});

		$("#resume").on("click", function(e) {
			$(".currentpage").fadeOut(10);
			$(".currentpage").removeClass();
			$("#resumeContent").fadeIn(1000);
			$("#resumeContent").addClass("currentpage");
		});
	});