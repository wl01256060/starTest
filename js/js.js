$("#gas").on("click",function(){
	$("#gas").animate({
		left: "+=1600",
		top: "+=70",
	}, 1000, function(){
		$("#gas").fadeOut();
		$("#bag").animate({
			width: "+=15",
		},200, function(){
			$("#bag").animate({
				width: "-=15"
			})
		})		
	})
});

$("#right_arrow").on("click", function(){
	$("#kitchen").css("left","-=50")
})

