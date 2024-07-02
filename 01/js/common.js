$(function () {

  var BREAKPOINT_SP = 767;
  var winW;

  $(window).on('load resize', function () {

    winW = window.innerWidth;

    if (winW > BREAKPOINT_SP) {
      // PCのみ処理
      linkImgReplace();
    } else {
      // SPのみ処理
    }
  });

  /*===============================*/
  /* menuのクリック
  /*===============================*/
  (function () {
    var menu = $('#menu .m-headerNav');
    var menuLink = $('#menu .m-headerNav a');
    var menuBtn = $('#js-menuBtn');

    // SPメニュー開閉
    menuBtn.on('click', function () {
      menuBtn.toggleClass('is-open');
      menu.toggleClass('is-open');
    })
    // メニュー内のaリンク
    menuLink.on('click', function () {
      menuBtn.toggleClass('is-open');
      menu.toggleClass('is-open');
    })
  }).call(this);

  /*===============================*/
  /* swiper
  /*===============================*/
  (function () {
    var swiper = new Swiper('#sec2Gallery', {
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.m-sec2Block__gallery_next',
        prevEl: '.m-sec2Block__gallery_prev',
      },
      slideClass: 'm-sec2Block__gallery_slide',
      wrapperClass: 'm-sec2Block__gallery_wrapper',
    });
  }).call(this);

  /*===============================*/
  /* pageTop
  /*===============================*/
  (function () {
    var timeoutId
    var pageTop = document.getElementById('pageTop');

    window.addEventListener("scroll", function () {
      pageTop.classList.add("is-scroll");

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function () {
        pageTop.classList.remove("is-scroll");
      }, 500);
    });

  }).call(this);

  /*===============================*/
  /* lozad
  /*===============================*/
  (function () {
    var observer = lozad();
    observer.observe();
  }).call(this);

  /*===============================*/
  /* inview フェードイン
  /*===============================*/
  (function () {
    $('.inviewFadeIn').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('is-fadeIn');
        // if(visiblePartY === 'both'){
        //   $(this).stop().addClass('pu-fadeIn');
        // }
      } else {
        //$(this).stop().removeClass('pu-fadeIn');
      }
    });
  }).call(this);

  /*===============================*/
  /* smoothScroll
  /*===============================*/
  (function () {
    var $scrollTarget = $((function () {
      if ('scrollingElement' in document) {
        return document.scrollingElement;
      }
      if (navigator.userAgent.indexOf('WebKit') != -1) {
        return document.body;
      }
      return document.documentElement;
    })());

    $(document).on('click', 'a[href^="#"]', function (event) {
      // ハッシュリンク
      const $el = $(event.currentTarget);
      const id = $el.attr("href");
      const $target = $(id);
      const getY = function () {
        if ($('.m-headerWrap').length) {
          return $target.offset().top - $('.m-headerWrap').outerHeight() - 150;
        } else {
          return $target.offset().top;
        }
      }
      if ($target.length > 0) {
        event.preventDefault();
        $scrollTarget.animate({
          scrollTop: getY()
        }, {
          duration: 600,
          easing: "easeOutCubic",
          step: function (now, fx) {
            let realPos = getY();
            if (fx.end !== realPos) {
              fx.end = realPos;
            }
          },
        });
      }
    });

  }).call(this);

  /*===============================*/
  /* ホバー画像切り替え（フェードイン・フェードアウト）
  /*===============================*/
  function linkImgReplace() {
    $('.js-link-img-replace').each(function () {
      const fadeSpeed = 300;
      let onImage = $(this).attr('src').replace('--off', '--on');

      this.onHtml = $('<img src="' + onImage + '" style="position:absolute; opacity:0;" />');
      $(this).before(this.onHtml);

      $(this.onHtml).hover(function () {
        $(this).stop().animate({ 'opacity': '1' }, fadeSpeed);
      },
        function () {
          $(this).stop().animate({ 'opacity': '0' }, fadeSpeed);
        });
    });
  }

  /*===============================*/
  /* フッター追従(SP) ※OH既存コード流用
  /*===============================*/
  (function () {

    var FixedBottomButtonClass = function () {
      var target, showPointTarget;
      var CL_SHOW = "is-show";
      var showPoint = 0;
      var isShow = false;
      function onCreate() {
        showPointTarget = $(".m-kvMain");
        var html = '';
        html += '<div class="m-fixedBottomButtons"><div class="m-fixedBottomButtons__inner">';
        html += '<div class="m-fixedBottomButtons__item"><a href="https://ms.ohd.openhouse-group.com/form/kanto/request/kagurazaka-p/">カタログをもらう</a></div>';
        html += '<div class="m-fixedBottomButtons__item"><a href="https://ms.ohd.openhouse-group.com/form/kanto/reserve/kagurazaka-p/">来場予約をする</a></div>';
        html += '</div>';
        target = $(html).appendTo($("body"));
        onResize();
        onScroll();
        $(window).on("resize", onResize);
        $(window).on("scroll", onScroll);
      }
      function onResize() {
        showPoint = showPointTarget.offset().top + showPointTarget.outerHeight(true);
      }
      function onScroll() {
        var st = getScrollY();
        if (st > showPoint) {
          if (!isShow) {
            isShow = true;
            target.addClass(CL_SHOW);
          }
        } else {
          if (isShow) {
            isShow = false;
            target.removeClass(CL_SHOW);
          }
        }
      }
      function getScrollY() {
        return (window.scrollY == null) ? document.documentElement.scrollTop : window.scrollY;
      }
      onCreate();
      return this;
    }

    if (winW > BREAKPOINT_SP) {
      // PCのみ処理
    } else {
      // SPのみ処理
      var fixedBottomButtonCl = new FixedBottomButtonClass();
    }

  }).call(this);



  /*===============================*/
  /* modal
  /*===============================*/
  var $modal_wrap = $('.js-modal');
  $modal_wrap.prepend('<div class="js-modal_bg"></div>');
  $('.js-modal_content_inner')
    .append('<button class="js-modal_close">close</button>')
    .wrap('<div class="js-modal_content _lg">');
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn(300);
      return false;
    });
  });
  $(document).on('click', '.js-modal_close, .js-modal_bg', function () {
    $modal_wrap.fadeOut(300);
    return false;
  });

});
