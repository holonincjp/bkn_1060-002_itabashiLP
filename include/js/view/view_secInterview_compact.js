$(function () {

  /*===============================*/
  /* secInterview_compact
  /*===============================*/
  (function () {
    var view = '' +
      '<style>' +
      '@media screen and (max-width:767px){' +
      '.ohkaizen-interview {background-color: #fff;padding: 20px 0 40px;}' +
      '.ohkaizen-interview_title {padding: 0 15px;}' +
      '.ohkaizen-interview_contents {margin-top: 10px;}' +
      '.ohkaizen-interview_contents--01 {margin-top: 20px;}' +
      '.ohkaizen-interview_button {margin-top: 40px;}' +
      '.ohkaizen-interview_button__link {display: block;width: 302px;margin: 0 auto;}' +
      '}' +
      '@media screen and (min-width:768px){' +
      '.ohkaizen-insertInterviewParts {background: #fff;}' +
      '.ohkaizen-insertInterviewParts__inn {max-width: 1100px;width: 100%;margin: 0 auto;padding: 80px 0;}' +
      '.ohkaizen-insertInterviewParts__heading {margin-bottom: 40px;}' +
      '.ohkaizen-insertInterviewParts__blocks {display: flex;flex-wrap: wrap;width: calc(100% + 32px);margin: 0 -16px calc(-16px + 56px);}' +
      '.ohkaizen-insertInterviewParts__block {display: block;margin: 0 16px 16px;width: calc(50% - 32px);}' +
      '.ohkaizen-insertInterviewParts__button {width: 534px;margin: 0 auto;}' +
      '}' +
      '</style>' +
      '<section class="ohkaizen-insertInterviewParts" id="ohkaizen-insertInterviewParts">'+
      '<div class="ohkaizen-insertInterviewParts__inn">' +
      '<div class="ohkaizen-interview" id="interview">' +
      '<div class="ohkaizen-interview_title ohkaizen-insertInterviewParts__heading ">' +
      '<picture class="ohkaizen-interview_title__image lozad" alt="「オープンレジデンシア」にお住まいの方にインタビューしました">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_title.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_title.png"/>' +
      '<img src="./include/img/interview_title.png" alt="「オープンレジデンシア」にお住まいの方にインタビューしました"/>' +
      '</picture>' +
      '</div>' +
      '<div class="ohkaizen-insertInterviewParts__blocks">'+
      '<div class="ohkaizen-interview_contents ohkaizen-insertInterviewParts__block ohkaizen-interview_contents--1">' +
      '<picture class="ohkaizen-interview_contents__image lozad" alt="自分の好きな空間にカスタマイズ。月々の支払いも条件を叶えられると購入を決意しました。">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_compact_01.jpg"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_compact_01.jpg"/>' +
      '<img src="./include/img/interview_compact_01.jpg" alt="自分の好きな空間にカスタマイズ。月々の支払いも条件を叶えられると購入を決意しました。"/>' +
      '</picture>' +
      '</div>' +
      '<div class="ohkaizen-interview_contents ohkaizen-insertInterviewParts__block ohkaizen-interview_contents--2">' +
      '<picture class="ohkaizen-interview_contents__image lozad" alt="都心の利便性を享受しながら、静かに暮らせる立地が決めて。セキュリティ面も優れているので安心です">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_compact_02.jpg"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_compact_02.jpg"/>' +
      '<img src="./include/img/interview_compact_02.jpg" alt="都心の利便性を享受しながら、静かに暮らせる立地が決めて。セキュリティ面も優れているので安心です"/>' +
      '</picture>' +
      '</div>'+
      '<div class="ohkaizen-interview_contents ohkaizen-insertInterviewParts__block ohkaizen-interview_contents--3">' +
      '<picture class="ohkaizen-interview_contents__image lozad" alt="条件にぴったりの家がここだった。オーダーシステムで、機能性とデザイン性を兼ね備えた空間に。">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_compact_03.jpg"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_compact_03.jpg"/>' +
      '<img src="./include/img/interview_compact_03.jpg" alt="条件にぴったりの家がここだった。オーダーシステムで、機能性とデザイン性を兼ね備えた空間に。"/>' +
      '</picture>' +
      '</div>' +
      '<div class="ohkaizen-interview_contents ohkaizen-insertInterviewParts__block ohkaizen-interview_contents--4">' +
      '<picture class="ohkaizen-interview_contents__image lozad" alt="30代前半にして、ライフステージの変化を視野に。立地が良く資産価値の高いマンションを選択。">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_compact_04.jpg"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_compact_04.jpg"/>' +
      '<img src="./include/img/interview_compact_04.jpg" alt="30代前半にして、ライフステージの変化を視野に。立地が良く資産価値の高いマンションを選択。"/>' +
      '</picture>' +
      '</div>' +
      '</div>' +
      '<div class="ohkaizen-interview_button ohkaizen-insertInterviewParts__button">' +
      '<a class="ohkaizen-interview_button__link" href="https://ms.ohd.openhouse-group.com/voice/interview/">' +
      '<picture class="ohkaizen-interview_contents__image lozad" alt="「ご購入者様の声」をもっと見る">' +
      '<source media="(min-width:768px)" srcset="./include/img/interview_cvbtn.png"/>' +
      '<source media="(max-width:767px)" srcset="./include/img/sp/interview_cvbtn.png"/>' +
      '<img src="./include/img/interview_cvbtn.png" alt="「ご購入者様の声」をもっと見る"/>' +
      '</picture>' +
      '</div>' +
      '</div>' +
      '</section>';
    $('#js-replace-secInterview_compact').replaceWith(view);
  }).call(this);
});
