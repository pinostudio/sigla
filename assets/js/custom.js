// Horizontal 
Draggable.create("#content-container", {
    bounds:"#home",
		allowNativeTouchScrolling:false,
    type:"x"
    }
)

TweenMax.set("body", {overflowY:'scroll'});

var scrollSpeed = 0.75;
var scrollHeight = 10000;

TweenMax.set("body", {height:scrollHeight, overflowY:'scroll'});

$(document).on("scroll", function (){
	const pixels = $(document).scrollTop();
	TweenMax.to('#content-container',1,{x:-0.5 * pixels})
})