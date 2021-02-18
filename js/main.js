/// 메인 페이지 JS - main.js ////
$(function (e) { ///////////////// JQB //////////////////////
  console.log('실행');

  var swiper = new Swiper('.swiper1', {
    direction: 'vertical',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper('.swiper2', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper3', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });


  $('.menu_btn').click(function () {
    console.log('dd')
    $('.mob_menu').addClass('active');
    $('.mob_bg').addClass('active');
    $('.close_btn').addClass('active');
    $('.lnb_mob').addClass('active');
    $('.gnb_mob').addClass('active');
  }); ///////// click /////////////

  $('.close_btn').click(function () {
    $('.mob_menu').removeClass('active');
    $('.lnb_mob').removeClass('active');
    $('.gnb_mob').removeClass('active');
  }); ///////// click ////////////

  $('.notice_wrap img').click(function () {
    $('.notice_wrap').toggleClass('active');
    $('.wrap').toggleClass('active');
  }); //////// click ////////////////

}); ///////////////// JQB //////////////////////