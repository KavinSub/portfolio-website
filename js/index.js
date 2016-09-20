$("#no-button").click(function(){
	$(this).html("Yes");
	$(this).click(emailMe);
});

$("#yes-button").click(emailMe);

function emailMe(){
	window.location.href = "mailto:kavin.a.subramanyam@gmail.com?subject=What\'s up\?";
}