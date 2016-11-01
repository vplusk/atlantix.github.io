$(function() {

	$('#submitBtn').on('click', function() {
		$('#nameField').addClass('animated shake');
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.mobile-nav-toggle').on('click', function(){
		var status = $(this).hasClass('is-open');
		if(status){ $('.mobile-nav-toggle, .main-menu').removeClass('is-open'); }
		else { $('.mobile-nav-toggle, .main-menu').addClass('is-open'); }
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	// Video
	var video = document.getElementById("demo_video");

	// Buttons
	var playButton = document.getElementById("play-pause");
	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "<img src='img/pause.png' style='opacity:0.1' />";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "<img src='img/play.png' />";
		}
	});

});

