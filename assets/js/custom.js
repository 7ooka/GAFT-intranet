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



$(".dark-Mode").on("click", function (e) {
  console.log("dark-Mode");
  $(this).toggleClass("dark-here");
  $("body").toggleClass("Dark");
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