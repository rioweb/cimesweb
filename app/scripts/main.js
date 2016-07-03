'use strict';
var main = function(){
  /*global someFunction Waypoint:true*/
/*eslint no-undef: "error"*/

/*eslint no-unused-vars: "error"*/
  /* global $ */
$('.nav li, .nav li a').click(function (e) {
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
            $(this).addClass('active');
});
if(window.matchMedia('(max-width: 480px)').matches) {
  var weight = $(window).height();
  $('.fullheight').css('height', weight);
  
};

$(function(){

    $('a[href*= "#" ]:not([href= "#" ])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if(target.length){
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

  var topoffset = 50;
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});


if (window.matchMedia('(min-width: 800px)').matches) {
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#inicio') {
      $('header nav').removeClass('hidden');
      $('header nav').fadeIn('slow').addClass('visible');
      $('.go-top').removeClass('hidden');
  }else{
      $('header nav').fadeOut('slow').removeClass('visible');
      $('header nav').addClass('hidden');
       $('.go-top').addClass('hidden');
  }
  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hasho = $(this).find('li.active a').attr('href');
    if(hasho !== '#inicio') {
      $('header nav').removeClass('hidden');
      $('header nav').fadeIn(400).addClass('visible');
      $('.go-top').removeClass('hidden');
  } else {
      $('header nav').fadeOut('slow').removeClass('visible');
      $('header nav').addClass('hidden');
      $('.go-top').addClass('hidden');
  }
  });
}else{
      $('header nav').removeClass('hidden');
}
  var waypoint = new Waypoint({
  element: document.getElementById('waypoint1'),
      handler: function() {

        $('.empresa,.empresa2,.empresa3').addClass('active');
      }
  });

  /* exported waypoint */
  $('#carousel-example-generic').carousel({
   interval: 50000
  });
   // Normalize Carousel Heights - pass in Bootstrap Carousel items.
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

    items.each(function() { //add heights to array
      heights.push($(this).height());
    });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height', tallest + 'px');
        });

    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height', '0'); //reset min-height
        });

        normalizeHeights(); //run it again
    });

};

$(function($){

    $(window).on('load', function(){
        $('#carousel-hero .item').carouselHeights();
    });
});
};
var progress = setInterval(function () {
    var $bar = $('#bar');

    if ($bar.width() >= 600) {
        clearInterval(progress);
    } else {
        $bar.width($bar.width() + 60);
    }
    $bar.text($bar.width() / 6 + '%');
    if ($bar.width() / 6 === 100){
      $bar.text('Cargando ... ' + $bar.width() / 6 + '%');
    }
}, 800);

$(window).load(function() {
  $('#bar').width(600);
  $('.loader').fadeOut(3000);
});

$(document).ready(main);
