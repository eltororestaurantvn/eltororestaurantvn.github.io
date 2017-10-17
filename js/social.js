 $(function(){
 	$(window).scroll(function(event) {
 		console.log('ban vua cuon chuot');

 		var vitri = $(window).scrollTop();
 		console.log(vitri);
 		if(vitri >=400) {
 			$('.menutren').addClass('menufixed');
 		}
 		if(vitri >=1200) {
 			$('.khoianhiphone').addClass('di-vao-tu-ben-phai');
 		}
 		if(vitri>=1800) {
 			$('.khoicompleteyourday').addClass('lende');
 		}
 	});
 	$('.ndmotkhoi').slideUp();
 	$('a.nav-link').click(function(event) {
 		$(this).next().slideToggle();
 	});
 	$('.dong').click(function(event) {
 	$('.login').addClass('donglai');
 	$('.nenden').addClass('donglai');
 	});
 	
})  
 