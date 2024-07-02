$(function () {

  /*===============================*/
  /* sec5
  /*===============================*/
  (function () {
    var view = '' +
      '<style>' +
      '@media screen and (max-width:767px){' +
      '.m-sec5_notice{font-size:2.93333vw;color:#000;display:inline;padding-bottom:5px}'+
      '}' +
      '@media screen and (min-width:768px){' +
      '.m-sec5_notice{font-size:12px;color:#000;display:inline;padding-bottom:5px'+
      '}' +
      '</style>' +
      '<div class="m-sec5Block">' +
      '<ul class="m-sec5Block__list">' +
      '<li class="m-sec5Block__list_item inviewFadeIn">' +
      '<div class="m-sec5Block__list_item_img">' +
      '<picture class="lozad" data-alt="恵比寿ザ・ハウス">' +
      '<source media="(min-width:768px)" srcset="./include/img/sec5_list_img01.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_list_img01.png"/>' +
      '</picture>' +
      '</div>' +
      '<p class="m-sec5Block__list_item_txt">オープンレジデンシア<br class="l-only--sp">恵比寿ザ・ハウス<span>（2016年6月・分譲済）</span></p>' +
      '</li>' +
      '<li class="m-sec5Block__list_item inviewFadeIn">' +
      '<div class="m-sec5Block__list_item_img">' +
      '<picture class="lozad" data-alt="青山ザ・ハウス<span>（2017年8月・分譲済）</span>">' +
      '<source media="(min-width:768px)" srcset="./include/img/sec5_list_img02.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_list_img02.png"/>' +
      '</picture>' +
      '</div>' +
      '<p class="m-sec5Block__list_item_txt">オープンレジデンシア<br class="l-only--sp">青山ザ・ハウス<span>（2017年8月・分譲済）</span></p>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="m-sec5Block">' +
      '<div class="m-sec5Block__img inviewFadeIn">' +
      '<picture class="lozad" data-alt="">' +
      '<source media="(min-width:768px)" srcset="./include/img/sec5_block_ranking.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_block_ranking.png"/>' +
      '</picture>' +
      '</div>' +
      '</div>' +
      '<div class="m-sec5Block">' +
      '<div class="m-sec5Block__head inviewFadeIn">' +
      '<h3 class="m-sec5Block__head_ttl">都心 × 駅近立地</h3>' +
      '<p class="m-sec5Block__head_txt">オープンハウスのマンションが<br class="l-only--sp">支持されている理由</p>' +
      '</div>' +
      '<div class="m-sec5Block__body">' +
      '<p class="m-sec5Block__body_txt inviewFadeIn">オープンハウス・ディベロップメントは、年間67,000件の仕入情報があることに加え、オープンハウスグループで土地の仕入れから、企画・開発、販売までを一貫して行うことで、お客様に“等身大”の「都心」×「駅近」マンションを提供しています。<br>都心の駅近マンションなら、通勤時間を減らし、家族の時間を増やすことができます。<br>さらに、憧れの街を、暮らす街にすることもできます。</p>' +
      '<div class="m-sec5Block__body_main">' +
      '<ul class="m-sec5Block__body_main_boxWrap">' +
      '<li class="m-sec5Block__body_main_box m-sec5Block__body_main_box--02 inviewFadeIn">' +
      '<h4 class="m-sec5Block__body_main_box_ttl m-sec5Block__body_main_box_ttl--copy">オープンレジデンシア 新築マンション <br class="l-only--sp">駅距離一覧</h4>' +
      '<h5 class="m-sec5Block__body_main_box_copy">全物件の平均駅距離分数は<strong>5.8分！</strong><p class="m-sec5_notice">※</p></h5>' +
      '<div class="m-sec5Block__body_main_box_img">' +
      '<picture class="lozad" data-alt="">' +
      '<source media="(min-width:768px)" srcset="./include/img/sec5_block_graph02.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_block_graph02.png"/>' +
      '</picture>' +
      '<p class="m-sec5_notice">※全物件とは、2018年～2020年12月迄に販売していた物件全てです。</p><br>' +
      '<p class="m-sec5_notice">※一部抜粋</p>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // '<div class="m-sec5Block">' +
      // '<div class="m-sec5Block__head inviewFadeIn">' +
      // '<h3 class="m-sec5Block__head_ttl">適正価格</h3>' +
      // '<p class="m-sec5Block__head_txt">モデルルーム等販促費をカットすることで<br class="l-only--sp">適正価格を実現</p>' +
      // '</div>' +
      // '<div class="m-sec5Block__img inviewFadeIn">' +
      // '<picture class="lozad" data-alt="">' +
      // '<source media="(min-width:768px)" srcset="./include/img/sec5_block_img01.png"/>' +
      // '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_block_img01.png"/>' +
      // '</picture>' +
      // '</div>' +
      // '</div>' +
      '<div class="m-sec5Block">' +
      '<div class="m-sec5Block__head inviewFadeIn">' +
      '<h3 class="m-sec5Block__head_ttl">洗練されたデザイン</h3>' +
      '<p class="m-sec5Block__head_txt">細部の素材にまでこだわり洗練された<br class="l-only--sp">デザインと空間に自分らしさを添える、<br class="l-only--sp">オーダーシステム</p>' +
      '</div>' +
      '<div class="m-sec5Block__img inviewFadeIn">' +
      '<picture class="lozad" data-alt="">' +
      '<source media="(min-width:768px)" srcset="./include/img/sec5_block_img02.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/sec5_block_img02.png"/>' +
      '</picture>' +
      '</div>' +
      '</div>';
    $('#js-replace-sec5').replaceWith(view);
  }).call(this);
});
