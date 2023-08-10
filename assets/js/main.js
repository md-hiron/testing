(function($){
    $(document).ready(function(){
        $(window).scroll(function () {
          //console.log($(window).scrollTop())
          if ($(window).scrollTop() > 863) {
            $('.navbar').addClass('navbar-fixed');
            $('.blacklogo').show();
            $('.whitelogo').hide();
          }
          if ($(window).scrollTop() < 864) {
            $('.navbar').removeClass('navbar-fixed');
            $('.blacklogo').hide();
            $('.whitelogo').show();
          }
        });

        $('#menu-toggle').on('click', function(){
          $('.navigation').toggleClass('active-navigation');
        });

        $('.faq-head').on('click', function(){
          $(this).next().slideToggle();
          $(this).toggleClass('active-faq-head');
        })
    });
})(jQuery);

