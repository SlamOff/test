$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	$('.has_submenu').hover(function(){
		$(this).find('.header__nav__menu__submenu__next').css('display', 'block')
	},
	function(){
		$(this).find('.header__nav__menu__submenu__next').css('display', 'none');
	});
	function resizeMenu(){
		if($(window).width() < 1200) {
			$('.header__nav__login').appendTo('.header__contact');
		}
		else {
			$('.header__nav__login').appendTo('.header__nav');
		}
	}
	resizeMenu();
	$(window).resize(resizeMenu);
	function resizeSlider(){
		if($(window).width() < 600) {
			$('.content .content__slider_wrapper .slider img').attr('src', 'img/slider_2.jpg');
		}
		else {
			$('.content .content__slider_wrapper .slider img').attr('src', 'img/slider_1.jpg');
		}
	}
	resizeSlider();
	$(window).resize(resizeSlider);
	/* components */

		$('.slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			prevArrow: '.prev',
			nextArrow: '.next',
			slidesToShow: 1,
			customPaging: function(slider, i) {
				return '<div class="dot"></div>';
			},
			slidesToScroll: 1
		});
	/* components */
	$('.toggle_btn').click(function(){
		$(".sandwich").toggleClass("active");
		if($('.header__nav').is(':visible')) {
			$('.header__nav').slideUp(300);
		} else {
			$('.header__nav').slideDown(300);
		};
	});
	$('.mobile_menu__items ul li').click(function(){
		var dataType = $(this).attr('data-type');
		console.log(this);
		switch (dataType){
			case 'search': $('.header__search').slideToggle(100);
			break;
			case 'basket': $('.basket').slideToggle(100);
			break;
			case 'login': $('.login').slideToggle(100);
			break;
			case 'phone': $('.header__contact--phone').slideToggle(100);
			break;
		}
	});
});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



