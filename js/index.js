$(".yes-button").each(function(){
	$(this).click(emailMe);
})

function emailMe(){
	window.location.href = "mailto:kavin.a.subramanyam@gmail.com?subject=What\'s up\?";
}