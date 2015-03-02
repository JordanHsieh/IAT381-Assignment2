APP.controller('FontSwipeCtrl', function ($scope) {

	// var fonts = ['font-roboto', 'font-eb-garamond', 'font-slabo', 'font-oswald', 'font-lora',
	// 			'font-dancing-script', 'font-arvo', 'font-cac-champagne', 'font-open-sans', 'font-raleway',
	// 			'font-sail', 'font-quicksand'];

	var fonts = ['comic', 'roboto', 'eb-garamond', 'slabo', 'oswald', 'lora',
				'dancing-script', 'arvo', 'cac-champagne', 'open-sans', 'raleway',
				'sail', 'quicksand'];


	var images = ['splashPage' , 'photo1', 'photo2', 'photo3', 'photo4', 'photo5'];

	var container = document.getElementById('sampleContainer');
	var hammer    = new Hammer.Manager(container);
	var swipe     = new Hammer.Swipe();

	var text 	  = document.getElementById('sampleText');
	var bgImage	  = document.getElementById('backgroundImage');


	hammer.add(swipe);

	var fontCount = 0;
	var imageCount = 0;

	hammer.on('swipeleft', function(){
		// $(blue).animate({ip: "-=100"}, 500)
		$("#event").text("swipe left " + fonts[fontCount] + " " + fontCount);
		// toggle off
		$(text).toggleClass(fonts[fontCount]);
		fontCount++;
		if(fontCount > 11)
		{
			fontCount = 1;
		}
		$(text).toggleClass(fonts[fontCount]);
		$('#sampleText').text('Sample Text ' + fonts[fontCount]);
	});

	hammer.on('swiperight', function(){
	   // $(blue).animate({down: "+=100"}, 500) 
	   $("#event").text("swipe right " + fonts[fontCount] + " " + fontCount);
	   // toggle off
	   $(text).toggleClass(fonts[fontCount]);
	   fontCount--;
	   if(fontCount < 1)
	   {
	   	fontCount = 11;
	   }
	   $(text).toggleClass(fonts[fontCount]);
	   $('#sampleText').text('Sample Text ' + fonts[fontCount]);
	});

	hammer.on('swipeup', function(){
		$("#event").text("swipe up");
		// toggle off the class before
		$(bgImage).toggleClass(images[imageCount]);
		imageCount++;
		if(imageCount > 4)
		{
			imageCount = 1;
		}
		$(bgImage).toggleClass(images[imageCount]);
	});

	hammer.on('swipedown', function(){
		$("#event").text("swipe down");
		// toggle off the class before
		$(bgImage).toggleClass(images[imageCount]);
		imageCount--;
		if(imageCount < 1)
		{
			imageCount = 4;
		}
		$(bgImage).toggleClass(images[imageCount]);
	});


});