// Drag Screen Left & Right
// Draggable.create("#content-container", {
 //    bounds:"#home",
	// allowNativeTouchScrolling:true,
 //    type:"x"
 //    }
// )

// Scrolling Behavior
var w = window.innerWidth;

if (w > 993) {
	TweenMax.set("body", {overflowY:'scroll'});

	var scrollSpeed = 0.75;
	var scrollHeight = 10000;

	TweenMax.set("body", {height:scrollHeight, overflowY:'scroll'});

	$(document).on("scroll", function (){
		const pixels = $(document).scrollTop();
		TweenMax.to('#content-container', 1, {x:-0.5 * pixels})
	})
}

// Mobile Nav Toggle
$(document).ready(function(){
	$('#mobileNavTrigger').click(function(){
		$(this).toggleClass('open');
        $('#mobileNavMenu').fadeToggle();
	});
});
