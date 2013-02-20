

// http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
/* $("#button").click(function() {
     $('html, body').animate({
         scrollTop: $("#elementtoScrollToID").offset().top
     }, 2000);
 }); */

$("#down").click(function() {
  alert("Handler for .click() called.");
});

$(document).ready(function() {
/*	$(window).scroll(function(){            
	    $("#open").animate({ "top": "-=300px" }, 1000);
	}); */
	
	// function scroll() {
	    // $("#logo").animate({ "top": "+=180px" }, 1000);
	// $("#open").animate({ 'top': "+=450px"}, 1000);
	// }

/* PORT - scroll down to section 
 $("#port").click(function() {
	console.log('ready');
     $('html, body').animate({
         scrollTop: $("#projects").offset().top
     }, 1000);
	console.log('scroll'); 
 }); */

 $("#home").click(function() {
	$('#projects').fadeOut("slow");
	 $('#about-me').fadeOut("slow"); 
		setTimeout(function() {
			$('#slider').fadeIn("slow");
		},500)
     
	return false;
 });

 $("#port").click(function() {
	$('#slider').fadeOut("slow");
	 $('#about-me').fadeOut("slow"); 
		setTimeout(function() {
			$('#projects').fadeIn("slow");
		},500)
     
	return false;
 });

 $("#about").click(function() {
	$('#projects').fadeOut("slow");
	 $('#slider').fadeOut("slow");
		setTimeout(function() {
			$('#about-me').fadeIn("slow");
		},500)
	
	return false;
 });

 $("#down").click(function() {
	console.log('ready');
     $('html, body').animate({
         scrollTop: $("#end").offset().top
     }, 2000);
	console.log('scroll'); 
 });


/** can delete **/
	$('.port_item_link').css({opacity: "0"});
	$("#portfolio_list li").mouseenter(
	  function () {
		$(this).find('.attachment-post-thumbnail').animate({opacity: "0.50"}, 200);
		$(this).find('.port_item_link').animate({opacity: "1.0"}, 300);
	  });
	  
	$("#portfolio_list li").mouseleave(
	  function () {
		$(this).find('.attachment-post-thumbnail').animate({opacity: "1.0"}, 300);
		$(this).find('.port_item_link').animate({opacity: "0"}, 200);
	});
	function checkWidth () {
 if ($(window).width() > 480) {
			$('.web_slider').cycle({
			fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			speed: '500',
			});
     } else {
			$('.web_slider').cycle('destroy');
			$('#home_feature').cycle('destroy');
		}
	}
 // check the window size when page loads
 checkWidth();

 // check on resize
 $(window).resize(function() {
     checkWidth();
 });
/*** up to here **/

});