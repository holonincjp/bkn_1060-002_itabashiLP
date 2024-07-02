$(function () {

  /*===============================*/
  /* headernav(PC,SP共通。※2箇所あるためクラス「.js-replace-headernav」にしている)
  /*===============================*/
  (function () {
    var view = '' +
      '<ul class="m-headerNav__list">' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#sec01">マルチアクセス</a></li>' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#sec02">充実の生活利便</a></li>' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#sec03">日々を快適にする間取り</a></li>' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#sec04">資産価値</a></li>' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#sec05">安心の信頼と実績</a></li>' +
      '<li class="m-headerNav__list_item"><a class="m-headerNav__list_link" href="#map">現地・マンションギャラリー案内図</a></li>' +
      '</ul>';
    $('.js-replace-headernav').replaceWith(view);
  }).call(this);
});
