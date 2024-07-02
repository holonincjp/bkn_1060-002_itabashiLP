$(function () {

  /*===============================*/
  /* footerbnr ※名古屋バージョン
  /*===============================*/
  (function () {
    var view = '' +
      '<ul class="m-footerBnr">' +
        '<li class="m-footerBnr__item inviewFadeIn"><a class="m-footerBnr__bnr" href="https://ms.ohd.openhouse-group.com/about/"><img class="lozad" data-src="./include/img/bnr_no1_nagoya.jpg" alt=""></a>' +
          '<p class="m-footerBnr__txt">※自社調べ（2019年1月～2020年12月）<br>※共同企業体（ジョイント・ベンチャー）の物件については、企業数に応じて1物件を分割してカウントしております。また、小数点以下は切り上げております。</p>' +
        '</li>' +
        '<li class="m-footerBnr__item inviewFadeIn"><span class="m-footerBnr__bnr"><img class="lozad" data-src="./include/img/bnr_suumo.jpg" alt=""></span></li>' +
      '</ul>';
    $('#js-replace-footerbnr_nagoya').replaceWith(view);
  }).call(this);
});
