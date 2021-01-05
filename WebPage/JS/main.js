function scrollChk(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

    jQuery('.scroll-animation').not('.active').each(function(){
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight){
            $(this).addClass("active");
        }
    });
}
$(window).scroll(function (){
    scrollChk();
});
$('body').on('touchmove', function() {
    scrollChk();
});

//https://cruw.co.jp/blog/2018/07/css_scroll_animation/
