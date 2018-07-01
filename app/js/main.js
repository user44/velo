$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
		// $(".count_element").on("click", (function() {
		// 	ga("send", "event", "goal", "goal");
		// 	yaCounterXXXXXXXX.reachGoal("goal");
		// 	return true;
		// }));

	//Chrome Smooth Scroll
		// try {
		// 	$.browserSelector();
		// 	if($("html").hasClass("chrome")) {
		// 		$.smoothScroll();
		// 	}
		// } catch(err) {};	

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Ajax sendform
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//matchheight
	// const mq = window.matchMedia( "(min-width: 768px)" );
	// if (mq.matches) {
	// 	$('.order-box .title').matchHeight({byRow: false});
	// 	$('.order-box .price-box').matchHeight({byRow: false});
	// }

	// m tabs
	$('.tabs').tabs();

	//magnific-popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
	

	
	
});


// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
