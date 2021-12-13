jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Header scroll class
  var about = $("#about").offset().top;
  var services = $("#services").offset().top;
  var skills = $("#skills").offset().top;
  var portfolio = $("#portfolio").offset().top;
  var contact = $("#contact").offset().top;

  console.log("about " + about);
  console.log("services " + services);
  console.log("skills " + skills);
  console.log("portfolio " + portfolio);
  console.log("contact " + contact);



  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    console.log("scroll" + scroll);
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }

    if (scroll >= 0 && scroll < about - 100) {
      $('.nav-menu li:nth-child(1)').addClass('menu-active');
    } else {
      $('.nav-menu li:nth-child(1)').removeClass('menu-active');
    }
    if (scroll >= about - 100 && scroll < services - 100) {
      // alert("이벤트 실행");
      $('.nav-menu li:nth-child(2)').addClass('menu-active');
    } else {
      $('.nav-menu li:nth-child(2)').removeClass('menu-active');
    }
    if (scroll >= services - 100 && scroll < skills - 100) {
      // alert("이벤트 실행");
      $('.nav-menu li:nth-child(3)').addClass('menu-active');
      // pieChartHtml.enableAnimation();
      // pieChartHtml.update(95);
      // pieChartCss.enableAnimation();
      // pieChartCss.update(90);
      // pieChartGraph.update(85);
      // pieChartGraph.enableAnimation();
      // pieChartJs.update(80);
      // pieChartJs.enableAnimation();
    } else {
      $('.nav-menu li:nth-child(3)').removeClass('menu-active');
      // // pieChartHtml.update(0);
      // pieChartHtml.enableAnimation();
      // // pieChartCss.update(0);
      // pieChartCss.enableAnimation();
      // // pieChartGraph.update(0);
      // pieChartGraph.enableAnimation();
      // // pieChartJs.update(0);
      // pieChartJs.enableAnimation();
    }
    if (scroll >= skills - 100 && scroll < portfolio - 120) {
      // alert("이벤트 실행");          

      $('.nav-menu li:nth-child(4)').addClass('menu-active');
    } else {

      $('.nav-menu li:nth-child(4)').removeClass('menu-active');
    }
    if (scroll >= portfolio - 120 && scroll < contact - 120) {
      // alert("이벤트 실행");
      $('.nav-menu li:nth-child(5)').addClass('menu-active');
    } else {
      $('.nav-menu li:nth-child(5)').removeClass('menu-active');
    }
    if (scroll >= contact - 120) {
      // alert("이벤트 실행");
      $('.nav-menu li:nth-child(6)').addClass('menu-active');
    } else {
      $('.nav-menu li:nth-child(6)').removeClass('menu-active');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  $(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
  });

  // Skills section
  $('#skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

});


//  preview script

//랜딩페이지 설정 
$(".Landing_btn").click(function (e) {
  e.preventDefault();
  $(".landing").stop().slideDown(1000);
});

$(".mobileBtn").click(function (e) {
  e.preventDefault();
  $(".mobileApp").stop().slideDown(1000);
});

$(".eventPage_btn").click(function (e) {
  e.preventDefault();
  $(".eventPage").stop().slideDown(1000);
});

$(".cardNews_btn").click(function (e) {
  e.preventDefault();
  $(".cardNews").stop().slideDown(1000);
});

$(".webPage_btn").click(function (e) {
  e.preventDefault();
  $(".webPage").stop().slideDown(1000);
});

$(".responsivePage_btn").click(function (e) {
  e.preventDefault();
  $(".responsivePage").stop().slideDown(1000);
});

$(".leaflet_btn").click(function (e) {
  e.preventDefault();
  $(".leaflet").stop().slideDown(1000);
});

$(".view_detail a").click(function (e) {
  e.preventDefault();
  $(".view_detail").stop().slideUp(1000);
});

// 파이차트 플러그인

window.onload = function () {

  // html 파이차트
  // var element = document.querySelector('.html_chart');
  // new EasyPieChart(element, {
  //   barColor: "#17a2b8",
  //   lineWidth: "12",
  //   size: 150,
  //   lineCap: "square",
  //   trackColor: "#ddd",
  //   // scaleLength: 고슴도치 없애기
  //   scaleLength: 0
  //   // your options goes here
  // }); 
  // var chart = new EasyPieChart(element, options);
  // update?
  // chart.update(40);
  // disable animation
  // chart.disableAnimation();
  // enable animation
  // chart.enableAnimation();


  // 키보드 이펙트
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
}


// 타이핑 

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

var elementH = document.querySelector('.html_chart');
  var pieChartHtml =  new EasyPieChart(elementH, {
    barColor: "#17a2b8",
    lineWidth: "12",
    size: 150,
    lineCap: "square",
    trackColor: "#ddd",
    // scaleLength: 고슴도치 없애기
    scaleLength: 0
    // your options goes here
  });
  // Back to top button

   // css 파이차트
   var element2 = document.querySelector('.css_chart');
   var pieChartCss =new EasyPieChart(element2, {
     barColor: "#ffc107",
     lineWidth: "12",
     size: 150,
     lineCap: "square",
     trackColor: "#ddd",
     animate: 1500,
     // scaleLength: 고슴도치 없애기
     scaleLength: 0
     // your options goes here
   });
 
   // 그래픽툴
   var element3 = document.querySelector('.graphic_chart');
   var pieChartGraph = new EasyPieChart(element3, {
     barColor: "#28a745",
     lineWidth: "12",
     size: 150,
     lineCap: "square",
     trackColor: "#ddd",
     animate: 2000,
     // scaleLength: 고슴도치 없애기
     scaleLength: 0
     // your options goes here
   });
 
   //js 파이차트
   var element4 = document.querySelector('.js_chart');
   var pieChartJs = new EasyPieChart(element4, {
     barColor: "#dc3545",
     lineWidth: "12",
     size: 150,
     lineCap: "square",
     trackColor: "#ddd",
     animate: 2500,
     // scaleLength: 고슴도치 없애기
     scaleLength: 0
     // your options goes here
   });