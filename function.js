(function($) {

  // sp-nav
  $(function() {
    var header_h = $('#header').height();
    $(window).resize(function() {
      var with_bar = window.innerWidth;
      var without_bar = document.body.clientWidth;
      var bar = with_bar - without_bar;
      var w = $(window).width();
      var x = 980 - bar;


      if (w > x) {

        $('#header-nav-btn').text('メニュー').val('menu');
        $('#header-nav.clone').remove();
        $('p.dummy').remove();
      }
    });

    $('#header-nav-btn').click(function() {
      var value = $(this).val();
      if (value === 'menu') {
        $(this).text('閉じる').val('close');
        $('body').append('<p class="dummy"></p>');
        $('#header-nav').clone().hide().insertAfter('#header').addClass('clone').slideDown();
        $('#header-nav.clone').css('top', header_h);
      } else {
        $(this).text('メニュー').val('menu');
        $('p.dummy').remove();
        $('#header-nav.clone').slideUp(function() {
          $(this).remove();
        });
      }
    });

    $('body').on('click touchend', '.dummy', function() {
      $('#header-nav-btn').text('メニュー').val('menu');
      $('#header-nav.clone').slideUp(function() {
        $(this).remove();
      });
      $('p.dummy').remove();
      return false;
    });
  });
  // sp-nav-end

  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });


  $("[data-fancybox]").fancybox({

  });

})(jQuery);
