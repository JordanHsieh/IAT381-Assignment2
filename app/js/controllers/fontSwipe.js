APP.controller('FontSwipeCtrl', function ($scope) {

	var fonts = ['font-roboto', 'font-eb-garamond', 'font-slabo', 'font-oswald', 'font-lora',
				'font-dancing-script', 'font-arvo', 'font-cac-champagne', 'font-open-sans', 'font-raleway',
				'font-sail', 'font-quicksand'];

	// var blue      = document.getElementById('blue');
	var text 	  = document.getElementById('sampleText');
	var hammer    = new Hammer.Manager(text);
	var swipe     = new Hammer.Swipe();

	hammer.add(swipe);

	var fontCount = 0;

	hammer.on('swipeleft', function(){

		// $(blue).animate({ip: "-=100"}, 500)
		$("#event").text("swipe left " + fonts[fontCount] + " " + fontCount);
		$(text).toggleClass(fonts[fontCount]);
		fontCount++;
		if(fontCount > 11)
		{
			fontCount = 0;
		}
	});

	hammer.on('swiperight', function(){
	   // $(blue).animate({down: "+=100"}, 500) 
	   $("#event").text("swipe right " + fonts[fontCount] + " " + fontCount);
	   $(text).toggleClass(fonts[fontCount]);
	   fontCount--;
	   if(fontCount < 0)
	   {
	   	fontCount = 11;
	   }
	   
	});

});