$(document).ready(function(){
		// 選單切換功能
		isShow = !isShow;
		var isShow = false;
		$(".showmenu").click(function () {
			if (isShow == false) {
				$("body").toggleClass("menu-show");
				$(".fa-bars").attr("class", "fas fa-times");
				isShow = true;
			} else {
				$("body").toggleClass("menu-show");
				$(".fa-times").attr("class", "fas fa-bars");
				isShow = false;
			}
		});
		
		// 下拉式選單功能
		$('.dropdown').click(function () {
			/* Act on the event */
			// event.preventDefault();
			$(this).toggleClass('active');
			$(this).find('ul').slideToggle();
		});

		// 回到上方選單列效果
		$(".top").click(function () {
			$("html,body").animate({ scrollTop: 0 }, 700);
		});

		
		$(window).scroll(function() {
			$(".animated").each(function() {
				var position = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > position - windowHeight) {
					$(this).addClass('fadeIn');
				}
			});
		});

		$(window).scroll(function() {
			var winTop = $(window).scrollTop();
			if (winTop >= 30) {
				$('body').addClass('fixed-nav');
			} else {
				$('body').removeClass('fixed-nav');
			}
		});

		//   建案輪播
		$(".main-hot").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			arrow: true,
			dot: false,
			responsive: [{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrow: false,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
  });