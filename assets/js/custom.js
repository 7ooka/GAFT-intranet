$( document ).ready(function() {

  var darkModeCookie = getCookie('darkMode');
	console.log(darkModeCookie);
	if (darkModeCookie == null || darkModeCookie == "0"){
		setLightMode();
	} else {
		 setDarkMode();
	}

    let arrow = [
      '<img src="/Style Library/ar-sa/assets/images/home/Arrow-Right.svg" />',
      '<img src="/Style Library/ar-sa/assets/images/home/Arrow-Left.svg" />',
      ]
      let arrow2 = [
        '<img src="/Style Library/ar-sa/assets/images/home/Arrow-Right2.svg" />',
        '<img src="/Style Library/ar-sa/assets/images/home/Arrow-Left2.svg" />',
        ]
      let arrow3 = [
        '<img src="/Style Library/ar-sa/assets/images/home/vote-Arrow-Right.svg" />',
        '<img src="/Style Library/ar-sa/assets/images/home/vote-Arrow-Left.svg" />',
        ]



    // let arrow = [
    //   '<img src="../assets/images/home/Arrow-Right.svg" />',
    //   '<img src="../assets/images/home/Arrow-Left.svg" />',
    //   ]
    //   let arrow2 = [
    //     '<img src="../assets/images/home/Arrow-Right2.svg" />',
    //     '<img src="../assets/images/home/Arrow-Left2.svg" />',
    //     ]
    //   let arrow3 = [
    //     '<img src="../assets/images/home/vote-Arrow-Right.svg" />',
    //     '<img src="../assets/images/home/vote-Arrow-Left.svg" />',
    //     ]


   
    // end ready
    $('.owl-carousel-banner').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        navText: arrow,
        rtl: true,
        items:1,
        dots:false
    })


    $('.owl-carousel-fav').owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      navText: arrow2,
      rtl: true,
      items:3,
      dots:false,
      
      responsive : {
        // breakpoint from 0 up
        0 : {
          items:2,
        },
        // breakpoint from 480 up
        480 : {

        },
        // breakpoint from 768 up
        768 : {
          items:2,
        },
        1650 : {
          items:3,
        }
    }

  })


  $('.owl-carousel-new').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    navText: arrow2,
    rtl: true,
    items:5,
    dots:false,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items:2,
      },
      // breakpoint from 480 up
      480 : {

      },
      // breakpoint from 768 up
      768 : {
        items:4,
      },
      1400 : {
        items:5,
      }
    }
})


$('.owl-carousel-com').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  navText: arrow2,
  rtl: true,
  items:2,
  dots:false
})




$('.owl-carousel-most').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  navText: arrow2,
  rtl: true,
  items:5,
  dots:false,
  responsive : {
    // breakpoint from 0 up
    0 : {
      items:2,
    },
    // breakpoint from 480 up
    480 : {

    },
    // breakpoint from 768 up
    768 : {
      items:4,
    },
    1400 : {
      items:5,
    }
  }

})


$('.owl-carousel-sys').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  navText: arrow2,
  rtl: true,
  items:5,
  dots:false,
  responsive : {
    // breakpoint from 0 up
    0 : {
      items:2,
    },
    // breakpoint from 480 up
    480 : {

    },
    // breakpoint from 768 up
    768 : {
      items:4,
    },
    1400 : {
      items:5,
    }
  }
})


$('.owl-carousel-offers').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  navText: arrow2,
  rtl: true,
  items:1,
  dots:false
})


$('.owl-carousel-news').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  navText: arrow,
  rtl: true,
  items:1,
  dots:false
})


$('.owl-carousel-vote').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  navText: arrow3,
  rtl: true,
  items:1,
  dots:false
})


var world = document.getElementsByTagName("path");
for (var i = 0; i < world.length; i++) {
	var country = world[i];
	country.setAttribute("data-toggle", "tooltip");
	country.setAttribute("data-placement", "top");
	country.setAttribute("title", country.getAttribute("id"));
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})













    AOS.init({
        duration: 1000,
    });

    $("a.fancybox").fancybox({

  });
  $("a.fancyboxVideo").fancybox({
      // openEffect	: 'none',
      // closeEffect	: 'none',
      type: "iframe",
      scrolling: 'no',
      padding:0,
      // ratio: 16 / 10,
      // width: 640,
      // height: 360,
      youtube: {
          autoplay: 1, // enable autoplay
      }
  });







  $(".social-share ul li").hover(function () {
    console.log("hover");
    $(this).toggleClass("hoverd");
  });
  
  $(".sub-menu-parent").on("click", function (e) {
  console.log("sub-childssssss");
  $(this).parent().toggleClass("opened");
  e.stopPropagation();
  
  });












/*
 AO start 
*/

  function animateElements() {
    $('.progressbarCircle').each(function () {
        let elementPos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        // var percent = $(this).find('.circle').attr('data-percent');
        let minValue = $(this).find('.circle').attr('aria-valuenow');
        let maxValue = $(this).find('.circle').attr('aria-valuemax');
        let animate = $(this).data('animate');
        let total = (minValue / maxValue) * 100
  
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
            $(this).data('animate', true);
            $(this).find('.circle').circleProgress({
                startAngle: -Math.PI / 1.3,
                value: total / 100,
                size : 92,
                thickness:10,
                emptyFill: " rgba(0, 112, 103, 0.99)" ,
                fill: {
                  color: "rgba(204, 160, 121, 0.99)"
                }
            }).on('circle-animation-progress', function (event, progress, stepValue) {
                $(this).find('strong').text((stepValue*100).toFixed(0));
                // instance.arcFill = setGradient(stepValue)
            }).stop();
        }
    });
}

animateElements();
// $(window).scroll(animateElements);

// if($('body').hasClass("Dark")) {
//   // $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: '#f0f' }});
// }else {
//   $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
// }

// $(".dark-Mode").on("click", function (e) {
//   console.log("dark-Mode");
//   $(this).toggleClass("dark-here");
//   $("body").toggleClass("Dark");
//   if($('body').hasClass("Dark")) {
//     $('.circle').circleProgress({ emptyFill:"rgba(0, 154, 189, 0.99)", fill: { color: 'rgba(187, 187, 187, 0.99)' }});
//     $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: 'rgba(0, 112, 103, 0.99)' }});
//   }else {
//     $('.circle').circleProgress({  emptyFill:"rgba(0, 112, 103, 0.99)", fill: { color: ' rgba(204, 160, 121, 0.99)' }});
//     $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
//   }
//   e.stopPropagation();
 
// });


$(".dark-Mode").on("click", function (e) {
  if($('body').hasClass("Dark")) {
  	setLightMode();
  }else {
  	setDarkMode();
  }
  e.stopPropagation();
 
});



});

    // end ready


function setLightMode(){
  if($('body').hasClass("Dark")) {
      $("body").toggleClass("Dark");
      $(".dark-Mode").toggleClass("dark-here");
      $('.circle').circleProgress({  emptyFill:"rgba(0, 112, 103, 0.99)", fill: { color: ' rgba(204, 160, 121, 0.99)' }});
      $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
  }
  document.cookie = "darkMode=0;path=/";
}
function setDarkMode(){
  if($('body').hasClass("Dark") == false) {
      $("body").toggleClass("Dark");
      $(".dark-Mode").toggleClass("dark-here");
      $('.circle').circleProgress({ emptyFill:"rgba(0, 154, 189, 0.99)", fill: { color: 'rgba(187, 187, 187, 0.99)' }});
      $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: 'rgba(0, 112, 103, 0.99)' }});
  }
  document.cookie = "darkMode=1;path=/";
}



// swiper

$(function () {

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    height: 185,
    slidesPerGroup: 2,
    spaceBetween: 20,
    // grid: {
    //   rows: 2,
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

//     breakpoints: {
//     // when window width is <= 575
//     0: {
//         slidesPerView: 1,
//         spaceBetweenSlides: 30,
//         height: 241,
//         grid: {
//           rows: 1,
//         },

//     },
//     // when window width is <= 575px
//     575: {
     
//         slidesPerView: 1,
//         height: 270,
//         grid: {
//           rows: 1,
//         },
//     },
//     // when window width is <= 992px
//     992: {
//      grid: {
//           rows: 1,
//         },
//  }
// }

});

});






function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
} 




/*
              mySwiperContary
*/

$(function (){


  var swiper = new Swiper(".mySwiperContary", {
    // slidesPerView: 9,
    spaceBetween: 20,
    slidesPerView: "auto",
    slidesPerGroup: 2,
    pagination: {
      // el: ".swiper-pagination",
      // clickable: true,
    },
    navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 7,
      slidesPerGroup: 2,
    },
    
    575: {
      slidesPerView: "auto",
      spaceBetween: 12
    },
    1440: {
      slidesPerView: "4.3",
      spaceBetween: 20
    },
  
  }
  });


})


function showKsaDetails(){
  $(".hub-card").addClass("hide")
  $(".KSA .hub-card").toggleClass("hide")
  $(".mySwiperContary .item").removeClass("clicked")
  $(".ksa-a").closest(".item").addClass("clicked")
}

function showUaeDetails(){
  $(".hub-card").addClass("hide")
  $(".UAE .hub-card").toggleClass("hide")
  $(".mySwiperContary .item").removeClass("clicked")
  $(".uae-a").closest(".item").addClass("clicked")
}

function showEgyDetails(){
  $(".hub-card").addClass("hide")
  $(".EGYPT .hub-card").toggleClass("hide")
  $(".mySwiperContary .item").removeClass("clicked")
  $(".egy-a").closest(".item").addClass("clicked")

}

/*
 AO start 
*/

// $(document).ready(function () {

   
    
// });






/*
***** state one

// $(document).ready(function ($) {

//   function animateElements() {
       
//     $('.progressbarCircle').each(function () {
//         var elementPos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         var percent = $(this).find('.circle').attr('data-percent');
//         var animate = $(this).data('animate');
  
//         if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
//             $(this).data('animate', true);
//             $(this).find('.circle').circleProgress({
//                 startAngle: -Math.PI / 1.3,
//                 value: percent / 100,
//                 size : 92,
//                 thickness:10,
//                 emptyFill: " rgba(204, 160, 121, 0.99)" ,
//                 fill: {
//                   color: "#007066"
//                 }
//             }).on('circle-animation-progress', function (event, progress, stepValue) {
//                 $(this).find('strong').text((stepValue*100).toFixed(0));
//                 // instance.arcFill = setGradient(stepValue)
//             }).stop();
//         }
//     });
// }

//     animateElements();
//     $(window).scroll(animateElements);
// });
*/

/*
 AO end 
*/