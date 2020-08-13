$(document).ready(function () {
	svg4everybody({});

	function ibg() {

		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	ibg();

	$('.header__burger').click(function (event) {
		$('.header__burger, .header__wrap-nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	});




	$('.building__slider').slick({
		infinite: true,
		mobileFirst: true,
		settings: "unslick",
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
	});


	$('.advantages__row').slick({
		infinite: true,
		mobileFirst: true,
		settings: "unslick",
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		],
	});


	$('.projects__wrap').slick({
		infinite: true,
		mobileFirst: true,
		settings: "unslick",
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings: "unslick"
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		],
	});

	$('.clients__wrap').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
		prevArrow: '<div class="prew"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',

	});









});

const counts = () => {
	let countSpan = document.querySelectorAll(".s-count__num");

	const speed = 40;

	countSpan.forEach((el) => {
		const countNum = +el.getAttribute("data-num-count");
		const updataCount = setInterval(() => {
			const spanCont = +el.innerText;
			const increaseBy = countNum / speed;

			spanCont < countNum
				? (el.textContent = Math.ceil(spanCont + increaseBy))
				: clearInterval(updataCount);
		}, 50);
	});
};

var wow = new WOW({
	boxClass: "wow", // animated element css class (default is wow)
	animateClass: "animated", // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		counts();
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true, // reset animation on end (default is true)
});
wow.init();