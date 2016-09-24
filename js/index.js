$(".yes-button").each(function(){
	$(this).click(emailMe);
});

window.onload = setSkillContainerHeights;
window.onresize = setSkillContainerHeights;
$(window).on("orientationchange", setSkillContainerHeights);


function emailMe(){
	window.location.href = "mailto:kavin.a.subramanyam@gmail.com?subject=What\'s up\?";
}

// ffs css
function setSkillContainerHeights(){
	$("#largest-skill-container").css("height", "auto");
	var largestContainerHeight = $("#largest-skill-container").css("height");
	$(".skill-section-container").each(function(){
		$(this).css("height", largestContainerHeight);
	});
}

