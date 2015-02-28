APP.controller('FontSwipeCtrl', function ($scope) {

	var fonts = ['font-roboto-slab', 'font-eb-garamond'];

	var blue      = document.getElementById('blue');
	var text 	  = document.getElementById('sampleText');
	var hammer    = new Hammer.Manager(blue);
	var swipe     = new Hammer.Swipe();

	hammer.add(swipe);

	hammer.on('swipeleft', function(){
	   $(blue).animate({left: "-=100"}, 500)
	   $("#event").text("swipe left " + fonts[0]);
	   $(text).toggleClass('font-roboto-slab');
	});

	hammer.on('swiperight', function(){
	   $(blue).animate({left: "+=100"}, 500) 
	   $("#event").text("swipe right " + fonts[1]);
	   $(text).toggleClass('font-eb-garamond');
	});

});