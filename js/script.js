$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

})

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Full Stack Software Engineer.", "Web Developer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);
	
	function stickyNavigation() {
	
		var body = $("body");
	
		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	
	};

    $('.owl-carousel').owlCarousel({
	    loop:true,
        items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	});

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
        	$(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var skillsTopOffset = $('.skillsSection').offset().top;

    $(window).scroll(function() {
    	if(window.scrollY > skillsTopOffset - $(window).height() + 200) {

    		$('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                	$(this.el).find('.percent').text(Math.round(percent));
                }
            });
    	}
    });

    $("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});



});



document.addEventListener('DOMContentLoaded', function () {
  const jobTitles = document.querySelectorAll('.job-title');
  const jobDetails = document.querySelectorAll('.job-details');

  jobTitles.forEach(function (title) {
	title.addEventListener('click', function () {
	  // Remove active class from all job titles and details
	  jobTitles.forEach(title => title.classList.remove('active'));
	  jobDetails.forEach(detail => detail.style.display = 'none');

	  // Add active class to clicked job title and corresponding details
	  this.classList.add('active');
	  document.getElementById(this.getAttribute('data-job')).style.display = 'block';
	});
  });

  // Initialize the first tab as active
  if (jobTitles.length > 0) {
	jobTitles[0].click();
  }
});

document.addEventListener('DOMContentLoaded', function() {
	const resumeButton = document.querySelector('.resume-button');
	
	resumeButton.addEventListener('click', function() {
	  // Run any pre-download logic here, like analytics tracking
	  console.log('Resume downloaded');
	});
  });
  