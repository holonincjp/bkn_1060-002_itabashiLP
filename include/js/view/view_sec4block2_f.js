$(function () {

  /*===============================*/
  /* sec4block2
  /*===============================*/
  (function () {
    var view = '' +
      '<div class="m-sec4Block2 inviewFadeIn">' +
        '<div class="m-sec4Block2__ttl">とはいえ・・・夫婦二人マンションを<br class="l-only--sp">購入したとして</div>' +
          '<div class="m-sec4Block2__img">' +
            '<picture class="lozad" data-alt="">' +
              '<source media="(min-width:768px)" srcset="./include/img/sec4_block2_img_f.png"/>' +
              '<source media="(max-width:767px)" srcset="./include/img/sp/sec4_block2_img_f.png"/>' +
            '</picture>' +
          '</div>' +
        '<div class="m-sec4Block2__ttl">急な転勤や家族が増えても、本物件は<br><strong>「売りやすい物件」</strong>と考えられます。</div>' +
      '</div>';
    $('#js-replace-sec4block2_f').replaceWith(view);
  }).call(this);
});
