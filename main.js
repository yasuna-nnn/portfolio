//animatedクラスのついた要素にwaypointを登録
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('fadeInUp')
        .removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element)
        .addClass('fadeOutUp')
        .removeClass('fadeInUp');
    }
  },

  //要素が画面に来たらhandler実行
  offset: '50%',
});
