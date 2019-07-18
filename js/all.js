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

  });