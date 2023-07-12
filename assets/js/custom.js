$( document ).ready(function() {

    if($('.InHome').length ){
        $('.homeBanner').addClass('homeClass')
     }
    $(".navbar-light .dmenu").hover(
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
        },
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
        }
      );

    let arrow = [
      '<img src="../assets/images/home/Arrow-Right.svg" />',
      '<img src="../assets/images/home/Arrow-Left.svg" />',
      ]
      let arrow2 = [
        '<img src="../assets/images/home/Arrow-Right2.svg" />',
        '<img src="../assets/images/home/Arrow-Left2.svg" />',
        ]
      let arrow3 = [
        '<img src="../assets/images/home/vote-Arrow-Right.svg" />',
        '<img src="../assets/images/home/vote-Arrow-Left.svg" />',
        ]


   
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
      dots:false
  })


  $('.owl-carousel-new').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    navText: arrow2,
    rtl: true,
    items:5,
    dots:false
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
  dots:false
})


$('.owl-carousel-sys').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  navText: arrow2,
  rtl: true,
  items:5,
  dots:false
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









    // end ready






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


});




    /* --- Font sizing Function --- */
    // $('.top-functions .increase').click(function(){
    //     console.log("increase");
    //     modifyFontSize('html','increase');
    //   });
    //   $('.top-functions .decrease').click(function(){
    //     console.log("dec");
    //     modifyFontSize('html','decrease')
    //   });

        /*----Font sizing Function ---*/
  // function modifyFontSize(MyElement,flag){

  //   var HtmlElement = $(MyElement);
  //   var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
  //   if (flag =='increase' & currentFontSize < 19 )
  //       currentFontSize += 1;
  //   else if (flag == 'decrease' & currentFontSize >= 16 )
  //       currentFontSize -= 1;
  //   else if (flag == 'reset')
  //   currentFontSize = 16;

  //   HtmlElement.css('font-size', currentFontSize);

  //   // console.log(currentFontSize);

  // }





  // $(".topNav .slide-nav").on("click", function (e) {
  //   console.log("slideeeeeeeee");
  //   $(".bannerBg").toggleClass("slide-me");
  //   e.stopPropagation();
   
  // });






  // $(".social-share ul li ").on("hover", function (e) {
  //   console.log("hover");
  //   $(this).toggleClass("hoverd");
  //   e.stopPropagation();
   
  // });

  $(".social-share ul li").hover(function () {
    console.log("hover");
    $(this).toggleClass("hoverd");
});

$(".sub-menu-parent").on("click", function (e) {
  console.log("sub-childssssss");
  $(this).parent().toggleClass("opened");
  e.stopPropagation();
 
});





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








/*
 AO start 
*/

$(document).ready(function () {

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

    if($('body').hasClass("Dark")) {
      // $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: '#f0f' }});
    }else {
      $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
    }

    $(".dark-Mode").on("click", function (e) {
      console.log("dark-Mode");
      $(this).toggleClass("dark-here");
      $("body").toggleClass("Dark");
      if($('body').hasClass("Dark")) {
        $('.circle').circleProgress({ emptyFill:"rgba(0, 154, 189, 0.99)", fill: { color: 'rgba(187, 187, 187, 0.99)' }});
        $('.colorTwo').circleProgress({ emptyFill:"rgba(187, 187, 187, 0.99)", fill: { color: 'rgba(0, 112, 103, 0.99)' }});
      }else {
        $('.circle').circleProgress({  emptyFill:"rgba(0, 112, 103, 0.99)", fill: { color: ' rgba(204, 160, 121, 0.99)' }});
        $('.colorTwo').circleProgress({  emptyFill:"rgba(204, 160, 121, 0.99)", fill: { color: ' rgba(0, 112, 103, 0.99)' }});
      }
      e.stopPropagation();
     
    });
    
});






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