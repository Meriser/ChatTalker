$(document).ready(function () {
    /* AOS.js */
    AOS.init({
        once: true,
        duration: "1000",
    });

    // Scroll to top 效果
    $(".scrollTop-btn").click(function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 500);
    });

    // Swiper 輪播
    function initSwiper() {
        const swiper = new Swiper("#comment-swiper", {
            /*  預設要顯示幾個卡片 */
            slidesPerView: 1,
            /* 斷點設定 */
            breakpoints: {
                /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
                992: {
                    slidesPerView: 3
                },
                /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
                768: {
                    slidesPerView: 2
                },
                /* 更小時都顯示 1 欄 */
                0: {
                    slidesPerView: 1
                }
            },
            /* 卡片元素的間隔 */
            spaceBetween: 16,
            pagination: {
                /* 我想將分頁圓點綁在哪個 class */
                el: ".swiper-pagination",
                /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
                clickable: true
            },
            /* 循環 */
            loop: false,
            /* 自動播放 */
            autoplay: {
                delay: 3500, /* 延遲時間 */
            },
            /* 輪播速度 */
            speed: 800,
        });
    }
    /* 觸發 Swiper 函式 */
    initSwiper();

    // select 選擇方案
    $('#selectBtn1').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings('li').find('a').removeClass('active');
        $('#basicPeopleNum').text('10000');
        $('#basicPrice').text('600');
        $('#standardPeopleNum').text('10000');
        $('#standardPrice').text('1600');
    });
    $('#selectBtn2').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings('li').find('a').removeClass('active');
        $('#basicPeopleNum').text('15000');
        $('#basicPrice').text('700');
        $('#standardPeopleNum').text('15000');
        $('#standardPrice').text('1700');
    });
    $('#selectBtn3').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings('li').find('a').removeClass('active');
        $('#basicPeopleNum').text('20000');
        $('#basicPrice').text('800');
        $('#standardPeopleNum').text('20000');
        $('#standardPrice').text('1800');
    });
    $('#selectBtn4').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings('li').find('a').removeClass('active');
        $('#basicPeopleNum').text('25000');
        $('#basicPrice').text('900');
        $('#standardPeopleNum').text('25000');
        $('#standardPrice').text('1900');
    });
    $('#selectBtn5').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings('li').find('a').removeClass('active');
        $('#basicPeopleNum').text('>25000');
        $('#basicPrice').text('1000');
        $('#standardPeopleNum').text('>25000');
        $('#standardPrice').text('2000');
    });

    // question 收合效果
    $('.question-btn').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $(this).parent().parent().siblings('li').find('div').find('a').removeClass('active');

        $(this).parent().find('p').slideToggle(500);
        $(this).parent().parent().siblings('li').find('div').find('p').slideUp(500);

        $(this).parent().find('p').toggleClass('show');
        $(this).parent().parent().siblings('li').find('div').find('p').removeClass('show');
    });
});