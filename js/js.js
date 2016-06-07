$("#gas").on("tap",function(){
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

$("#right_arrow").on("switchleft", function(){
	$("#kitchen").css("left","-=50")
})

