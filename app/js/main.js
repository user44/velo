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

	//matchheight
	// const mq = window.matchMedia( "(min-width: 768px)" );
	// if (mq.matches) {
	// 	$('.order-box .title').matchHeight({byRow: false});
	// 	$('.order-box .price-box').matchHeight({byRow: false});
	// }

	//Ajax sendform
	$("form.form").submit(function(e) {
		var th = $(this);
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize(),
			error: function() {
				setTimeout(function() {
					swal({
						title: "Ошибка!",
						text: "Не удалось отправить сообщение.",
						html: true,
						type: "error",
						// customClass: "zoom-anim animated-custom",
						confirmButtonText: "Ok",
						confirmButtonColor: "#26A69A",
						// animation: "false",
					});
					// Done Functions
				}, 1000);
			}
		}).done(function() {
			// alert("Спасибо за заявку!");
			setTimeout(function() {
				swal({
					title: "Отлично!",
					text: "Мы получили заявку и постараяемся связаться с тобой в ближайшее время))",
					html: true,
					type: "success",
					// customClass: "zoom-anim animated-custom",
					confirmButtonText: "Ok",
					confirmButtonColor: "#26A69A",
					// animation: "false",
				});
				// Done Functions
				th.trigger("reset");
			}, 1000);

			$.magnificPopup.close({
          items: {
              src: '#participate-popup',
              // src: '#leave-request-popup',
          },
          type: 'inline'
      });
		});
	});

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
