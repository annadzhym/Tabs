'use strict';
(function ($) {
    $(document).ready(function() {
        $('.tabs__menu--el').click(function() {
            if (!$(this).hasClass('active')) {
                var i = $(this).index();
                $('.tabs__menu--el').removeClass('active');
                $('.tabs .active').hide().removeClass('active');
                $(this).addClass('active');
                $($('.tabs').children('.info')[i]).fadeIn(1000).addClass('active');
            }
        });
    });
})(jQuery);
