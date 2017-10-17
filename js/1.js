 $(document).ready($(function(){
  new WOW().init();

  
  function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;
  
  if(!offset) { var offset = 0; }
 
  $(window).scroll(function() {
      didScroll = true;
  }); 
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();
 
        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

$(window).scroll(function(event) {
    var vitri=$(window).scrollTop();
    console.log(vitri);
  
  if (vitri>400) {
      $("#fix-one").removeClass('dichlen').addClass('dichxuong');
      $(".fixed-left").addClass('opacity-1');
      $(".fixed-right").addClass('opacity-1');

    }else{
      $("#fix-one").removeClass('dichxuong').addClass('dichlen');
      $(".fixed-left").removeClass('opacity-1');
      $(".fixed-right").removeClass('opacity-1');
   }
if (vitri>400) {
      $("#fix-one").removeClass('dichlen').addClass('dichxuong');
      $(".fixed-left").addClass('opacity-1');
      $(".fixed-right").addClass('opacity-1');

    }else{
      $("#fix-one").removeClass('dichxuong').addClass('dichlen');
      $(".fixed-left").removeClass('opacity-1');
      $(".fixed-right").removeClass('opacity-1');
   }

    onViewport("")
  })

  $(".fixed-right").click(function () {
   $('html, body').animate({scrollTop:0}, 500) ;
  });

  // cho about
  $("#hoverbtn_about").mouseenter(function () {
    $("#other_about").css("display","inline");
    $("#other_about").animate({height: "200px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other_about").css("display","none");
    $("#other_about").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });
$("#hoverbtn2_about").mouseenter(function () {
    $("#other2_about").css("display","inline");
    $("#other2_about").animate({height: "200px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other2_about").css("display","none");
    $("#other2_about").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });

  //cho Contact
  $("#hoverbtn_contact").mouseenter(function () {
    $("#other_contact").css("display","inline");
    $("#other_contact").animate({height: "150px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other_contact").css("display","none");
    $("#other_contact").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });
$("#hoverbtn2_contact").mouseenter(function () {
    $("#other2_contact").css("display","inline");
    $("#other2_contact").animate({height: "150px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other2_contact").css("display","none");
    $("#other2_contact").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });

  //cho other
  $("#hoverbtn_other").mouseenter(function () {
    $("#other_other").css("display","inline");
    $("#other_other").animate({height: "200px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other_other").css("display","none");
    $("#other_other").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });
$("#hoverbtn2_other").mouseenter(function () {
    $("#other2_other").css("display","inline");
    $("#other2_other").animate({height: "200px"},{ duration: 200, queue: false }).animate({opacity: "1"},{ duration: 200, queue: false });
  }).mouseleave(function  () {
    $("#other2_other").css("display","none");
    $("#other2_other").animate({height: "0"},{ duration: 200, queue: false }).animate({opacity: "0"},{ duration: 200, queue: false });
  });

    
})  
)
 