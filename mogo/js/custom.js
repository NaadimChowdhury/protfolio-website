$(document).ready(function(){
				//custom scrollBar
			 $(".card-body p").mCustomScrollbar();
			 	//owl carousel
				$('.owl-carousel').owlCarousel({
				    loop:true,
				    nav:true,
				    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
				    autoplay:true,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:1
				        },
				        1000:{
				            items:1
				        }
				    }
				});
				//owl carousel end here

				//wow js area
				 new WOW().init();

			 $(function(){
	 
	  		$('.circlechart').circlechart();
	 
			});//   wow js end Here

			 //counter js
				 	
		 		$('.counter').counterUp({
		            delay: 10,
		            time: 2000
		        });

		        //scroll to top area

		        $(window).scroll(function(){
		        	var sToTop = $(document).scrollTop();
		        	if(sToTop > 500){
		        		$('.scroll-top').fadeIn(500);
		        	}
		        	else{
		        		$('.scroll-top').fadeOut(500);
		        	}
		        });
		        	$('.scroll-top').click(function(){
		        		$('html, body').animate({
		        			scrollTop: 0
		        		}, 1000);
		        	}); // scroll to top area end

		        	//scroll nav area
		        	$('#nav').onePageNav({
		        		scrollSpeed: 2000
		        	});//scroll nav area end

		});//documant ready end