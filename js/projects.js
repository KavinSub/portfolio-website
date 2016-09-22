function setup(){
	generateProjectDetailEffects();
}

function generateProjectDetailEffects(){
	$(".project").each(function(index){

		var projectCover = $(this).children(".project-cover");
		var projectContent = $(projectCover).children(".project-content");
		var currentImage = $(this).css('background-image');

		$(this).hover(function(){ // Hover on function
			projectContent.css('opacity', '1.0');
			projectCover.css('background-color', '#333');
		}, function(){ // Hover off function
			projectContent.css('opacity', '0.0');
			projectCover.css('background-color', 'rgba(255, 255, 255, 0.0)');
		});
	});
}

window.onload = setup;