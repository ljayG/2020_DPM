$(document).ready(function() {
    // 스크롤 바로이동
   $(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#quickMenu').fadeIn();
		} else {
			$('#quickMenu').fadeOut();
		}
	});

    // scroll body to 0px on click
	$('#btnTop').bind("click", function(e) {
		// Prevents the default action to be triggered.
		e.preventDefault();

		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

    // 스크롤 바로이동
    $(".anchor").click(function(e){
        // Prevents the default action to be triggered.
        e.preventDefault();

        $('html,body').animate({
            scrollTop : $(this.hash).offset().top-120
        }, 500);
    });

	// $('#daysSlider').slick({
	// 	arrows: false,
	// 	slidesToShow: 3,
	// 	initialSlide: initSlider, // 현 강사 위치 슬라이드 처음으로 위치 0~부터 시작
	// });

	$("#popShare").popup();
});